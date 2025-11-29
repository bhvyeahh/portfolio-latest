"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Scroll to top on route change
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <motion.div
      key={pathname}                         // fixes transition
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.25,
        ease: [0.16, 1, 0.3, 1],             // smooth slow-in slow-out
      }}
      style={{ height: "100%" }}
    >
      {children}
    </motion.div>
  );
}
