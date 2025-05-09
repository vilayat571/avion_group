import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: "200",
    subsets: ["latin"],
    style: "italic",
  });


const Follow = () => {
  return (
    <main className=" w-full flex items-center justify-center mb-20">
      <section className="w-5/6 bg-white rounded-lg grid px-10 py-12 grid-cols-2 ">
        <div className="flex flex-col items-start">
          <h1 className={` ${poppins.className}  text-3xl mb-6`}>
            Son dəyişikliklər
            <br />
            üçün səhifəmizi izləyin.
          </h1>

        <form className="flex items-center">

        <input type="text" value={'@aviangroupco.com'} className=" w-[400px] bg-[#f4f4f4] px-5 py-5 rounded-l text-lg  " />

        <button className="bg-black text-white px-8 py-5 rounded-r" >izlə</button>

        </form>
        </div>
      </section>
    </main>
  );
};

export default Follow;
