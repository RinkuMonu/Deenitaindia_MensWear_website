import React, { useState } from "react";

export default function LoginOtpModal({ isOpen, onClose }) {
  const [step, setStep] = useState("mobile"); // mobile | otp
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState(Array(6).fill(""));

  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const sendOtp = () => {
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      alert("Enter valid 10-digit mobile number");
      return;
    }
    setLoading(true);

    // 🔗 API CALL HERE
    setTimeout(() => {
      setLoading(false);
      setStep("otp");
      alert("OTP sent successfully");
    }, 1000);
  };

  const verifyOtp = () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length !== 6) {
      alert("Enter valid 6-digit OTP");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Login successful");
      onClose();
      setStep("mobile");
      setMobile("");
      setOtp(Array(6).fill(""));
    }, 1000);
  };

  const handleOtpChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleOtpBackspace = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-full max-w-sm rounded-xl p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 text-xl"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold text-center mb-4">
          Login with OTP
        </h2>

        {step === "mobile" && (
          <>
            <input
              type="text"
              inputMode="numeric"
              placeholder="Enter mobile number"
              value={mobile}
              maxLength={10}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9]/g, "");
                setMobile(value);
              }}
              className="w-full border rounded-lg px-4 py-2 mb-4"
            />

            <button
              onClick={sendOtp}
              disabled={loading}
              className="w-full bg-[#cba146] text-white py-2 rounded-lg"
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </>
        )}

        {step === "otp" && (
          <>
            <div className="flex justify-center gap-2 mb-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleOtpChange(e.target.value, index)}
                  onKeyDown={(e) => handleOtpBackspace(e, index)}
                  className="w-10 h-10 text-center text-lg border rounded-md focus:outline-none focus:border-black"
                />
              ))}
            </div>

            <button
              onClick={verifyOtp}
              disabled={loading}
              className="w-full bg-[#cba146] text-white py-2 rounded-lg"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>

            <p
              onClick={sendOtp}
              className="text-sm text-center text-green-600 mt-3 cursor-pointer"
            >
              Resend OTP
            </p>
          </>
        )}
      </div>
    </div>
  );
}
