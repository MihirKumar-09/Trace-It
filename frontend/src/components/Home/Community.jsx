import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

export default function Community() {
  const { user } = useAuth();
  return (
    <section className="flex items-center justify-center px-3 py-10 text-center bg-white sm:px-5 md:px-12">
      <div
        style={{
          background:
            "linear-gradient(135deg, #00b4ff 0%, #0095ff 25%, #006aff 60%, #0047cc 100%)",
        }}
        className="w-full px-10 md:w-3xl py-7 rounded-4xl"
      >
        <h1 className="mt-5 text-4xl font-semibold text-white">
          Join the Community Helping Return Lost Item
        </h1>

        <p className="mt-3 mb-4 text-gray-300">
          Every second someone finds something. Make sure you're connected to
          the network that brings it home
        </p>

        {user ? (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-6 py-3 mt-5 font-semibold bg-white border cursor-pointer border-white/15 rounded-2xl"
          >
            Get Started Now
          </button>
        ) : (
          <Link to="/signIn">
            <button className="px-6 py-3 mt-5 font-semibold bg-white border cursor-pointer border-white/15 rounded-2xl">
              Get Started Now
            </button>
          </Link>
        )}
      </div>
    </section>
  );
}
