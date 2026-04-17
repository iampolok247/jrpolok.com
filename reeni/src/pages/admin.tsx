import { useState, useEffect, type CSSProperties, type FormEvent } from "react";
import { useSiteData } from "@/context/SiteDataContext";
import type { BlogItem, PortfolioItem, HeroData } from "@/context/SiteDataContext";
import type { Award } from "@/data/awards";

const ADMIN_PASSWORD = "jrpolok@admin2026";

// ─── Small helpers ────────────────────────────────────────────────────────────

function Field({
  label,
  value,
  onChange,
  textarea = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  textarea?: boolean;
}) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <label style={{ display: "block", fontSize: "12px", marginBottom: "4px", opacity: 0.7 }}>
        {label}
      </label>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={3}
          style={inputStyle}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={inputStyle}
        />
      )}
    </div>
  );
}

const inputStyle: CSSProperties = {
  width: "100%",
  background: "#1a1a2e",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "8px",
  padding: "10px 14px",
  color: "#fff",
  fontSize: "14px",
  outline: "none",
  resize: "vertical" as const,
};

const cardStyle: CSSProperties = {
  background: "#0f0f23",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "12px",
  padding: "20px",
  marginBottom: "16px",
};

const btnPrimary: CSSProperties = {
  background: "#f5a623",
  color: "#000",
  border: "none",
  borderRadius: "8px",
  padding: "10px 24px",
  fontWeight: 700,
  cursor: "pointer",
  fontSize: "14px",
};

const btnDanger: CSSProperties = {
  background: "transparent",
  color: "#ff4d4d",
  border: "1px solid #ff4d4d",
  borderRadius: "6px",
  padding: "6px 14px",
  cursor: "pointer",
  fontSize: "13px",
};

const btnSecondary: CSSProperties = {
  background: "transparent",
  color: "#aaa",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: "6px",
  padding: "6px 14px",
  cursor: "pointer",
  fontSize: "13px",
};

// ─── Tabs ─────────────────────────────────────────────────────────────────────

type Tab = "hero" | "blogs" | "portfolio" | "awards";

// ─── Login Screen ─────────────────────────────────────────────────────────────

function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (pw === ADMIN_PASSWORD) {
      sessionStorage.setItem("admin_auth", "1");
      onLogin();
    } else {
      setError("Wrong password. Try again.");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#07071a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "#0f0f23",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "16px",
          padding: "48px 40px",
          width: "360px",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "36px", marginBottom: "12px" }}>🔐</div>
        <h2 style={{ color: "#fff", marginBottom: "8px", fontSize: "22px" }}>
          Admin Panel
        </h2>
        <p style={{ color: "#888", fontSize: "14px", marginBottom: "28px" }}>
          jrpolok.com
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Enter admin password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            style={{ ...inputStyle, marginBottom: "12px" }}
          />
          {error && (
            <p style={{ color: "#ff4d4d", fontSize: "13px", marginBottom: "10px" }}>
              {error}
            </p>
          )}
          <button type="submit" style={{ ...btnPrimary, width: "100%" }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

// ─── Hero Editor ──────────────────────────────────────────────────────────────

function HeroEditor() {
  const { data, updateHero } = useSiteData();
  const [form, setForm] = useState<HeroData>({ ...data.hero });
  const [rolesText, setRolesText] = useState(data.hero.roles.join("\n"));

  useEffect(() => {
    setForm({ ...data.hero });
    setRolesText(data.hero.roles.join("\n"));
  }, [data.hero]);

  const handleFieldChange = <K extends keyof HeroData>(field: K, value: HeroData[K]) => {
    const next = { ...form, [field]: value };
    setForm(next);
    updateHero({
      ...next,
      roles: rolesText.split("\n").filter((role) => role.trim()),
    });
  };

  const handleRolesChange = (value: string) => {
    setRolesText(value);
    updateHero({
      ...form,
      roles: value.split("\n").filter((role) => role.trim()),
    });
  };

  return (
    <div>
      <h4 style={{ color: "#f5a623", marginBottom: "20px" }}>Hero Section</h4>
      <div style={cardStyle}>
        <Field label="Name" value={form.name} onChange={(v) => handleFieldChange("name", v)} />
        <Field label="Subtitle Badge" value={form.subtitle} onChange={(v) => handleFieldChange("subtitle", v)} />
        <Field label="Description" value={form.description} onChange={(v) => handleFieldChange("description", v)} textarea />
        <Field label="Hero Image Path" value={form.heroImage} onChange={(v) => handleFieldChange("heroImage", v)} />
        <div style={{ marginBottom: "14px" }}>
          <label style={{ display: "block", fontSize: "12px", marginBottom: "4px", opacity: 0.7 }}>
            Typing Roles (one per line)
          </label>
          <textarea
            value={rolesText}
            onChange={(e) => handleRolesChange(e.target.value)}
            rows={6}
            style={inputStyle}
          />
        </div>
        <div style={{ color: "#8adf9b", fontSize: "13px" }}>Auto-saved</div>
      </div>
    </div>
  );
}

// ─── Blogs Editor ─────────────────────────────────────────────────────────────

function BlogsEditor() {
  const { data, updateBlogs } = useSiteData();
  const blogs = data.blogs;

  const update = (id: number, field: keyof BlogItem, value: string) => {
    const next = blogs.map((blog) =>
      blog.id === id ? { ...blog, [field]: value } : blog
    );
    updateBlogs(next);
  };

  const addBlog = () => {
    const newId = Math.max(0, ...blogs.map((b) => b.id)) + 1;
    updateBlogs([
      ...blogs,
      {
        id: newId,
        animationOrder: `animation-order-${newId}`,
        imageSrc: "/assets/images/blog/blog-img-1.jpg",
        altText: "Blog Thumbnail",
        author: "J R Polok",
        date: "April 2026",
        title: "New Blog Post Title",
        description: "Write your blog description here.",
        tags: [],
        categories: [],
        slug: `new-blog-post-${newId}`,
      },
    ]);
  };

  const removeBlog = (id: number) => {
    updateBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h4 style={{ color: "#f5a623", margin: 0 }}>Blog Posts</h4>
        <button style={btnSecondary} onClick={addBlog}>+ Add Blog</button>
      </div>
      {blogs.map((blog) => (
        <div key={blog.id} style={cardStyle}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "14px" }}>
            <span style={{ color: "#888", fontSize: "13px" }}>Blog #{blog.id}</span>
            <button style={btnDanger} onClick={() => removeBlog(blog.id)}>Remove</button>
          </div>
          <Field label="Title" value={blog.title} onChange={(v) => update(blog.id, "title", v)} />
          <Field label="Author" value={blog.author} onChange={(v) => update(blog.id, "author", v)} />
          <Field label="Date" value={blog.date} onChange={(v) => update(blog.id, "date", v)} />
          <Field label="Description" value={blog.description} onChange={(v) => update(blog.id, "description", v)} textarea />
          <Field label="Image Path" value={blog.imageSrc} onChange={(v) => update(blog.id, "imageSrc", v)} />
          <Field label="Slug" value={blog.slug} onChange={(v) => update(blog.id, "slug", v)} />
        </div>
      ))}
      <div style={{ color: "#8adf9b", fontSize: "13px" }}>Auto-saved</div>
    </div>
  );
}

