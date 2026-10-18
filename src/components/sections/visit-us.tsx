import { Placeholder } from "@/components/placeholder";
import { SectionHeading } from "@/components/section-heading";

export function VisitUs() {
  return <section className="section section-visit" id="visit"><div className="container"><SectionHeading title="Visit us" kanji="所在" /><div className="split-layout visit-layout"><div><h3>We’ll save you a moment.</h3><dl className="visit-details"><div><dt>Find us</dt><dd>Address to be announced</dd></div><div><dt>Opening hours</dt><dd>Days and times coming soon</dd></div><div><dt>Say hello</dt><dd>Contact details coming soon</dd></div></dl><p className="editorial-note">Directions and walk-in information will live here.</p></div><Placeholder label="Map & directions" /></div></div></section>;
}
