import Image from "next/image";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Image className="hero-image" src="/images/koharu-cafe-hero.webp" alt="A warm café counter with pastries, plants, and coffee being prepared" fill priority sizes="100vw" />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-copy container">
        <h1 id="hero-title">A little warmth.<br />A slower moment.</h1>
        <p>A cup made with care. Something lovely to eat. A quiet corner to call your own.</p>
        <div className="actions"><a className="button" href="#menu">Explore the menu <span aria-hidden="true">↗</span></a><a className="text-link" href="#visit">Find us <span aria-hidden="true">↗</span></a></div>
      </div>
    </section>
  );
}
