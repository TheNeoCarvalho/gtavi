import { FAQS } from "@/constants/site";
import { SectionHeading, SectionShell } from "@/components/ui/section-heading";
import { Accordion } from "@/components/ui/accordion";

export function Faq() {
  return (
    <SectionShell id="faq">
      <SectionHeading
        eyebrow="Dúvidas"
        title={
          <>
            Perguntas <span className="text-gradient">frequentes</span>
          </>
        }
      />
      <Accordion items={FAQS} />
    </SectionShell>
  );
}
