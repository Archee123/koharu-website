import { Placeholder } from "@/components/placeholder";
import { SectionHeading } from "@/components/section-heading";

export function CafeMoments() {
  return <section className="section container" id="moments"><SectionHeading number="04" title="A moment at Koharu" kanji="憩" /><p className="section-intro">Come for a cup. Stay a little longer.</p><div className="moments-grid"><Placeholder label="The space" /><Placeholder label="The little details" /></div></section>;
}
