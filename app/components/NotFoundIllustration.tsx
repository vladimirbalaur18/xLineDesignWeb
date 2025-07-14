import React from "react";

const NotFoundIllustration = () => (
  <svg
    width="160"
    height="160"
    viewBox="0 0 160 160"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mb-8"
  >
    {/* Blueprint grid */}
    <rect
      x="12"
      y="12"
      width="136"
      height="136"
      rx="12"
      fill="#18181B"
      stroke="#3B82F6"
      strokeWidth="2"
    />
    <g stroke="#3B82F6" strokeWidth="0.5" opacity="0.4">
      <line x1="32" y1="12" x2="32" y2="148" />
      <line x1="52" y1="12" x2="52" y2="148" />
      <line x1="72" y1="12" x2="72" y2="148" />
      <line x1="92" y1="12" x2="92" y2="148" />
      <line x1="112" y1="12" x2="112" y2="148" />
      <line x1="132" y1="12" x2="132" y2="148" />
      <line x1="12" y1="32" x2="148" y2="32" />
      <line x1="12" y1="52" x2="148" y2="52" />
      <line x1="12" y1="72" x2="148" y2="72" />
      <line x1="12" y1="92" x2="148" y2="92" />
      <line x1="12" y1="112" x2="148" y2="112" />
      <line x1="12" y1="132" x2="148" y2="132" />
    </g>
    {/* Abstract iconic shapes: compass, triangle, circle */}
    <circle cx="56" cy="56" r="18" stroke="#fff" strokeWidth="2" fill="none" />
    <rect
      x="90"
      y="90"
      width="32"
      height="32"
      rx="6"
      stroke="#fff"
      strokeWidth="2"
      fill="none"
    />
    <polygon
      points="40,120 60,120 50,100"
      stroke="#fff"
      strokeWidth="2"
      fill="none"
    />
    {/* Compass */}
    <g stroke="#fff" strokeWidth="2">
      <line x1="120" y1="40" x2="130" y2="70" />
      <line x1="120" y1="40" x2="110" y2="70" />
      <circle cx="120" cy="40" r="4" fill="#3B82F6" />
    </g>
    {/* Ruler */}
    <rect
      x="30"
      y="110"
      width="40"
      height="6"
      rx="2"
      fill="#3B82F6"
      fillOpacity="0.5"
    />
    <g stroke="#fff" strokeWidth="1">
      <line x1="34" y1="112" x2="34" y2="116" />
      <line x1="38" y1="112" x2="38" y2="116" />
      <line x1="42" y1="112" x2="42" y2="116" />
      <line x1="46" y1="112" x2="46" y2="116" />
      <line x1="50" y1="112" x2="50" y2="116" />
      <line x1="54" y1="112" x2="54" y2="116" />
      <line x1="58" y1="112" x2="58" y2="116" />
      <line x1="62" y1="112" x2="62" y2="116" />
      <line x1="66" y1="112" x2="66" y2="116" />
    </g>
  </svg>
);

export default NotFoundIllustration;
