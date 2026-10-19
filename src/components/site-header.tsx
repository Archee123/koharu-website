import { navigation } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="header-band"><div className="site-header container">
      <a className="brand" href="#home" aria-label="Koharu home"><span className="brand-logo" aria-hidden="true" /></a>
      <nav aria-label="Main navigation">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
    </div></header>
  );
}