// ─── Portfolio Editor ─────────────────────────────────────────────────────────

function PortfolioEditor() {
  const { data, updatePortfolio } = useSiteData();
  const items = data.portfolio;

  const update = (id: number, field: keyof PortfolioItem, value: string) => {
    const next = items.map((portfolioItem) =>
      portfolioItem.id === id ? { ...portfolioItem, [field]: value } : portfolioItem
    );
    updatePortfolio(next);
  };

  const addItem = () => {
    const newId = Math.max(0, ...items.map((p) => p.id)) + 1;
    updatePortfolio([
      ...items,
      {
        id: newId,
        animationOrder: newId,
        imageSrc: "/assets/images/latest-portfolio/portfoli-img-1.jpg",
        width: 1920,
        height: 1572,
        title: "New Project Title",
        description: "Project Category",
        slug: `new-project-${newId}`,
      },
    ]);
  };

  const removeItem = (id: number) => {
    updatePortfolio(items.filter((portfolioItem) => portfolioItem.id !== id));
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h4 style={{ color: "#f5a623", margin: 0 }}>Portfolio Items</h4>
        <button style={btnSecondary} onClick={addItem}>+ Add Project</button>
      </div>
      {items.map((item) => (
        <div key={item.id} style={cardStyle}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "14px" }}>
            <span style={{ color: "#888", fontSize: "13px" }}>Project #{item.id}</span>
            <button style={btnDanger} onClick={() => removeItem(item.id)}>Remove</button>
          </div>
          <Field label="Title" value={item.title} onChange={(v) => update(item.id, "title", v)} />
          <Field label="Category / Description" value={item.description} onChange={(v) => update(item.id, "description", v)} />
          <Field label="Image Path" value={item.imageSrc} onChange={(v) => update(item.id, "imageSrc", v)} />
          <Field label="Slug" value={item.slug} onChange={(v) => update(item.id, "slug", v)} />
        </div>
      ))}
      <div style={{ color: "#8adf9b", fontSize: "13px" }}>Auto-saved</div>
    </div>
  );
}

// ─── Awards Editor ────────────────────────────────────────────────────────────

