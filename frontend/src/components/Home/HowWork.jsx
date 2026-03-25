import { FcAnswers, FcOnlineSupport, FcLike } from "react-icons/fc";
export default function HowWork() {
  return (
    <section
      className="px-3 py-10 text-center sm:px-5 md:px-12"
      style={{ backgroundColor: "#F8FAFC" }}
    >
      <h1 className="mb-3 text-4xl font-bold">How Lost Link Works</h1>
      <p className="text-sm text-gray-400 md:text-base">
        Reuniting with your belongings is as these three steps.
      </p>
      <div className="flex flex-col justify-between mt-10 md:flex-row">
        <div className="flex flex-col items-center px-10 mb-10">
          <span
            className="p-2 transition shadow-2xl rounded-xl hover:bg-blue-600"
            style={{ boxShadow: "0 10px 25px rgba(0,0,0,0.25)" }}
          >
            <FcAnswers size={40} />
          </span>
          <h4 className="mt-3 mb-2 text-sm font-medium md:text-xl">Report</h4>
          <p className="text-gray-400">
            Provide details, photos, and the approximate location of the item
            lost of found
          </p>
        </div>
        <div className="flex flex-col items-center px-10 mb-10">
          <span
            className="p-2 transition shadow-2xl rounded-xl hover:bg-blue-600"
            style={{ boxShadow: "0 10px 25px rgba(0,0,0,0.25)" }}
          >
            <FcOnlineSupport size={40} />
          </span>
          <h4 className="mt-3 mb-2 text-sm font-medium md:text-xl">
            Community Helps
          </h4>
          <p className="text-gray-400">
            Our automated matching system and local community members identify
            potential matches.
          </p>
        </div>
        <div className="flex flex-col items-center px-10">
          <span
            className="p-2 transition shadow-2xl rounded-xl hover:bg-blue-600"
            style={{ boxShadow: "0 10px 25px rgba(0,0,0,0.25)" }}
          >
            <FcLike size={40} />
          </span>

          <h4 className="mt-3 mb-2 text-sm font-medium md:text-xl">
            Safely Reconnect
          </h4>
          <p className="text-gray-400">
            Coordinate a safe meeting point through our secure messaging to
            return the item.
          </p>
        </div>
      </div>
    </section>
  );
}
