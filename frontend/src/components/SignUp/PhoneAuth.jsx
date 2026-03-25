import { useState } from "react";
import { auth } from "../../firebase.js";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

export default function PhoneAuth() {
  const [step, setStep] = useState("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const setupRecaptcha = () => {
    if (window.recaptchaVerifier) {
      window.recaptchaVerifier.clear();
    }

    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "invisible",
      },
    );
  };

  const sendOtp = async () => {
    if (!phone || phone.length < 10) {
      alert("Enter valid phone number");
      return;
    }

    try {
      setLoading(true);

      setupRecaptcha();

      const formattedPhone = phone.startsWith("+91") ? phone : `+91${phone}`;

      const appVerifier = window.recaptchaVerifier;

      const confirmationResult = await signInWithPhoneNumber(
        auth,
        formattedPhone,
        appVerifier,
      );

      window.confirmationResult = confirmationResult;
      setStep("otp");
    } catch (err) {
      console.log("OTP ERROR:", err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    if (otp.length !== 6) {
      alert("Invalid OTP");
      return;
    }

    try {
      setLoading(true);

      const result = await window.confirmationResult.confirm(otp);
      console.log("User:", result.user);

      setStep("verified");
    } catch (err) {
      console.log("VERIFY ERROR:", err);
      alert("Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-6">
      {/* STEP 1 */}
      {step === "phone" && (
        <div className="flex flex-col gap-4">
          <input
            type="tel"
            placeholder="Enter phone (123-456-789-0)"
            className="border border-gray-300 p-3 rounded-md outline-none"
            value={phone}
            onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
          />

          <button
            onClick={sendOtp}
            className="bg-blue-600 text-white py-2 rounded-md"
          >
            {loading ? "Sending..." : "Send OTP"}
          </button>
        </div>
      )}

      {/* STEP 2 */}
      {step === "otp" && (
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-500">OTP sent to +91{phone}</p>

          <input
            type="text"
            placeholder="Enter 6-digit OTP"
            className="border p-3 rounded-md outline-none text-center tracking-widest"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

          <button
            onClick={verifyOtp}
            className="bg-green-600 text-white py-2 rounded-md"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>

          <button
            onClick={() => setStep("phone")}
            className="text-sm text-blue-500"
          >
            Change Number
          </button>
        </div>
      )}

      {/* STEP 3 */}
      {step === "verified" && (
        <div className="text-center">
          <p className="text-green-600">Verified Successfully</p>
        </div>
      )}

      {/* REQUIRED */}
      <div id="recaptcha-container"></div>
    </div>
  );
}
