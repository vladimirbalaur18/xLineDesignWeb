"use client";
import React, { useMemo, useState } from "react";
import NextImage, { ImageLoader } from "next/image";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  onLoad?: () => void;
  onError?: () => void;
  priority?: boolean;
  loading?: "lazy" | "eager";
  sizes?: string;
  fill?: boolean;
  quality?: number;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  style,
  onClick,
  onLoad,
  onError,
  priority = false,
  loading = "lazy",
  sizes,
  fill = false,
  quality = 85,
  placeholder = "empty",
  blurDataURL,
  ...props
}: OptimizedImageProps) {
  // Avoid wsrv for relative/data URLs
  const isAbsoluteHttpUrl = /^https?:\/\//i.test(src);

  // Decide once per instance: use wsrv on initial client render only.
  // - SSR: defaults to false (Next optimization)
  // - Client: defaults to true for absolute URLs; fallback to Next on error
  const [useWsrv, setUseWsrv] = useState(() => isAbsoluteHttpUrl);

  const wsrvLoader: ImageLoader | undefined = useMemo(() => {
    if (!useWsrv || !isAbsoluteHttpUrl) return undefined;
    const loader: ImageLoader = ({ src: baseSrc, width: w, quality: q }) => {
      const url = new URL("https://wsrv.nl/");
      url.searchParams.set("url", baseSrc);
      url.searchParams.set("w", String(w));
      url.searchParams.set("q", String(q ?? quality ?? 85));
      url.searchParams.set("output", "webp");
      return url.toString();
    };
    return loader;
  }, [useWsrv, isAbsoluteHttpUrl, quality]);

  const commonProps = {
    src,
    alt,
    className,
    style,
    onClick,
    onLoad,
    onError: (e?: any) => {
      // If wsrv was attempted and failed, permanently fallback to Next's default
      if (useWsrv) setUseWsrv(false);
      onError?.();
    },
    loading: priority ? "eager" : loading,
    sizes,
    priority,
    placeholder,
    blurDataURL,
    loader: wsrvLoader,
} as const;

  if (fill) {
    return <NextImage {...commonProps} fill {...props} />;
  }

  return (
    <NextImage {...commonProps} width={width} height={height} {...props} />
  );
}
