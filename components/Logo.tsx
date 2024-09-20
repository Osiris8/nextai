import React from "react";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

function Logo({ width = 200, height = 200, className = "" }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={width}
      height={height}
      className={className}
    >
      <rect
        x="40"
        y="40"
        width="120"
        height="120"
        rx="20"
        ry="20"
        fill="white"
      />
      <path
        d="M70 90 L90 110 L130 70"
        stroke="#2e1065"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <rect
        x="60"
        y="130"
        width="80"
        height="12"
        rx="6"
        ry="6"
        fill="#2e1065"
      />
    </svg>
  );
}

export default Logo;
