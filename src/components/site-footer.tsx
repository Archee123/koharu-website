import { navigation } from "@/lib/content";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="footer-band"><div className="site-footer container">
      <div><a href="#home" className="brand" aria-label="Koharu home"><Image src="/brand/koharu-logo.png" alt="Koharu" width={726} height={672} className="brand-logo" /></a><p>A little warmth in every cup.</p></div>
      <nav aria-label="Footer navigation">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
      <small>© {new Date().getFullYear()} Koharu</small>
    </div></footer>
  );
}
