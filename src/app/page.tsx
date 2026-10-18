import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { HouseFavourites } from "@/components/sections/house-favourites";
import { OurStory } from "@/components/sections/our-story";
import { Menu } from "@/components/sections/menu";
import { CafeMoments } from "@/components/sections/cafe-moments";
import { VisitUs } from "@/components/sections/visit-us";

export default function Home() {
  return <div id="home"><a className="skip-link" href="#main">Skip to content</a><SiteHeader /><main id="main"><Hero /><HouseFavourites /><OurStory /><Menu /><CafeMoments /><VisitUs /></main><SiteFooter /></div>;
}
