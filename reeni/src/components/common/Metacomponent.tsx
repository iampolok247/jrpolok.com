import { useEffect } from "react";

type MetaProps = {
  meta: {
    title: string;
    description?: string;
    keywords?: string;
    canonical?: string;
    ogImage?: string;
  };
};

function setMetaTag(name: string, content: string, isProperty = false) {
  const attr = isProperty ? "property" : "name";
  let el = document.head.querySelector(
    `meta[${attr}="${name}"]`
  ) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLinkTag(rel: string, href: string) {
  let el = document.head.querySelector(
    `link[rel="${rel}"]`
  ) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function MetaComponent({ meta }: MetaProps) {
  useEffect(() => {
    document.title = meta.title;

    if (meta.description) {
      setMetaTag("description", meta.description);
      setMetaTag("og:description", meta.description, true);
      setMetaTag("twitter:description", meta.description);
    }
    if (meta.keywords) {
      setMetaTag("keywords", meta.keywords);
    }
    if (meta.canonical) {
      setLinkTag("canonical", meta.canonical);
    }
    if (meta.ogImage) {
      setMetaTag("og:image", meta.ogImage, true);
      setMetaTag("twitter:image", meta.ogImage);
    }

    setMetaTag("og:title", meta.title, true);
    setMetaTag("twitter:title", meta.title);
  }, [meta.title, meta.description, meta.keywords, meta.canonical, meta.ogImage]);

  return <></>;
}
