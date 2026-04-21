import { useEffect } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "Are you open to remote opportunities in the UK and Europe?",
    answer:
      "Yes. I actively apply for remote and relocation-friendly roles across the UK and Europe in full stack engineering, SEO strategy, and AI automation.",
  },
  {
    question: "What tech stack do you use most often?",
    answer:
      "My core stack includes React, TypeScript, Laravel, Django, Node ecosystem tooling, and modern SEO-first front-end architecture for high-performance delivery.",
  },
  {
    question: "Do you provide both development and digital growth services?",
    answer:
      "Yes. I combine software engineering with technical SEO, performance optimization, paid media strategy, and conversion-focused implementation.",
  },
  {
    question: "Can you help with existing product optimization?",
    answer:
      "Absolutely. I work on code quality, speed, security hardening, crawlability fixes, and measurable growth improvements for existing web products.",
  },
  {
    question: "How can I contact you for projects or job opportunities?",
    answer:
      "Use the contact form on this website or connect through LinkedIn and email. I usually respond quickly to serious collaboration requests.",
  },
];

export default function FaqSection({
  sectionClass = "tmp-section-gapTop",
  sectionId = "faq",
}: {
  sectionClass?: string;
  sectionId?: string;
}) {
  useEffect(() => {
    const scriptId = "faq-page-schema";
    const old = document.getElementById(scriptId);
    if (old) old.remove();

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    };

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const current = document.getElementById(scriptId);
      if (current) current.remove();
    };
  }, []);

  return (
    <section className={sectionClass} id={sectionId}>
      <div className="container">
        <div className="section-head mb--50">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">FAQ</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Frequently Asked Questions
          </h2>
          <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
            Common questions about my work process, technology stack, and
            opportunities across UK and Europe.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            {faqItems.map((item, index) => (
              <details
                key={item.question}
                open={index === 0}
                className="mb-3 p-4"
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <summary style={{ cursor: "pointer", fontWeight: 700 }}>
                  {item.question}
                </summary>
                <p style={{ marginTop: "12px", marginBottom: 0 }}>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
