import { navigation } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="site-header container">
      <a className="wordmark" href="#home" aria-label="Koharu home">koharu<span className="brand-dot" aria-hidden="true" /></a>
      <nav aria-label="Main navigation">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
    </header>
  );
}
