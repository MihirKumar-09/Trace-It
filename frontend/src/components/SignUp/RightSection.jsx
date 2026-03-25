import { FcGoogle } from "react-icons/fc";
import { Lock, ShieldCheck } from "lucide-react";
import PhoneAuth from "./PhoneAuth";
import { useState } from "react";
import axios from "axios";

export default function RightSection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  // Handle create account;
  const createAccount = async () => {
    console.log("Create Account");
    try {
      setNameError("");
      setEmailError("");
      setPhoneError("");

      let hasError = false;

      if (!phone) {
        setPhoneError("Verify mobile number");
        hasError = true;
      }

      if (!name.trim()) {
        setNameError("Enter your name");
        hasError = true;
      }

      if (!email) {
        setEmailError("Enter your email");
        hasError = true;
      }

      if (hasError) return;

      console.log(nameError, emailError);

      const res = await axios.post(
        "http://localhost:8080/auth/phone-login",
        {
          phone,
          name,
          email,
        },
        { withCredentials: true },
      );

      console.log("User:", res.data.user);

      window.location.href = "/";
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };
  return (
    <section className="bg-gray-200 w-full md:w-1/2">
      <div className="min-h-screen flex items-center justify-center px-6 py-10">
        {/* Card */}
        <div className="w-full max-w-md bg-white p-8 border border-gray-200 shadow-lg rounded-xl">
          {/* Heading */}
          <h3 className="text-2xl font-bold text-gray-900">
            Create your account
          </h3>

          <p className="text-gray-500 mt-2 text-sm">
            Sign up to report and track lost or found items
          </p>

          {/* Google Button */}
          <button
            onClick={() => {
              window.location.href = "http://localhost:8080/auth/google";
            }}
            className="mt-6 w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-2.5 hover:bg-gray-100 transition cursor-pointer"
          >
            <FcGoogle size={20} />
            <span className="text-sm font-medium text-gray-700">
              Continue with Google
            </span>
          </button>
          <div className="flex items-center my-6">
            <div className="grow h-px bg-gray-300"></div>
            <span className="mx-4 text-sm text-gray-400 font-medium">OR</span>
            <div className="grow h-px bg-gray-300"></div>
          </div>
          {/* Details like name, email, password */}
          <div className="w-full flex flex-col gap-5">
            <span>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (nameError) setNameError("");
                }}
                className="border border-gray-300 w-full p-3 rounded-md outline-none "
              />
              {nameError && (
                <p className="text-red-500 text-sm mt-1">{nameError}</p>
              )}
            </span>
            <span>
              <input
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError("");
                }}
                className="border border-gray-300 w-full p-3 rounded-md outline-none "
              />

              {emailError && (
                <p className="text-red-500 text-sm mt-1">{emailError}</p>
              )}
            </span>
          </div>
          {/* Phone Auth */}
          <PhoneAuth
            onSuccess={(phone) => setPhone(phone)}
            error={phoneError}
          />
          {/* Create account button */}
          <div className="flex justify-center items-center mt-5 rounded-md p-2 bg-[#F97316] text-white text-sm md:text-base font-medium cursor-pointer">
            <button onClick={createAccount} className="cursor-pointer">
              CREATE ACCOUNT
            </button>
          </div>
          <p className="text-sm text-center mt-5 text-gray-500">
            Already have an account?{" "}
            <a className="text-blue-500" href="http://localhost:5173/signin">
              Sign In
            </a>
          </p>
          <div className="block md:flex gap-6 w-full text-center mt-5">
            <span className="flex gap-1 items-center text-sm mb-4 md:mb-0">
              <Lock size={16} color="green" />
              Secure Authentication
            </span>
            <span className="flex gap-1 items-center text-sm">
              <ShieldCheck size={16} color="green" />
              Information Kept Private
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
