"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function RootScreenLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const durationSeconds = 2;
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
  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key={pathname}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "linear" }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black pointer-events-none"
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
