import Link from "next/link";
import React from "react";

const NavLinks = () => {
    const navLinks = [
        {
          name: "Favorite Fruits",
          link: "favoriteFruits",
        },
        {
          name: "Fruit Shoop",
          link: "fruitShoop",
        },
        {
          name: "About Us",
          link: "aboutUs",
        },
      ];
  return (
      <div className="links flex items-center flex-wrap w-full justify-center">
        <ul className="flex gap-4">
          {navLinks.map((l) => (
            <li key={l.name}>
              <Link href={`/${l.link}`} className="lg:text-2xl text-sm ">
                {l.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

  );
};

export default NavLinks;
