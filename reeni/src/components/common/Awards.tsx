import { useSiteData } from "@/context/SiteDataContext";

export default function Awards() {
  const { data } = useSiteData();
  const awards = data.awards;

  const trophies = awards.filter((a) => a.category === "award");
  const certs = awards.filter((a) => a.category === "certificate");

  return (
    <section className="tmp-section-gap" id="awards">
      <div className="container">
        {/* Section Heading */}
        <div className="section-head mb--60">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">Recognition & Credentials</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Awards &amp; Certificates
          </h2>
          <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
            Officially recognized achievements and professional certifications
            across software engineering, digital marketing and technology education.
          </p>
        </div>

        {/* Awards */}
        {trophies.length > 0 && (
          <>
            <h4
              className="tmp-scroll-trigger tmp-fade-in animation-order-1 mb--30"
              style={{ color: "var(--color-primary, #f5a623)", fontWeight: 700 }}
            >
              <i className="fa-solid fa-trophy me-2" />
              Awards
            </h4>
            <div className="row mb--50">
              {trophies.map((item) => (
                <div key={item.id} className="col-lg-6 col-md-6 mb--30">
                  <div
                    className="tmp-scroll-trigger tmp-fade-in animation-order-2"
                    style={{
                      background: "var(--color-blackest, #111)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "12px",
                      padding: "28px 30px",
                      height: "100%",
                      display: "flex",
                      gap: "20px",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        minWidth: "52px",
                        height: "52px",
                        borderRadius: "50%",
                        background: "rgba(245,166,35,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "22px",
                        color: "#f5a623",
                      }}
                    >
                      <i className={item.icon} />
                    </div>
                    <div>
                      <h5 style={{ marginBottom: "4px", fontWeight: 700 }}>
                        {item.title}
                      </h5>
                      <p
                        style={{
                          color: "var(--color-primary, #f5a623)",
                          fontSize: "13px",
                          marginBottom: "8px",
                        }}
                      >
                        {item.issuer} &middot; {item.year}
                      </p>
                      <p style={{ margin: 0, opacity: 0.75, fontSize: "14px" }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Certificates */}
        {certs.length > 0 && (
          <>
            <h4
              className="tmp-scroll-trigger tmp-fade-in animation-order-1 mb--30"
              style={{ color: "var(--color-primary, #f5a623)", fontWeight: 700 }}
            >
              <i className="fa-solid fa-certificate me-2" />
              Certificates
            </h4>
            <div className="row">
              {certs.map((item) => (
                <div key={item.id} className="col-lg-4 col-md-6 mb--30">
                  <div
                    className="tmp-scroll-trigger tmp-fade-in animation-order-2"
                    style={{
                      background: "var(--color-blackest, #111)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "12px",
                      padding: "24px",
                      height: "100%",
                      display: "flex",
                      gap: "16px",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        minWidth: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        background: "rgba(245,166,35,0.10)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "18px",
                        color: "#f5a623",
                      }}
                    >
                      <i className={item.icon} />
                    </div>
                    <div>
                      <h6 style={{ marginBottom: "4px", fontWeight: 700 }}>
                        {item.title}
                      </h6>
                      <p
                        style={{
                          color: "var(--color-primary, #f5a623)",
                          fontSize: "12px",
                          marginBottom: "6px",
                        }}
                      >
                        {item.issuer} &middot; {item.year}
                      </p>
                      <p style={{ margin: 0, opacity: 0.7, fontSize: "13px" }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
