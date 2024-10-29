'use client'
// components/FirstSplash.js
import { useEffect } from "react";
import { FaCarrot } from "react-icons/fa";

export default function FirstSplash({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // Notify to show the second splash
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="flex items-center justify-center h-screen bg-teal-700">
      <div className="animate-spin">
      <FaCarrot color="white" size={40} />
      </div>
      <div className="flex flex-col items-center mx-2">
        <h1 className="text-white text-5xl font-bold font-poppins">HG.</h1>
        <p className="text-white text-lg font-extralight text-center">Online Groceries</p>
      </div>
    </div>
  );
}
