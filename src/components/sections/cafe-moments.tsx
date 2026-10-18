import { Placeholder } from "@/components/placeholder";
import { SectionHeading } from "@/components/section-heading";

export function CafeMoments() {
  return <section className="section section-moments" id="moments"><div className="container"><SectionHeading title="A moment at Koharu" kanji="憩" /><p className="section-intro">Come for a cup. Stay a little longer.</p><div className="moments-grid"><Placeholder label="The space" /><Placeholder label="The little details" /></div></div></section>;
}
