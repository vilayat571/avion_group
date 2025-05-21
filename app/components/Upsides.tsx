import { Poppins } from "next/font/google";
import { upsides } from "../constants/upsides";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

const poppins = Poppins({
  weight: "100",
  subsets: ["latin"],
  style: "italic",
});

const Upsides = () => {
  return (
    <main className="flex py-20 flex-col">
      <h1
        className={` text-5xl ${poppins.className} text-center tracking-wide`}
      >
        Üstünlüklərimiz
      </h1>
      <section className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 gap-6 mt-8">
        <div className="col-span-1  bg-white flex flex-col items-center text-center rounded p-6">
          <p className=" w-20 h-20 p-4 items-center flex justify-center rounded-l-full rounded-br-full rounded-bt-xl bg-red-400">
            <FontAwesomeIcon
              icon={faLanguage}
              className=" text-white text-3xl"
            />
          </p>
          <span className="text-xl mt-4">7/24 texniki dəstək</span>

          <p className="mt-3">
            Həftə içi hər gün gün boyu <br /> müştərilərinizi dinləyirik.
          </p>
        </div>

        <div className="col-span-1  bg-white flex flex-col items-center text-center rounded p-6">
          <p className=" w-20 h-20 p-4 items-center flex justify-center rounded-l-full rounded-br-full rounded-bt-xl bg-red-400">
            <FontAwesomeIcon
              icon={faLanguage}
              className=" text-white text-3xl"
            />
          </p>
          <span className="text-xl mt-4">7/24 texniki dəstək</span>

          <p className="mt-3">
            Həftə içi hər gün gün boyu <br /> müştərilərinizi dinləyirik.
          </p>
        </div>
        <div className="col-span-1  bg-white flex flex-col items-center text-center rounded p-6">
          <p className=" w-20 h-20 p-4 items-center flex justify-center rounded-l-full rounded-br-full rounded-bt-xl bg-red-400">
            <FontAwesomeIcon
              icon={faLanguage}
              className=" text-white text-3xl"
            />
          </p>
          <span className="text-xl mt-4">7/24 texniki dəstək</span>

          <p className="mt-3">
            Həftə içi hər gün gün boyu <br /> müştərilərinizi dinləyirik.
          </p>
        </div>
        <div className="col-span-1  bg-white flex flex-col items-center text-center rounded p-6">
          <p className=" w-20 h-20 p-4 items-center flex justify-center rounded-l-full rounded-br-full rounded-bt-xl bg-red-400">
            <FontAwesomeIcon
              icon={faLanguage}
              className=" text-white text-3xl"
            />
          </p>
          <span className="text-xl mt-4">7/24 texniki dəstək</span>

          <p className="mt-3">
            Həftə içi hər gün gün boyu <br /> müştərilərinizi dinləyirik.
          </p>
        </div>
        <div className="col-span-1  bg-white flex flex-col items-center text-center rounded p-6">
          <p className=" w-20 h-20 p-4 items-center flex justify-center rounded-l-full rounded-br-full rounded-bt-xl bg-red-400">
            <FontAwesomeIcon
              icon={faLanguage}
              className=" text-white text-3xl"
            />
          </p>
          <span className="text-xl mt-4">7/24 texniki dəstək</span>

          <p className="mt-3">
            Həftə içi hər gün gün boyu <br /> müştərilərinizi dinləyirik.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Upsides;
