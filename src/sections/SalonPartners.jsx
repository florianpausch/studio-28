// src/components/SalonPartners.jsx
import React from 'react';
import { partners } from '../constants';


const SalonPartners = () => {
  return (
    <section className="bg-[#b59762] py-16">
      <div className="container mx-auto px-12">
        <h2 className="text-[40px] font-bold text-center text-white mb-8">Unsere Partner</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:scale-105"
            >
              <img 
                src={partner.imageUrl} 
                alt={partner.name} 
                className="w-38 h-32 rounded-lg mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
              <p className="text-gray-700">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalonPartners;