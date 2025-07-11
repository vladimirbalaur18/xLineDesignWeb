"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function RootLayoutComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const durationSeconds = 2;
  return (
    <>
      <AnimatePresence>
        <motion.div
          key={pathname}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: durationSeconds, ease: "easeOut" }}
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
      </AnimatePresence>
      {children}
    </>
  );
}
