export default function SectionTag({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/60 ${className}`}>
      <span className="h-2 w-2 rounded-full bg-gold" />
      {children}
    </div>
  );
}
