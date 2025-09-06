import * as React from "react";

export function Spinner({
  className = "",
  size = 8,
  borderClass = "border-blue-600",
}: {
  className?: string;
  size?: number;
  borderClass?: string;
}) {
  const sizeClass = `h-${size} w-${size}`;
  return (
    <div
      className={`animate-spin rounded-full ${sizeClass} border-b-2 ${borderClass} ${className}`}
    ></div>
  );
}

export default Spinner;

