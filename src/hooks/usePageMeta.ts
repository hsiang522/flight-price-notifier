import { useEffect } from "react";

type MetaSelector = { attr: "name" | "property"; key: string; content: string };

function setMeta({ attr, key, content }: MetaSelector) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Per-page <title> and social meta. Replaces TanStack Router's route `head()`
 * now that the app is a client-rendered SPA.
 */
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    setMeta({ attr: "name", key: "description", content: description });
    setMeta({ attr: "property", key: "og:title", content: title });
    setMeta({ attr: "property", key: "og:description", content: description });
    setMeta({ attr: "property", key: "og:type", content: "website" });
    setMeta({ attr: "name", key: "twitter:card", content: "summary_large_image" });
  }, [title, description]);
}
