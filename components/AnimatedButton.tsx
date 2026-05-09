"use client";
import { ArrowUpRight } from "lucide-react";

export default function AnimatedButton({
  children,
  variant = "primary",
  className = "",
  onClick,
}: {
  children: string;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
}) {
  const base =
    variant === "primary"
      ? "bg-gold text-white hover:bg-gold-dark"
      : "border border-white/20 text-white hover:bg-white/10";

  return (
    <button
      onClick={onClick}
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
    </button>
  );
}
