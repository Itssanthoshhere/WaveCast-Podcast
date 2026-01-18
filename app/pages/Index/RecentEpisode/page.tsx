import Image from "next/image";
import bannerImg from "@/public/episode-card-banner.png";
import Link from "next/link";

export default function RecentEpisode() {
  return (
    <>
      <div className="dark-section">
        <div className="px-[8%] lg:px-[16%] py-30 pb-0 md:pb-10">
          <div className="flex flex-col md:flex-row justify-between items-center ">
            <div className="w-full lg:w-1/1">
              <div className="title flex flex-col gap-2">
                <div>
                  <h2 className="inline-block px-4 py-2 rounded-full text-(--primary) text-2xl font-normal border border-(--primary)">
                    <i className="bi bi-rocket-takeoff pe-4"></i>Recent Episode
                  </h2>
                </div>
                <h1 className="text-6xl lg:text-7xl font-semibold mt-4">
                  Explore Our Latest Talks
                </h1>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <p>
                Dive into the most recent episodes that just hit the airwaves.
                Discover what's trending in our podcast world.
              </p>
              <button className="btn btn2 mt-4" style={{ fontWeight: 500 }}>
                View All Episodes <i className="bi bi-arrow-right-short"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 px-[8%] lg:px-[16%] pb-30">
          <div className="episodeBanner bg-[#FFCA79] px-5 rounded-2xl pb-5 lg:pb-0">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-0 lg:gap-5">
              <div className="w-full lg:w-1/2">
                <Image
                  src={bannerImg}
                  alt="bannerImg"
                  className="w-full h-full"
                />
              </div>

              <div className="w-full lg:w-1/2">
                <div className="flex flex-wrap items-center gap-5 py-5">
                  <Link href="/app/pages">
                    <h2 className="text-(--text) hover:text-black">
                      <i className="bi bi-mic"></i> Devon Lane
                    </h2>
                  </Link>

                  <h2 className="text-(--text)">
                    <i className="bi bi-clock pe-1"></i> 4hr 12min
                  </h2>

                  <div className="flex items-center gap-3">
                    <i className="bi bi-balloon-heart me-3 text-(--text) text-xl"></i>
                    <div className="music-waves"></div>
                  </div>
                </div>
                <h2 className="text-(--text) text-4xl font-semibold">
                  Innovation Insights: Diving Deep into Future Tech Trends
                </h2>
                <p className="text-(--text) my-4 tracking-wide">
                  Ever wondered what happens behind the scenes? Join us for a
                  candid conversation about podcasting and more
                </p>
                <div className="flex flex-wrap justify-between items-center gap-5">
                  <Link
                    href="/app/pages"
                    className="flex items-center gap-2 group"
                  >
                    <i className="bi bi-play p-4 bg-black rounded-full flex items-center justify-center text-(--primary) text-2xl group-hover:bg-(--second) group-hover:text-white cursor-pointer transition-all duration-200"></i>
                    <h2 className="text-xl underline text-black group-hover:text-(--second) transition-all duration-200">
                      Listen Now
                    </h2>
                  </Link>
                  <span className="bg-black text-(--primary) px-5 py-3 rounded-full text-xl">
                    Episode 04
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-5 mt-10">
            <div className="w-full lg:w-1/2">
              <div className="p-6 rounded-2xl bg-(--gray-light)">
                <div className="flex flex-wrap  items-center gap-5">
                  <Link href="/app/pages">
                    <h2 className="text-gray-300">
                      <i className="bi bi-mic"></i> Devon Lane
                    </h2>
                  </Link>
                  <h2 className="text-gray-300">
                    <i className="bi bi-clock pe-1 "></i> 4hr 12min
                  </h2>
                  <div className="flex items-center gap-3">
                    <i className="bi bi-balloon-heart me-3 text-gray-300 text-xl"></i>
                    <div className="music-waves2"></div>
                  </div>
                </div>
                <h2 className="text-gray-300 text-3xl md:text-4xl font-semibold">
                  Laughter Unleashed: Join Us for Joyful Conversations Today
                </h2>
                <p className="ttext-gray-300 my-4 tracking-wide">
                  Embark on a journey of unexplored wisdom as we delve into
                  fascinating topics that challenge the mind
                </p>
                <div className="flex flex-wrap justify-between items-center gap-5">
                  <Link
                    href="/app/pages"
                    className="flex items-center gap-2 group"
                  >
                    <i className="bi bi-play p-4 bg-(--primary) rounded-full flex items-center justify-center text-black text-2xl group-hover:bg-(--second) group-hover:text-white cursor-pointer transition-all duration-200"></i>
                    <h2 className="text-xl underline text-gray-300 group-hover:text-(--second) transition-all duration-200">
                      Listen Now
                    </h2>
                  </Link>
                  <span className="bg-(--gray-color) text-(--primary) px-5 py-3 rounded-full text-xl">
                    Episode 04
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="p-6 rounded-2xl bg-(--gray-light)">
                <div className="flex flex-wrap items-center gap-5">
                  <Link href="/app/pages">
                    <h2 className="text-gray-300">
                      <i className="bi bi-mic"></i> Devon Lane
                    </h2>
                  </Link>
                  <h2 className="text-gray-300">
                    <i className="bi bi-clock pe-1 "></i> 4hr 12min
                  </h2>
                  <div className="flex items-center gap-3">
                    <i className="bi bi-balloon-heart me-3 text-gray-300 text-xl"></i>
                    <div className="music-waves2"></div>
                  </div>
                </div>
                <h2 className="text-gray-300 text-3xl md:text-4xl font-semibold">
                  Behind the Scenes: Candid Talks on Podcasting Strategies
                </h2>
                <p className="ttext-gray-300 my-4 tracking-wide">
                  Unlock the secrets of inspiration with heartfelt stories and
                  motivational insights in this uplifting episode
                </p>
                <div className="flex flex-wrap justify-between items-center gap-5">
                  <Link
                    href="/app/pages"
                    className="flex items-center gap-2 group"
                  >
                    <i className="bi bi-play p-4 bg-(--primary) rounded-full flex items-center justify-center text-black text-2xl group-hover:bg-(--second) group-hover:text-white cursor-pointer transition-all duration-200"></i>
                    <h2 className="text-xl underline text-gray-300 group-hover:text-(--second) transition-all duration-200">
                      Listen Now
                    </h2>
                  </Link>
                  <span className="bg-(--gray-color) text-(--primary) px-5 py-3 rounded-full text-xl">
                    Episode 04
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
