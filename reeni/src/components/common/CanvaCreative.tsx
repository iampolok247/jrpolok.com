import { useState } from "react";
import { creativeItems } from "@/data/creatives";

export default function CanvaCreative() {
  const [failedIds, setFailedIds] = useState<number[]>([]);
  const visibleItems = creativeItems.filter((item) => !failedIds.includes(item.id));

  return (
    <section className="tmp-section-gapTop" id="canva">
      <div className="container">
        <div className="section-head mb--50">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">Creative</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Marketing Creative & Canva
          </h2>
          <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
            From social media campaigns to promotional materials, I use Canva
            to create clean, conversion-focused visual content that supports
            digital marketing campaigns.
          </p>
        </div>
        {visibleItems.length > 0 && (
          <div className="row g-4">
            {visibleItems.map((item) => (
              <div className="col-lg-3 col-sm-6" key={item.id}>
                <img
                  loading="lazy"
                  className="w-100 tmp-scroll-trigger tmp-zoom-in animation-order-1"
                  style={{ borderRadius: "12px" }}
                  alt={item.alt}
                  src={item.imageSrc}
                  onError={() =>
                    setFailedIds((prev) => [...prev, item.id])
                  }
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
