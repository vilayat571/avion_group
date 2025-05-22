import { Poppins } from "next/font/google";
import React from "react";


const poppins = Poppins({
    weight: "300",
    subsets: ["latin"],
    style: "italic",
  });

const Meeting = () => {
  return (
    <section className="my-20 w-full relative ">
      <img
        src="/meeting.avif"
        className=" w-full h-[760px] object-cover"
        alt=" the image of meeting room "
      />

      <div className="w-full bg-black h-[760px] opacity-60 absolute top-0 left-0 "></div>

      <div className="absolute top-0 w-full h-[760px] text-center justify-center items-center left-0 flex flex-col ">
        <div className="flex flex-col">
          <h1 className="text-[44px] text-white ">“bizimlə daha da inkişaf edin!”</h1>
          <p className={`text-center text-white text-lg italic tracking-wide  ${poppins.className}`}>
          Avion Group olaraq, biznesiniz üçün ən effektiv həllər təqdim edirik. 
          <br /> 
Konsultasiyaya gəlin və uyğun xidməti haqqında məlumat əldə edin!

          </p>
        </div>
      </div>
    </section>
  );
};

export default Meeting;
