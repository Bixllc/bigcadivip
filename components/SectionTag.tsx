export default function SectionTag({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-text-secondary ${className}`}>
      <span className="h-2 w-2 rounded-full bg-gold" />
      {children}
    </div>
  );
}
