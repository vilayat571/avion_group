"use client";

import { ChangeEvent, useState } from "react";

const Consultation = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    phoneNumbers: "",
    service: "",
    description: "",
  });

  const inputChangeDelegation = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <main className="w-full flex items-center justify-center">
      <div className="flex flex-col xl:w-5/6 lg:w-5/6 md:w-11/12 sm:w-11/12 ">
        <p className="mb-4 text-5xl font-semibold w-full text-left">
          Konsultasiya
        </p>
        <section className="grid gap-y-12 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mb-12">
          <div className="col-span-1">
            <form className="flex flex-col gap-3 w-11/12 ">
              <input
                type="text"
                id="fullname"
                className="w-full placeholder:text-black text-lg rounded h-15 bg-white indent-5 outline-0"
                value={formData.fullname}
                placeholder="Ad & soyad"
                onChange={(e) => inputChangeDelegation(e)}
              />
              <input
                type="text"
                id="phoneNumbers"
                className="w-full placeholder:text-black text-lg rounded h-15 bg-white indent-5 outline-0"
                value={formData.phoneNumbers}
                placeholder="Əlaqə nömrəsi"
                onChange={(e) => inputChangeDelegation(e)}
              />

              {/* services */}
              <input
                type="text"
                id="phoneNumbers"
                className="w-full placeholder:text-black text-lg rounded h-15 bg-white indent-5 outline-0"
                value={formData.phoneNumbers}
                placeholder="Əlaqə nömrəsi"
                onChange={(e) => inputChangeDelegation(e)}
              />

              <textarea
                typeof="text"
                placeholder="Ətraflı məlumat yazın"
                value={formData.description}
                onChange={(e) => inputChangeDelegation(e)}
                className="w-full placeholder:text-black text-lg py-8 px-8 rounded h-60 bg-white outline-0"
                id="description"
              ></textarea>
            </form>
          </div>

          <div className="col-span-1 flex flex-col pt-5">
            <h1 className="text-lg">Proses necə gedir?</h1>
            <h2 className="text-3xl my-4">
              Ödənişsiz <br /> Konsultasiya
            </h2>
            <p className="w-3/4 tracking-wider leading-[24px] ">
              Formu doldurduqdan sonra “Göndər” düyməsinə klik edirsiniz. Sonra
              məlumatlar bizim bazamıza düşür. Növbətu bir həftə ərzində
              əməkdaşlarımızı sizinlə əlaqə saxlayaraq uyğun tarix və vaxt qeyd
              edilir.
              <br />
              <br />
              Konsultasiya da siz, sizi maraqlandıran xidmət haqqında və ya
              şirkətiniz haqqında mümkün suallarınızı bizə yönləndirirsiniz.
              Bizdə öz növbəmizdə sizə lazımı dəstək göstərməyə çalışırıq.
            </p>

            <button className="bg-black py-3 mt-5 w-32 px-5 rounded text-white">
              Göndər
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Consultation;
