import { Poppins } from "next/font/google";
import ResultsOf from "./components/ResultsOf";
import Differences from "./components/Upsides";
import Follow from "./components/Follow";
import Upsides from "./components/Upsides";
import Consultation from "./components/Consultation";
import HowWeWorks from "./components/HowWeWorks";

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"],
  style: "italic",
});

function MainPage() {
  return (
    <div className="flex items-center flex-col justify-center w-full px-3">

      <div className="flex relative items-center justify-center">
        <img src="/cover.png" alt="Main page cover" />
        <div className="absolute top-1/2 text-center left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold">
          <p className={`text-6xl  ${poppins.className}`}> Avian Group Co.</p>
          <p className="text-lg font-light mt-3">
            Biz keyfiyyətli texnalogiyalar ilə sizin səsiniz <br /> oluruq və
            müştərilərinizi razı salırıq.
          </p>
        </div>
      </div>

      <ResultsOf />
      <Upsides />
      <HowWeWorks />
      <Consultation />
      <Follow />
    </div>
  );
}

export default MainPage;
