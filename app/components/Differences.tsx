import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "100",
  subsets: ["latin"],
  style: "italic",
});

const Differences = () => {
  return (
    <main className="flex py-20 pb-40 flex-col">
      <h1 className={` text-5xl ${poppins.className} tracking-wide`}>Üstünlüklərimiz</h1>
      <section>





      </section>
    </main>
  );
};

export default Differences;
