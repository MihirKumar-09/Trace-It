import { useState, useEffect } from "react";

export default function PhoneAuth() {
  const [step, setStep] = useState("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(0);

  // Timer for resend OTP
  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  // Send OTP
  const sendOtp = async () => {
    if (!/^[0-9]{10}$/.test(phone)) {
      alert("Enter valid 10-digit phone number");
      return;
    }

    setLoading(true);

    // Replace with real API
    setTimeout(() => {
      setLoading(false);
      setStep("otp");
      setTimer(30); // start 30s timer
    }, 1000);
  };

  // Verify OTP
  const verifyOtp = async () => {
    if (!/^[0-9]{6}$/.test(otp)) {
      alert("Enter valid 6-digit OTP");
      return;
    }

    setLoading(true);

    // Replace with real API
    setTimeout(() => {
      setLoading(false);
      setStep("verified");
    }, 1000);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-6">
      {/* STEP 1: PHONE INPUT */}
      {step === "phone" && (
        <div className="flex flex-col gap-4">
          <input
            type="tel"
            placeholder="Enter phone number"
            className="border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <button
            onClick={sendOtp}
            disabled={loading}
            className="bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>
        </div>
      )}

      {/* STEP 2: OTP VERIFY */}
      {step === "otp" && (
        <div className="flex flex-col gap-4">
          <p className="text-sm text-gray-500">
            OTP sent to <span className="font-medium">{phone}</span>
          </p>

          <input
            type="text"
            maxLength={6}
            placeholder="Enter 6-digit OTP"
            className="border border-gray-300 p-3 rounded-lg text-center tracking-widest outline-none focus:ring-2 focus:ring-green-500"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

          <button
            onClick={verifyOtp}
            disabled={loading}
            className="bg-green-600 text-white py-2.5 rounded-lg hover:bg-green-700 transition disabled:opacity-50"
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>

          {/* Resend + Change */}
          <div className="flex justify-between text-sm">
            <button
              onClick={sendOtp}
              disabled={timer > 0}
              className={`${
                timer > 0 ? "text-gray-400" : "text-blue-600 hover:underline"
              }`}
            >
              {timer > 0 ? `Resend in ${timer}s` : "Resend OTP"}
            </button>

            <button
              onClick={() => {
                setStep("phone");
                setOtp("");
              }}
              className="text-gray-500 hover:underline"
            >
              Change Number
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: SUCCESS */}
      {step === "verified" && (
        <div className="text-center mt-4">
          <h3 className="text-green-600 font-semibold text-lg">
            ✅ Login Successful
          </h3>
        </div>
      )}
    </div>
  );
}
