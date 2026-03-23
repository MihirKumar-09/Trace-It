export default function LeftSection() {
  return (
    <section className="hidden md:block md:w-1/2">
      <div className="h-full min-h-screen bg-linear-to-b from-[#012662] to-[#0D172E] px-8 lg:px-16 py-12 flex flex-col justify-between">
        {/* Top Content */}
        <div>
          <h1 className="text-white text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight">
            Welcome Back to <br /> Lost Link
          </h1>

          <p className="text-white/80 mt-6 text-sm sm:text-base leading-relaxed">
            Log in to track your lost items or help others recover <br />{" "}
            theirs. Join our global network of finders.
          </p>

          <div className="mt-10 rounded-xl overflow-hidden border border-gray-600 max-w-xs">
            <img
              src="/images/SignIn/leftSection.png"
              alt="Left Section"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="text-gray-400 w-fit text-xs sm:text-sm border border-gray-500 p-5 rounded-xl">
          <p>Thousand of items successfully returned through our community</p>
        </div>
      </div>
    </section>
  );
}
