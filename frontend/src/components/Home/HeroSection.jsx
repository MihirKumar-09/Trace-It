import { Link } from "react-router-dom";
export default function HeroSection() {
  return (
    <div
      style={{ background: "linear-gradient(120deg, #ffffff, #E4EDFB)" }}
      className="flex flex-col items-center justify-between gap-4 px-3 py-10 sm:px-5 md:px-12 md:flex-row"
    >
      <div className="flex flex-col pr-10 ">
        <h1 className="mb-2 text-3xl font-bold text-black md:text-5xl">
          Lost Something?
        </h1>
        <h1 className="text-3xl font-bold text-transparent md:text-5xl bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text">
          Let the Community Help You
        </h1>
        <p className="mt-3 mb-3 text-gray-600" style={{ fontFamily: "revert" }}>
          Lost Link connects people who have lost precious belonging with honest
          finder in there neighborhood. Safe, secure, and community-driven.
        </p>
        <div className="flex flex-col gap-3 md:flex-row md:gap-6">
          <Link to="/lost-item">
            <button className="w-40 px-3 py-3 text-sm font-medium text-white transition bg-black rounded-md cursor-pointer hover:bg-blue-500">
              Report Lost Item
            </button>
          </Link>
          <Link to="/found-item">
            <button className="px-3 py-3 text-sm font-medium text-black transition bg-white border border-gray-300 rounded-md cursor-pointer w-42 hover:bg-blue-500 hover:text-white">
              I Found Something
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full mx-auto mt-5 overflow-hidden rounded-lg shadow-xl md:mt-0 sm:w-3/4 lg:w-1/3 floating">
        <img src="/images/Home/Hero.png" alt="Hero" className="w-full h-auto" />
      </div>
    </div>
  );
}
