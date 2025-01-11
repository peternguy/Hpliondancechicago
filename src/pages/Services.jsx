import React, { useState } from 'react';
import gsap from 'gsap';


const services = [
  {
    id: 1,
    name: 'Weddings',
    description: (
      <div className="text-gray-400">
        Our wedding lion dance routine follows the traditional customs and can be customized based on your cultures. 
        The team can do a regular lion dance or a surprise one (if this is being arranged by a relative or friend). 
        We understand the time constraints at a wedding event — the routine will not take longer than you require.
      </div>
    ),
  },
  {
    id: 2,
    name: 'Lunar New Year',
    description: (
      <div className="text-gray-300">
        Celebrate Lunar New Year with vibrant lion dances that bring joy and good fortune. 
        Our performances are tailored for cultural events, ensuring an unforgettable experience.
      </div>
    ),
  },
  {
    id: 3,
    name: 'Grand Openings',
    description: (
      <div className="text-gray-300">
        Description for Service 3
      </div>
    ),
  },
  {
    id: 4,
    name: 'Restaurant Performances',
    description: (
      <div className="text-gray-300">
        Description for Service 4
      </div>
    ),
  },
  {
    id: 5,
    name: 'Workshops',
    description: (
      <div className="text-gray-300">
        Celebrate Lunar New Year with vibrant lion dances that bring joy and good fortune. 
        Our performances are tailored for cultural events, ensuring an unforgettable experience.
      </div>
    ),
  },
  {
    id: 6,
    name: 'Corporate Events',
    description: (
      <div className="text-gray-300">
        Description for Service 4
      </div>
    ),
  },
  {
    id: 7,
    name: 'Festivals',
    description: (
      <div className="text-gray-400">
        Our wedding lion dance routine follows the traditional customs and can be customized based on your cultures. 
        The team can do a regular lion dance or a surprise one (if this is being arranged by a relative or friend). 
        We understand the time constraints at a wedding event — the routine will not take longer than you require.
      </div>
    ),
  },
  {
    id: 8,
    name: 'Private Parties',
    description: (
      <div className="text-gray-400">
        Our wedding lion dance routine follows the traditional customs and can be customized based on your cultures. 
        The team can do a regular lion dance or a surprise one (if this is being arranged by a relative or friend). 
        We understand the time constraints at a wedding event — the routine will not take longer than you require.
        Our wedding lion dance routine follows the traditional customs and can be customized based on your cultures. 
        The team can do a regular lion dance or a surprise one (if this is being arranged by a relative or friend). 
        We understand the time constraints at a wedding event — the routine will not take longer than you require.

        Our wedding lion dance routine follows the traditional customs and can be customized based on your cultures. 
        The team can do a regular lion dance or a surprise one (if this is being arranged by a relative or friend). 
        We understand the time constraints at a wedding event — the routine will not take longer than you require.
        Our wedding lion dance routine follows the traditional customs and can be customized based on your cultures. 
        The team can do a regular lion dance or a surprise one (if this is being arranged by a relative or friend). 
        We understand the time constraints at a wedding event — the routine will not take longer than you require.

      </div>
    ),
  },
];


const ServicePage = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="flex flex-col bg-blue-300 md:flex-row min-h-screen font-general pt-16 md:pt-0">
      {/* List Section */}
      <div className="w-full md:w-1/4 p-3 border-b md:border-b-0 md:border-r border-gray-300 flex flex-col justify-center">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => setSelectedService(service)}
            className="p-4 text-left text-sm md:text-2xl transition-colors duration-300 hover:bg-gray-200"
          >
            {service.name}
          </button>
        ))}
      </div>

      {/* Details Section */}
      <div className="w-full md:flex-1 p-5 flex flex-col justify-center items-start bg-black text-white">
        {selectedService ? (
          <>
            <h2 className="mb-2 text-white text-2xl font-semibold">{selectedService.name}</h2>
            <p className="text-sm md:text-lg text-white">{selectedService.description}</p>
          </>
        ) : (
          <p className="text-sm md:text-lg text-white text-center">Select a service to view details</p>
        )}
      </div>
    </div>
  );
};

export default ServicePage;
