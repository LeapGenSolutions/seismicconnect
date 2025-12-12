import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // wait for the page/section DOM to render
    const t = setTimeout(() => {
      if (hash) {
        const id = hash.replace("#", "");
        const el = document.getElementById(id);

        if (el) {
          // if you're using scroll-mt-* on sections, this is enough:
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }

      // no hash (or element not found) -> go to top on new page
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, 0);

    return () => clearTimeout(t);
  }, [pathname, hash]);

  return null;
}
