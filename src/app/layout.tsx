import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Koharu — Japanese Café",
  description: "A little warmth in every cup. Discover Koharu, a Japanese café for slow moments and simple pleasures.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
