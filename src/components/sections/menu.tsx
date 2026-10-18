import { SectionHeading } from "@/components/section-heading";
import { menu } from "@/lib/content";

export function Menu() {
  return <section className="menu-band" id="menu"><div className="section container"><SectionHeading title="The menu" kanji="献立" /><p className="section-intro">For your morning ritual or an unhurried afternoon.</p><div className="menu-grid">{menu.map((group) => <div key={group.category}><h3>{group.category}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div><p className="editorial-note">A taste of what’s to come. Menu and prices to be confirmed.</p></div></section>;
}
