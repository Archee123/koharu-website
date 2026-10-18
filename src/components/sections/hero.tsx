import { Placeholder } from "@/components/placeholder";

export function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-copy"><p className="eyebrow">Japanese café · Tea, coffee & little pleasures</p>
        <h1 id="hero-title">A little warmth.<br />A slower moment.</h1>
        <p>A cup made with care. Something lovely to eat. A quiet corner to call your own.</p>
        <div className="actions"><a className="button" href="#menu">Explore the menu <span aria-hidden="true">↗</span></a><a className="text-link" href="#visit">Find us <span aria-hidden="true">↗</span></a></div>
      </div>
      <Placeholder label="A first glimpse of Koharu" className="hero-placeholder" />
    </section>
  );
}
