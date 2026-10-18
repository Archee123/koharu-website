import { Placeholder } from "@/components/placeholder";
import { SectionHeading } from "@/components/section-heading";

export function OurStory() {
  return <section className="section container" id="story"><SectionHeading number="02" title="Our story" kanji="物語" /><div className="split-layout"><Placeholder label="The story behind Koharu" /><div className="prose"><h3>Small pleasures.<br />Thoughtfully made.</h3><p>Koharu is a place to pause. Inspired by the warmth of Japanese café culture, we make room for good drinks, simple food, and the pleasure of taking your time.</p><p className="editorial-note">Our full story is coming soon.</p></div></div></section>;
}
