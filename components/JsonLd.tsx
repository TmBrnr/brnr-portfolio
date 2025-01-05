export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Tim Boerner",
          jobTitle: "Software Engineer",
          url: "https://boernergroup.de",
          description:
            "Full-stack engineer specializing in growth engineering, React, TypeScript, and Node.js",
        }),
      }}
    />
  );
}
