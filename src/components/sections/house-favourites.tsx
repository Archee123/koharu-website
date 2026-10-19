import { SectionPhoto } from "@/components/section-photo";
import { Placeholder } from "@/components/placeholder";
import { SectionHeading } from "@/components/section-heading";
import { favourites } from "@/lib/content";

export function HouseFavourites() {
  return <section className="section section-favourites" id="favourites"><div className="container"><SectionHeading title="House favourites" kanji="厳選" /><div className="favourites-grid">{favourites.map((item) => <article key={item.name}>{item.name === "Matcha latte" ? <SectionPhoto src="https://images.pexels.com/photos/37745284/pexels-photo-37745284.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="An iced matcha latte with green tea and creamy milk layers" /> : item.name === "Something sweet" ? <SectionPhoto src="https://images.pexels.com/photos/5946977/pexels-photo-5946977.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="A slice of cheesecake beside an iced matcha latte" /> : <Placeholder label={item.name} />}<h3>{item.name}</h3><p>{item.description}</p></article>)}</div></div></section>;
}