function AwardsEditor() {
  const { data, updateAwards } = useSiteData();
  const items = data.awards;

  const update = <K extends keyof Award>(id: number, field: K, value: Award[K]) => {
    const next = items.map((awardItem) =>
      awardItem.id === id ? { ...awardItem, [field]: value } : awardItem
    );
    updateAwards(next);
  };

  const addItem = () => {
    const newId = Math.max(0, ...items.map((a) => a.id)) + 1;
    updateAwards([
      ...items,
      {
        id: newId,
        title: "New Award / Certificate",
        issuer: "Issuing Organization",
        year: "2026",
        category: "certificate",
        description: "Description of this award or certificate.",
        icon: "fa-solid fa-certificate",
      },
    ]);
  };

  const removeItem = (id: number) => {
    updateAwards(items.filter((awardItem) => awardItem.id !== id));
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h4 style={{ color: "#f5a623", margin: 0 }}>Awards &amp; Certificates</h4>
        <button style={btnSecondary} onClick={addItem}>+ Add Item</button>
      </div>
      {items.map((item) => (
        <div key={item.id} style={cardStyle}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "14px" }}>
            <span style={{ color: "#888", fontSize: "13px" }}>
              {item.category === "award" ? "🏆 Award" : "📜 Certificate"} #{item.id}
            </span>
            <button style={btnDanger} onClick={() => removeItem(item.id)}>Remove</button>
          </div>
          <Field label="Title" value={item.title} onChange={(v) => update(item.id, "title", v)} />
          <Field label="Issuer / Organization" value={item.issuer} onChange={(v) => update(item.id, "issuer", v)} />
          <Field label="Year" value={item.year} onChange={(v) => update(item.id, "year", v)} />
          <Field label="Description" value={item.description} onChange={(v) => update(item.id, "description", v)} textarea />
          <div style={{ marginBottom: "14px" }}>
            <label style={{ display: "block", fontSize: "12px", marginBottom: "4px", opacity: 0.7 }}>
              Category
            </label>
            <select
              value={item.category}
              onChange={(e) => update(item.id, "category", e.target.value as "award" | "certificate")}
              style={{ ...inputStyle }}
            >
              <option value="award">Award</option>
              <option value="certificate">Certificate</option>
            </select>
          </div>
          <Field label="Icon Class (FontAwesome)" value={item.icon} onChange={(v) => update(item.id, "icon", v)} />
        </div>
      ))}
      <div style={{ color: "#8adf9b", fontSize: "13px" }}>Auto-saved</div>
    </div>
  );
}

// ─── Main Admin Page ──────────────────────────────────────────────────────────

export default function AdminPage() {
  const { resetToDefaults } = useSiteData();
  const [authed, setAuthed] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("hero");

  useEffect(() => {
    if (sessionStorage.getItem("admin_auth") === "1") setAuthed(true);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("admin_auth");
    setAuthed(false);
  };

  if (!authed) return <LoginScreen onLogin={() => setAuthed(true)} />;

  const tabs: { key: Tab; label: string; icon: string }[] = [
    { key: "hero", label: "Hero", icon: "🏠" },
    { key: "blogs", label: "Blogs", icon: "📝" },
    { key: "portfolio", label: "Portfolio", icon: "💼" },
    { key: "awards", label: "Awards", icon: "🏆" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#07071a", color: "#fff", fontFamily: "system-ui, sans-serif" }}>
      {/* Header */}
      <div
        style={{
          background: "#0f0f23",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "16px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "22px" }}>⚙️</span>
          <div>
            <div style={{ fontWeight: 700, fontSize: "16px" }}>J R Polok — Admin Panel</div>
            <div style={{ fontSize: "12px", color: "#888" }}>jrpolok.com</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "12px" }}>
          <a
            href="/"
            style={{ ...btnSecondary, textDecoration: "none", display: "inline-flex", alignItems: "center" }}
          >
            🌐 View Site
          </a>
          <button
            style={btnDanger}
            onClick={() => {
              if (confirm("Reset all content to defaults?")) resetToDefaults();
            }}
          >
            Reset Defaults
          </button>
          <button style={btnSecondary} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <div style={{ display: "flex", maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        {/* Sidebar Tabs */}
        <div
          style={{
            width: "180px",
            minWidth: "180px",
            paddingTop: "32px",
            paddingRight: "20px",
            borderRight: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                width: "100%",
                padding: "12px 16px",
                borderRadius: "8px",
                border: "none",
                marginBottom: "4px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: activeTab === tab.key ? 700 : 400,
                background: activeTab === tab.key ? "rgba(245,166,35,0.12)" : "transparent",
                color: activeTab === tab.key ? "#f5a623" : "#aaa",
                textAlign: "left",
              }}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div style={{ flex: 1, padding: "32px 0 32px 32px" }}>
          {activeTab === "hero" && <HeroEditor />}
          {activeTab === "blogs" && <BlogsEditor />}
          {activeTab === "portfolio" && <PortfolioEditor />}
          {activeTab === "awards" && <AwardsEditor />}
        </div>
      </div>
    </div>
  );
}
