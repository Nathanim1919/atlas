import React from "react";

export interface PartnerLogoProps {
  name: string;
  className?: string;
}

export function OracleLogo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="Oracle Logo">
      <path d="M14.6 24.3c-6.8 0-11.8-5-11.8-11.8s5-11.8 11.8-11.8 11.8 5 11.8 11.8-5 11.8-11.8 11.8zm0-4.3c4.2 0 7.4-3.3 7.4-7.5s-3.2-7.5-7.4-7.5-7.4 3.3-7.4 7.5 3.2 7.5 7.4 7.5zm20.8 4.3H31V1.1h9.4c4.8 0 8.1 2.9 8.1 7.2 0 3.3-2 5.7-4.8 6.7l5.6 9.3h-5.2l-5.1-8.7h-3.6v8.7zm0-12.7h4.8c2.4 0 4-1.3 4-3.3 0-1.9-1.6-3.2-4-3.2h-4.8v6.5zm31.7 12.7l-1.9-4.8H55.4l-1.9 4.8h-4.7L58 1.1h4.6l9.3 23.2h-4.8zm-6.3-8.8l-3.3-8.5-3.3 8.5h6.6zm22.4 9.1c-6.6 0-11.5-5-11.5-11.8 0-6.8 5-11.8 11.7-11.8 4.8 0 8.7 2.4 10.3 6.6l-4.1 1.9c-1-2.5-3.4-4.2-6.3-4.2-4.2 0-7.3 3.3-7.3 7.5s3.1 7.5 7.3 7.5c2.9 0 5.4-1.7 6.4-4.2l4.1 1.9c-1.7 4.3-5.6 6.6-10.6 6.6zm19.8-.3H99V1.1h4.4v19h10.9v4.2zm20.4-8.8v4.6h-9.9v4.2h14.8v4.2H113V1.1h18.2v4.2h-13.8v4.2h9.9v4.2z" fill="#C74634"/>
    </svg>
  );
}

export function IBMLogo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="IBM Logo">
      <g fill="#052FAD">
        {/* Striped IBM classic emblem */}
        <path d="M0 0h12v4H0zm0 6h12v4H0zm0 6h12v4H0zm0 6h12v4H0zm0 6h12v4H0zm0 6h12v4H0zm0 6h12v4H0zm0 6h12v4H0z"/>
        <path d="M18 0h34v4H18zm0 6h34v4H18zm8 6h18v4H26zm0 6h18v4H26zm0 6h22v4H26zm0 6h22v4H26zm-8 6h34v4H18zm0 6h34v4H18z"/>
        <path d="M58 0h10l8 12 8-12h10v4h-6l-7 11v1h1v4h12v4H82v-4h2l-3-5-3 5h2v4H70v-4h12l-7-11h-6v-4h10zM58 36h12v4H58zm24 0h12v4H82z"/>
      </g>
    </svg>
  );
}

export function LenovoLogo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 32" xmlns="http://www.w3.org/2000/svg" aria-label="Lenovo Logo">
      <rect width="120" height="32" rx="4" fill="#E2231A"/>
      <text x="60" y="22" fill="#ffffff" fontFamily="sans-serif" fontWeight="900" fontSize="17" letterSpacing="-0.5" textAnchor="middle">
        Lenovo
      </text>
    </svg>
  );
}

export function NutanixLogo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 130 32" xmlns="http://www.w3.org/2000/svg" aria-label="Nutanix Logo">
      <g fill="#024DA1">
        {/* Nutanix stylized mark */}
        <path d="M8 4h6l12 18V4h6v24h-6L14 10v18H8V4zm34 0h6v15c0 3.3 2.2 5 5.5 5s5.5-1.7 5.5-5V4h6v15c0 6.6-4.5 10-11.5 10s-11.5-3.4-11.5-10V4zm30 5h-7V4h20v5h-7v19h-6V9zm18-5h6l10 24h-6.5l-2-5.2h-9l-2 5.2h-6.5L90 4zm4.5 14.5h6l-3-8-3 8zM110 4h6v24h-6V4zm12 0h6.5l8 11.5L144.5 4H151l-11 15.5L151 35h-6.5l-8.5-12.5L127.5 35H121l11-15.5L121 4h1z" />
      </g>
    </svg>
  );
}

export function RedHatLogo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 130 32" xmlns="http://www.w3.org/2000/svg" aria-label="Red Hat Logo">
      <g transform="translate(4, 3)">
        {/* Fedora / Red Hat icon */}
        <path d="M18.8 6.6c-.6-1.5-2-2.6-3.8-2.6-1.5 0-2.8.8-3.4 2-.8-.2-1.7-.1-2.4.3-.8.4-1.3 1.1-1.5 2-.4.1-.8.4-1.1.7-.5.6-.7 1.4-.5 2.2.3 1.3 1.5 2.2 2.8 2.2h16c1.7 0 3-1.3 3-3 0-1.8-1.5-3.3-3.3-3.4-.6-.2-1.2-.4-1.8-.4-.7 0-1.4.1-2 .4-.4-.3-.9-.4-1.5-.4z" fill="#EE0000"/>
        <path d="M6 13.4c-1.3 0-2.5-.9-2.8-2.2-.2-.8 0-1.6.5-2.2.3-.3.7-.6 1.1-.7.2-.9.7-1.6 1.5-2 .7-.4 1.6-.5 2.4-.3.6-1.2 1.9-2 3.4-2 1.8 0 3.2 1.1 3.8 2.6.6-.3 1.3-.4 2-.4.6 0 1.2.2 1.8.4 1.8.1 3.3 1.6 3.3 3.4 0 1.7-1.3 3-3 3H6z" fill="#EE0000"/>
        <ellipse cx="14" cy="14" rx="14" ry="2.5" fill="#111111"/>
        <path d="M12 11c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z" fill="#ffffff"/>
      </g>
      <text x="44" y="21" fill="#111111" fontFamily="sans-serif" fontWeight="800" fontSize="15" letterSpacing="-0.3">
        Red Hat
      </text>
    </svg>
  );
}

export function SuseLogo({ className = "h-7 w-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 110 32" xmlns="http://www.w3.org/2000/svg" aria-label="SUSE Logo">
      {/* SUSE modern clean brand mark */}
      <circle cx="16" cy="16" r="12" fill="#0C322C"/>
      <path d="M13 11c0-1.5 1.5-2.5 3-2.5s3 1 3 2.5v10c0 1.5-1.5 2.5-3 2.5s-3-1-3-2.5V11z" fill="#30BA78"/>
      <circle cx="16" cy="16" r="2.5" fill="#ffffff"/>
      <text x="36" y="22" fill="#0C322C" fontFamily="sans-serif" fontWeight="900" fontSize="18" letterSpacing="1">
        SUSE
      </text>
    </svg>
  );
}

export function getPartnerLogo(name: string, className = "h-7 w-auto") {
  switch (name.toLowerCase()) {
    case "oracle":
      return <OracleLogo className={className} />;
    case "ibm":
      return <IBMLogo className={className} />;
    case "lenovo":
      return <LenovoLogo className={className} />;
    case "nutanix":
      return <NutanixLogo className={className} />;
    case "redhat":
    case "red hat":
      return <RedHatLogo className={className} />;
    case "suse":
      return <SuseLogo className={className} />;
    default:
      return null;
  }
}
