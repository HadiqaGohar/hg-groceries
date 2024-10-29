// components/SecondSplash.js
'use client';
import { FaCarrot } from "react-icons/fa";
import Typewriter from 'typewriter-effect';

export default function SecondSplash({ onFinish }) {
    const handleGetStarted = () => {
        onFinish(); // Notify to hide the splash screen and show the login page
    };

    return (
        <div
            className="flex flex-col items-center justify-center h-screen bg-cover bg-center relative"
            style={{
                backgroundImage: "url('https://cdn.pixabay.com/photo/2022/08/01/07/59/vegetables-7357585_1280.png')",
                backdropFilter: "blur(10px)", // Apply blur effect
            }}
        >
            {/* Blackish overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative z-10 p-6 rounded-lg text-center blur-white-shade">
                {/* Ensure content is above the overlay */}
                <div className="flex justify-center mb-4 animate-bounce">
                    {/* Center the icon */}
                    <FaCarrot color="white" size={50} />
                </div>

                <h2 className="text-white text-4xl font-semibold mt-6">
                    <Typewriter
                        options={{
                            strings: ['Welcome to our store'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h2>
                <p className="text-white text-lg font-light text-center mt-2">
                    Get Your Groceries in as fast as one hour
                </p>

                {/* Get Started Button */}
                <button
                    onClick={handleGetStarted}
                    className="mt-6 px-10 py-4 text-white bg-teal-700 text-xl font-semibold rounded hover:text-teal-700 hover:bg-white transition duration-300"
                >
                    Get Started
                </button>
            </div>
        </div>
    );
}
