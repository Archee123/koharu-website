import { Placeholder } from "@/components/placeholder";
import { SectionHeading } from "@/components/section-heading";
import { favourites } from "@/lib/content";

export function HouseFavourites() {
  return <section className="section section-favourites" id="favourites"><div className="container"><SectionHeading title="House favourites" kanji="厳選" /><div className="favourites-grid">{favourites.map((item) => <article key={item.name}><Placeholder label={item.name} /><h3>{item.name}</h3><p>{item.description}</p></article>)}</div></div></section>;
}
