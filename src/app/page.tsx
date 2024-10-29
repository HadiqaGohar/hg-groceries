'use client';
// pages/index.js
import { useState } from "react";
import FirstSplash from "./components/FirstSplash";
import SecondSplash from "./components/SecondSplash";
import Products from "./products/page";
import Footer from "./components/Footer";

export default function HomePage() {
  const [showFirstSplash, setShowFirstSplash] = useState(true);
  const [showSecondSplash, setShowSecondSplash] = useState(false);

  // Handle completion of the first splash screen
  const handleFirstSplashFinish = () => {
    setShowFirstSplash(false);
    setShowSecondSplash(true); // Show the second splash screen
  };

  // Handle completion of the second splash screen
  const handleSecondSplashFinish = () => {
    setShowSecondSplash(false);
    // This could be a function to navigate to the main content, such as redirecting or setting a state
  };

  return (
    <>
      {showFirstSplash && <FirstSplash onFinish={handleFirstSplashFinish} />}
      {showSecondSplash && <SecondSplash onFinish={handleSecondSplashFinish} />}
      
      
      {/* Main Home Page Content */}
      {!showFirstSplash && !showSecondSplash && (
        <div className="p-6">
          
          <Products/>

          {/* <Footer/> */}
          <Footer/>

        </div>
      )}
     
     
    </>
  );
}
