import React from "react";
const Card = () => {
    return (
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-4">
        <img
          className="w-full h-48 object-cover rounded-lg"
          src="https://time.com/redesign/_next/image/?url=https%3A%2F%2Fapi.time.com%2Fwp-content%2Fuploads%2F2025%2F03%2Fmuslims-india-ramadan.jpg%3Fquality%3D85&w=1920&q=75"
          alt="Card Image"
        />
        <div className="py-4">
          <h2 className="text-xl font-semibold">Click This Card</h2>
          <p className="text-gray-600 mt-2">
          Indian Muslims Have Learned to Hide Our Identities. We Shouldn’t Have to
          </p>
        </div>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
          Click ME
        </button>
      </div>
    );
  };
  
  export default Card;
  