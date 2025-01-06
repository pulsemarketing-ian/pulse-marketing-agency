'use client';
import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const MyForm = () => {
  const [captchaToken, setCaptchaToken] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleCaptchaChange = (token) => {
    console.log("CAPTCHA Token:", token);
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please complete the CAPTCHA.");
      return;
    }

    const response = await fetch("/api/captche-verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: captchaToken }),
    });

    const result = await response.json();
    if (result.success) {
      setIsVerified(true);
      alert("CAPTCHA Verified!");
    } else {
      alert("CAPTCHA verification failed!");
    }
  };

  if (isVerified) {
    return null; 
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#040117] border-t border-[#1a1a3a] p-4 min-h-screen">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 translate-y-[20rem] border-white">
          <h2 className="text-white text-center text-medium text-3xl">Verify CAPTCHA</h2>
        <div className="flex items-center space-x-4">
          <label className="text-white min-w-[60px]">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your name"
            className="flex-1 bg-[#0a0a23] border border-[#1a1a3a] rounded px-3 py-2 text-white focus:outline-none focus:border-[#2a2a5a]"
          />
        </div>
        <div className="flex justify-center">
          <ReCAPTCHA
            sitekey="6Lc6-q8qAAAAAPl4LA2imZc7AmDi0W_qFm7RbvyO"
            onChange={handleCaptchaChange}
            theme="dark"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyForm;
