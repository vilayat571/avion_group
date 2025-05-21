import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const HowWeWorks = () => {
  return (
    <section className="grid grid-cols-2 gap-12 xl:w-5/6 lg:w-5/6 md:w-11/12 sm:w-11/12 mb-20">
      <div className="flex flex-col col-span-1 py-4">
        <div className="mb-6">
          <h1 className="italic text-2xl font-semibold">
            “Biznesinizi növbəti səviyyəyə <br /> çatdırmaq üçün ünsiyyət edirik”
          </h1>
        </div>

        <p className="w-3/5 text-gray-700">
          Rəqəmlərin dili ilə şirkətinizi daha dərindən analiz edərək, mövcud
          maliyyə vəziyyətinizi aydın şəkildə görməyinizə kömək edirik. Dəqiq
          maliyyə uçotu və analitik hesabatlar vasitəsilə şirkətinizin güclü və
          zəif tərəflərini müəyyənləşdirir, inkişaf potensialınızı
          qiymətləndiririk.

          {/* Addım blokları */}
          <div className="flex flex-col gap-8 mt-12">
            {[
              "Ödənişsiz konsultasiya",
              "Rəsmi təsdiq və müqavilə",
              "Doğru planlama və başlama",
            ].map((text, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white font-semibold text-lg">
                    {index + 1}
                  </div>
                  {index < 2 && <div className="w-px h-4 bg-black " />}
                </div>
                <div className="pt-1 text-base italic">{text}</div>
              </div>
            ))}
          </div>
        </p>
      </div>

      <div className="col-span-1 flex justify-end items-center">
        <img
          src="/hwww.png"
          alt="How We Work Section illustration"
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default HowWeWorks;
