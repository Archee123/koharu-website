import { navigation } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="footer-band"><div className="site-footer container">
      <div><a href="#home" className="brand" aria-label="Koharu home"><span className="brand-logo" aria-hidden="true" /></a><p>A little warmth in every cup.</p></div>
      <nav aria-label="Footer navigation">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
      <small>© {new Date().getFullYear()} Koharu</small>
    </div></footer>
  );
}
