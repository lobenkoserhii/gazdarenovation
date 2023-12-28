import React from 'react';
import './Test.css';

function Test() {
  return (
    <div className="relative m-4 p-6 rounded-lg bg-Yl overflow-hidden">

      <div className="diagonal-clip"></div>


      <div className="text-content pl-6">
        <div className="uppercase tracking-wide text-lg font-semibold">Kitchen Remodeling</div>
        <p className="mt-2 mb-4">
          Our kitchen remodeling service is designed to transform your kitchen into a functional and visually appealing space.
          We offer a range of options, including cabinet installation or replacement, countertop upgrades, flooring, lighting, and appliance installation.
        </p>

        <button className="bg-yellow-400 text-gray-800 py-2 px-4 rounded hover:bg-yellow-300 transition-colors">
          More
        </button>
        
      </div>
    </div>
  );
}

export default Test;
