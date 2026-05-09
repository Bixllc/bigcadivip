"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AnimatedLink({
  children,
  href,
  variant = "primary",
  className = "",
}: {
  children: string;
  href: string;
  variant?: "primary" | "outline" | "dark";
  className?: string;
}) {
  const base =
    variant === "primary"
      ? "bg-gold text-white hover:bg-gold-dark"
      : variant === "dark"
      ? "text-dark-soft hover:text-gold"
      : "border border-white/20 text-white hover:bg-white/10";

  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300 ${base} ${className}`}
    >
      <span className="relative overflow-hidden h-5">
        <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-5">
          <span className="h-5 leading-5">{children}</span>
          <span className="h-5 leading-5">{children}</span>
        </span>
      </span>
      <span className="relative overflow-hidden w-4 h-4">
        <span className="flex flex-col transition-transform duration-300 group-hover:-translate-y-4">
          <ArrowUpRight size={16} />
          <ArrowUpRight size={16} />
        </span>
      </span>
    </Link>
  );
}
