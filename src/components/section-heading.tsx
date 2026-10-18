type SectionHeadingProps = {
  number: string;
  title: string;
  kanji: string;
};

export function SectionHeading({ number, title, kanji }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div><span className="eyebrow">{number} / Koharu</span><h2>{title}</h2></div>
      <span className="section-kanji" lang="ja">{kanji}</span>
    </div>
  );
}
