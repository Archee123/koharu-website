import { navigation } from "@/lib/content";
import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="header-band"><div className="site-header container">
      <a className="brand" href="#home" aria-label="Koharu home"><Image src="/brand/koharu-logo.png" alt="Koharu" width={726} height={672} priority className="brand-logo" /></a>
      <nav aria-label="Main navigation">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
    </div></header>
  );
}
