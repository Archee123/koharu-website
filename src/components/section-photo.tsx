import Image from "next/image";

export function SectionPhoto({ src, alt }: { src: string; alt: string }) {
  return <div className="section-photo"><Image src={src} alt={alt} fill unoptimized sizes="(max-width: 760px) 100vw, 50vw" /></div>;
}
