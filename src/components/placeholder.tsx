export function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return <div className={`placeholder ${className}`} role="img" aria-label={`${label} — image to be added`}><span>{label}</span></div>;
}
