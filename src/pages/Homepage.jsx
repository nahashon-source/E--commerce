import React from "react";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate("/next");
    }
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to MyWebsite</h1>
      <p className="text-lg text-gray-700 mb-6 text-center max-w-2xl">
        Explore our services, learn more about us, and get in touch. We are here to help you achieve your goals.
      </p>
      <button 
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
        onClick={handleGetStarted}
      >
        Get Started
      </button>
    </div>
  
  );
};

export default HomePage;
