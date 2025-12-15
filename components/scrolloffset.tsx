"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function ScrollOffset() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const headerOffset = 180;
    const extra = 20;
    const totalOffset = headerOffset + extra;

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const link = target.closest("a[href^='#']") as HTMLAnchorElement;
      if (!link) return;

      const id = link.getAttribute("href")?.substring(1);
      const element = id ? document.getElementById(id) : null;
      if (!element) return;

      e.preventDefault();

      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - totalOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Atualiza o hash depois de uma animação de frame
      requestAnimationFrame(() => {
        history.replaceState(null, "", `#${id}`);
      });
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return null;
}
