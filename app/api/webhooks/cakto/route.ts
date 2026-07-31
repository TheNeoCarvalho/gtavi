import { NextResponse } from "next/server";
import { timingSafeEqual } from "node:crypto";
import { Resend } from "resend";

export const runtime = "nodejs";

type CaktoPurchaseData = {
  id?: string;
  refId?: string;
  status?: string;
  amount?: number | string;
  baseAmount?: number | string;
  paymentMethod?: string;
  paymentMethodName?: string;
  paidAt?: string;
  customer?: {
    name?: string;
    email?: string;
    phone?: string;
    docNumber?: string;
  };
  offer?: {
    id?: string;
    name?: string;
    price?: number | string;
  };
  product?: {
    id?: string;
    name?: string;
    type?: string;
    short_id?: string;
  };
};

type CaktoPayload = {
  secret?: string;
  event?: string;
  data?: CaktoPurchaseData;
};

function secretsMatch(a: string, b: string) {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && timingSafeEqual(left, right);
}

function formatBRL(value: number | string | undefined) {
  const amount = Number(value ?? 0);
  if (Number.isNaN(amount)) return "R$ 0,00";
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(amount);
}

export async function POST(request: Request) {
  const webhookSecret = process.env.CAKTO_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return NextResponse.json({ error: "webhook not configured" }, { status: 500 });
  }

  let payload: CaktoPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  if (!payload.secret || !secretsMatch(payload.secret, webhookSecret)) {
    return NextResponse.json({ error: "invalid secret" }, { status: 401 });
  }

  if (payload.event === "purchase_approved") {
    await notifyPurchaseApproved(payload.data);
  }

  return NextResponse.json({ ok: true });
}

async function notifyPurchaseApproved(data: CaktoPurchaseData | undefined) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFICATION_EMAIL;
  if (!apiKey || !to) {
    console.error("[cakto-webhook] RESEND_API_KEY ou NOTIFICATION_EMAIL não configurados");
    return;
  }

  const productName = data?.product?.name ?? "VIZION PACK";
  const customer = data?.customer;
  const paymentMethodName = data?.paymentMethodName ?? data?.paymentMethod ?? "—";
  const amount = formatBRL(data?.amount);
  const paidAt = data?.paidAt
    ? new Date(data.paidAt).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })
    : "—";

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:12px">
      <h2 style="color:#16a34a;margin:0 0 16px">🎉 Nova compra aprovada</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        <tr>
          <td style="padding:8px 0;color:#6b7280;width:40%">Produto</td>
          <td style="padding:8px 0;font-weight:bold">${escapeHtml(productName)}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#6b7280">Cliente</td>
          <td style="padding:8px 0;font-weight:bold">${escapeHtml(customer?.name ?? "—")}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#6b7280">E-mail</td>
          <td style="padding:8px 0;font-weight:bold">${escapeHtml(customer?.email ?? "—")}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#6b7280">Telefone</td>
          <td style="padding:8px 0;font-weight:bold">${escapeHtml(customer?.phone ?? "—")}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#6b7280">Valor</td>
          <td style="padding:8px 0;font-weight:bold">${amount}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#6b7280">Método</td>
          <td style="padding:8px 0;font-weight:bold">${escapeHtml(paymentMethodName)}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#6b7280">Pagamento em</td>
          <td style="padding:8px 0;font-weight:bold">${escapeHtml(paidAt)}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;color:#6b7280">Referência</td>
          <td style="padding:8px 0;font-weight:bold">${escapeHtml(data?.refId ?? data?.id ?? "—")}</td>
        </tr>
      </table>
    </div>
  `;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "VIZION <onboarding@resend.dev>",
      to: [to],
      subject: `Nova compra aprovada — ${productName} (${amount})`,
      html,
    });
    if (error) {
      console.error("[cakto-webhook] Resend retornou erro:", error);
    }
  } catch (err) {
    console.error("[cakto-webhook] falha ao enviar e-mail:", err);
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
