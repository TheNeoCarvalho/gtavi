import { SITE, FAQS, TESTIMONIALS } from "@/constants/site";

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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: SITE.rating,
      reviewCount: SITE.reviews,
      bestRating: 5,
      worstRating: 1,
    },
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

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: TESTIMONIALS.map((t, i) => ({
      "@type": "Review",
      position: i + 1,
      itemReviewed: { "@type": "Product", name: SITE.product },
      author: { "@type": "Person", name: t.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: 5,
      },
      reviewBody: t.text,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
    </>
  );
}
