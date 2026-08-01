import { SITE, FAQS } from "@/constants/site";

export function JsonLd() {
  const offer = {
    "@type": "Offer",
    priceCurrency: "BRL",
    price: SITE.priceBasic,
    availability: "https://schema.org/InStock",
    url: SITE.checkoutUrl,
    priceValidUntil: new Date(Date.now() + 48 * 3600 * 1000).toISOString(),
  };

  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: SITE.product,
    description: SITE.tagline,
    brand: { "@type": "Brand", name: SITE.name },
    image: `${SITE.url}/og`,
    offers: { ...offer },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
