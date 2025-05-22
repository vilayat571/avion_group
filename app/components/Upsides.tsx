import { Poppins } from "next/font/google";
import { upsides } from "../constants/upsides";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const poppins = Poppins({
  weight: "100",
  subsets: ["latin"],
  style: "italic",
});

const Upsides = () => {
  return (
    <main className="flex pb-40 mt-12 flex-col  items-center justify-center">
      <h1 className={`text-5xl ${poppins.className} text-center tracking-wide`}>
        Üstünlüklərimiz
      </h1>
      <section className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 gap-6 mt-8 w-[86%] ">
        {upsides.map((item, index) => (
          <div
            key={index}
            className="col-span-1 bg-white flex flex-col items-center text-center rounded p-6"
          >
            <div className={`w-20 h-20 p-4 flex items-center justify-center rounded-l-full rounded-br-full ${item.color}`}>
              <FontAwesomeIcon icon={item.icon} className="text-white text-3xl" />
            </div>
            <span className="text-xl mt-4">{item.title}</span>
            <p className="mt-3 text-sm">{item.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Upsides;
