"use client";

import Image from "next/image";
import Link from "next/link";

export default function BrandLogo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 md:gap-3 group"
    >

      
      {/* 🔥 MOBILE (ICON + TEXT) */}
      <div className="flex items-center gap-2 sm:hidden">
        <Image
          src="/logo-icon.png"
          alt="Build With Pradeep"
          width={32}
          height={32}
          className="w-7 h-7 object-contain"
          priority
        />

        <span className="font-semibold text-sm leading-none">
          <span className="text-white">Build</span><span className="ml-1 text-white">With</span>
          <span className="ml-1 text-transparent bg-clip-text bg-primaryGradient">
            Pradeep
          </span>
        </span>
      </div>

      {/* 🔥 FULL LOGO (TABLET + DESKTOP) */}
      <Image
        src="/logo-full.png"
        alt="Build With Pradeep"
        width={200}
        height={60}
        priority
        className="
          hidden sm:block
          h-8 md:h-9 lg:h-10
          w-auto
          object-contain
          transition
          group-hover:scale-[1.03]
        "
      />

    </Link>
  );
}