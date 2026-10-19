import Image from "next/image";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Image className="hero-image" src="https://images.pexels.com/photos/17323622/pexels-photo-17323622.jpeg?auto=compress&cs=tinysrgb&w=2400" alt="Matcha tea and Japanese desserts on a wooden tray in warm sunlight" fill unoptimized priority sizes="100vw" />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-copy container">
        <h1 id="hero-title">A little warmth.<br />A slower moment.</h1>
        <p>A cup made with care. Something lovely to eat. A quiet corner to call your own.</p>
        <div className="actions"><a className="button" href="#menu">Explore the menu</a><a className="text-link" href="#visit">Find us</a></div>
      </div>
    </section>
  );
}
