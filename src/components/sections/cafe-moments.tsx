import { SectionPhoto } from "@/components/section-photo";
import { SectionHeading } from "@/components/section-heading";

export function CafeMoments() {
  return <section className="section section-moments" id="moments"><div className="container"><SectionHeading title="A moment at Koharu" kanji="憩" /><p className="section-intro">Come for a cup. Stay a little longer.</p><div className="moments-grid"><SectionPhoto src="https://images.pexels.com/photos/15970416/pexels-photo-15970416.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="Sunlight falling across wooden tables and chairs in an Osaka café" /><SectionPhoto src="https://images.pexels.com/photos/37745278/pexels-photo-37745278.jpeg?auto=compress&cs=tinysrgb&w=1400" alt="Creamy milk foam being poured onto a matcha latte" /></div></div></section>;
}
