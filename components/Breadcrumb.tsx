"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";

export default function Breadcrumb() {
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <div className="text-sm text-white/50 mb-6 flex items-center flex-wrap gap-1">

      {/* HOME */}
      <Link
        href="/"
        className="flex items-center gap-1.5 hover:text-white transition duration-200"
      >
        <Home size={16} className="stroke-[1.5] opacity-80" />
        <span>Home</span>
      </Link>

      {pathSegments.map((segment, index) => {
        const href = "/" + pathSegments.slice(0, index + 1).join("/");

        // Format text (contact-us → Contact Us)
        const label = segment
          .replace(/-/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase());

        const isLast = index === pathSegments.length - 1;

        return (
          <span key={href} className="flex items-center gap-1">
            <span className="mx-1 text-white/30">›</span>

            {isLast ? (
              <span className="text-white">{label}</span>
            ) : (
              <Link href={href} className="hover:text-white transition">
                {label}
              </Link>
            )}
          </span>
        );
      })}
    </div>
  );
}