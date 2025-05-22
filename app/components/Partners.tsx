import { Poppins } from "next/font/google";
import React from "react";

const poppins = Poppins({
  weight: "200",
  subsets: ["latin"],
  style: "italic",
});

const Partners = () => {
  const logos = [
    "/avant_logo.png",
    "/bolt.png",
    "/hyundai.webp",
    "/cop29.png",
    "/sabah.jpeg",
    "/peerstack.png",
  ];

  return (
    <section className="flex items-center justify-center my-20 w-full">
      <div className="flex flex-col xl:w-[86%] lg:w-[86%] md:w-11/12 sm:w-11/12">
        <h1
          className={`text-4xl font-extralight mb-5 italic ${poppins.className}`}
        >
          Bizə güvənən şirkətlər
        </h1>
        <p>
          Ölkəmizin nəhəng şirkətləri bizimlə çalışır. Bizim xidmətlərimizdən{" "}
          <br />
          yararlanmaq üçün{" "}
          <a href="" className=" text-bold underline">
            bizə yazın...
          </a>
        </p>

        <div className="grid grid-cols-6 mt-8 gap-6">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="col-span-1 p-6 rounded bg-white flex items-center justify-center"
            >
              <img
                className="max-h-32  object-contain"
                src={logo}
                alt={`logo-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
