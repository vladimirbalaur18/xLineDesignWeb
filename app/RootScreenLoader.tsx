"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useHydrated } from "./hooks/use-hydrated";
import { Spinner } from "./components/Spinner";

export default function RootScreenLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const durationSeconds = 2;
  const hydrated = useHydrated();
  // Reset loading state when pathname changes
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, durationSeconds * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (!hydrated)
    return (
      <>
        <AnimatePresence>
          {
            <motion.div
              key={pathname}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "linear" }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black pointer-events-none"
            >
              <div className="flex flex-col items-center gap-2">
                <Image
                  src="/logo.jpg"
                  alt="xLine Design Logo"
                  width={400}
                  height={400}
                  priority
                />
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </>
    );

  return children;
}
