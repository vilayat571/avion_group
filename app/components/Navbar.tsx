import Link from "next/link";
import React from "react";
import { menuItems } from "../constants/navLinks";

const Navbar = () => {
  return (
    <main className="py-8 w-full flex justify-center items-center">
      <div className="flex items-center w-[86%] justify-between">
        <div>logo</div>

        <div className="flex items-center justify-center relative left-28 gap-5">
          {menuItems.map((item) => {
            return (
              <Link key={item.id} className="text-lg" href={""}>
                {item.path}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-5">
          <button className="bg-[#222] rounded-lg text-white px-6 py-4">
            konsultasiya
          </button>
          <button className="bg-[#fff] rounded-lg text-black px-6 py-4">
            zəng edin
          </button>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
