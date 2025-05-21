import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "200",
  subsets: ["latin"],
  style: "italic",
});

const Follow = () => {
  return (
    <main className=" w-full flex items-center justify-center mb-20">
      <section className="w-5/6 bg-white rounded-[15px] grid  xl:grid-cols-2  sm:grid-cols-1  md:grid-cols-1  lg:grid-cols-2 ">
        <div className="flex flex-col items-start px-12 py-20">
          <h1 className={` ${poppins.className}  text-3xl mb-6`}>
            Son dəyişikliklər
            <br />
            üçün səhifəmizi izləyin.
          </h1>

          <form className="flex items-center">
            <input
              type="text"
              placeholder={"@aviangroupco.com"}
              className=" w-[400px] bg-[#f4f4f4] px-5 py-5 rounded-l text-lg  "
            />

            <a
              target="blank"
              href="https://www.instagram.com/aviangroupco/"
              className="bg-black text-white px-8 py-5 rounded-r text-lg"
            >
              izlə
            </a>
          </form>
        </div>

        <div className="flex justify-end ">
          <img
            src="/followCover.png"
            className="object-cover xl:w-auto lg:w-auto md:w-full sm:w-full"
            alt=" the image of follow instagram section of website"
          />
        </div>
      </section>
    </main>
  );
};

export default Follow;
