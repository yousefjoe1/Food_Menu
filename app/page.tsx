import FavoriteFruits from "./_components/Cards/FavoriteFruits";

// icons
import { IoArrowForward } from "react-icons/io5";

import AboutUsSlider from "./_components/Sliders/AboutUsSlider";
import Hero from "./_components/Hero/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      {/* Favorite Fruits section */}
      <section className="favorite-fruits p-24">
        <h3 className="flex items-center justify-between text-white mb-4">
          <span>Favorite Fruits</span>
          {/* <span className="flex items-center gap-2">
            <span>More</span>
            <IoArrowForward />
          </span> */}
        </h3>

        <div className="my-6 bg-[#171719] text-[#171719] h-[2px] " />

        {/* Fruit cards */}
        <FavoriteFruits admin={false} />

        {/* about slider */}
      </section>
        <br />
        <AboutUsSlider />
        <br />
        <br />
        <br />
    </main>
  );
}
