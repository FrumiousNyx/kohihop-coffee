import { products } from "@/content/products";
import { SITE } from "@/content/site";
import { sizeLabel } from "@/content/products";

export function StructuredData() {
  const productStructuredData = products.map((product) => ({
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": `${product.name} ${sizeLabel(product.sizeMl)}`,
    "description": `${product.taste} - ${product.notes.join(", ")}`,
    "image": `${SITE.url}${product.imageSrc}`,
    "brand": {
      "@type": "Brand",
      "name": SITE.brand
    },
    "offers": {
      "@type": "Offer",
      "url": `${SITE.url}/menu#${product.id}`,
      "priceCurrency": "IDR",
      "price": product.priceIdr,
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": SITE.brand,
        "url": SITE.url
      }
    },
    "category": "Beverage",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Size",
        "value": sizeLabel(product.sizeMl)
      },
      {
        "@type": "PropertyValue", 
        "name": "Taste Profile",
        "value": product.taste
      },
      {
        "@type": "PropertyValue",
        "name": "Notes",
        "value": product.notes.join(", ")
      }
    ]
  }));

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE.brand,
    "url": SITE.url,
    "logo": `${SITE.url}/icon.svg`,
    "description": SITE.meta.description,
    "sameAs": [
      SITE.socials.instagram,
      SITE.socials.tiktok
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": `+${SITE.whatsapp.number}`,
      "contactType": "customer service",
      "availableLanguage": "Indonesian"
    }
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": SITE.meta.title,
    "url": SITE.url,
    "description": SITE.meta.description,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${SITE.url}/menu?search={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData)
        }}
      />
      {productStructuredData.map((productData, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productData)
          }}
        />
      ))}
    </>
  );
}
