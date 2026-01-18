import FeaturedShows from "./FeaturedShows/page";
import Hero from "./Hero/page";
import RecentEpisode from "./RecentEpisode/page";
import WhyChooseUs from "./WhyChooseUs/page";

export default function Index() {
  return (
    <>
      <Hero />
      <FeaturedShows />
      <WhyChooseUs />
      <RecentEpisode />
    </>
  );
}
