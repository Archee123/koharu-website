type SectionHeadingProps = {
  title: string;
  kanji: string;
};

export function SectionHeading({ title, kanji }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      <span className="section-kanji" lang="ja">{kanji}</span>
    </div>
  );
}
