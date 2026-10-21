export function CafeMap() {
  return (
    <figure className="cafe-map">
      <svg viewBox="0 0 600 440" preserveAspectRatio="xMidYMid slice" role="img" aria-labelledby="cafe-map-title cafe-map-description">
        <title id="cafe-map-title">Koharu neighbourhood illustration</title>
        <desc id="cafe-map-description">A fictional street map with a park, station and Koharu café marker. The real location will be announced.</desc>
        <rect width="600" height="440" fill="var(--tan)" />
        <g fill="var(--sand)">
          <path d="M0 0h135v105H0zM163 0h177v105H163zM368 0h232v105H368zM0 133h135v115H0zM163 133h177v115H163zM368 133h232v115H368zM0 276h135v164H0zM163 276h177v164H163zM368 276h232v164H368z" />
        </g>
        <path d="M450-20c-80 76 70 147-3 229s-30 149 50 251" fill="none" stroke="var(--tan)" strokeWidth="44" />
        <g fill="none" stroke="var(--cream)" strokeWidth="20">
          <path d="M149 0v440M354 0v440M0 119h600M0 262h600" />
          <path d="M-20 385 620 45" strokeWidth="26" />
        </g>
        <path d="M27 150h84v77H27z" fill="var(--olive)" opacity=".8" />
        <g fill="var(--cream)" opacity=".65">
          <circle cx="49" cy="173" r="9" /><circle cx="85" cy="173" r="9" />
          <circle cx="49" cy="203" r="9" /><circle cx="85" cy="203" r="9" />
        </g>
        <g fill="var(--brown)" fontFamily="Arial, sans-serif" fontSize="11" letterSpacing="2">
          <text x="195" y="91">STATION</text>
          <text x="67" y="245" textAnchor="middle">PARK</text>
        </g>
        <g transform="translate(236 104)" fill="var(--brown)">
          <rect width="30" height="30" rx="4" />
          <path d="M8 8h14v10H8zM10 23h1m8 0h1" fill="none" stroke="var(--cream)" strokeWidth="2" />
        </g>
        <circle cx="299" cy="248" r="34" fill="var(--cream)" opacity=".5" />
        <path d="M299 246s-23-25-23-40a23 23 0 0 1 46 0c0 15-23 40-23 40Z" fill="var(--terracotta)" />
        <circle cx="299" cy="206" r="8" fill="var(--cream)" />
        <rect x="241" y="265" width="116" height="40" fill="var(--cream)" />
        <text x="299" y="293" textAnchor="middle" fill="var(--brown)" fontFamily="Times New Roman, serif" fontStyle="italic" fontSize="29">Koharu</text>
      </svg>
      <figcaption>Illustrative map · location coming soon</figcaption>
    </figure>
  );
}
