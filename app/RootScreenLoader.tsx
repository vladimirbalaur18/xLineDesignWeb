"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useHydrated } from "@/hooks/use-hydrated";

const MIN_VISIBLE_MS = 1_000; // 1 s  ⟵  adjust if you need more
const FADE_MS = 600; // length of the exit animation

export default function RootScreenLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hydrated = useHydrated();
  const [show, setShow] = useState(true); // controls DOM presence
  const startTimeRef = useRef<number>(Date.now());

  /* ─────────────── 1. show on every client‑side nav ─────────────── */
  useEffect(() => {
    startTimeRef.current = Date.now(); // remember when the new page started
    setShow(true);
  }, [pathname]);

  /* ─────────────── 2. hide only after min duration ──────────────── */
  useEffect(() => {
    if (!hydrated) return; // page not ready yet

    const elapsed = Date.now() - startTimeRef.current;
    const waitFor = Math.max(MIN_VISIBLE_MS - elapsed, 0);

    const id = setTimeout(() => setShow(false), waitFor);
    return () => clearTimeout(id); // clean up if nav changes mid‑timer
  }, [hydrated, pathname]); // re‑run on every new page

  return (
    <>
      <AnimatePresence mode="wait">
        {show && (
          <motion.div
            key="root-loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: FADE_MS / 1000, ease: "linear" }}
            className="fixed inset-0 z-[9999] flex items-center justify-center
                       bg-black pointer-events-none"
          >
            <Image
              src="/logo.jpg"
              alt="xLine Design Logo"
              width={400}
              height={400}
              priority
            />
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </>
  );
}
