import { useEffect, useState } from "react";

export default function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset || 0;
      const doc = document.documentElement;
      const docHeight = Math.max(
        doc.scrollHeight - window.innerHeight,
        1 // prevent division by 0
      );

      const p = Math.min(scrollTop / docHeight, 1);
      setProgress(p);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return progress;
}
