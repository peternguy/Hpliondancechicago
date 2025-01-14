import React, { useState } from 'react';
import gsap from 'gsap';
import AnimatedTitle2 from '../components/AnimatedTitle2';

const services = [
  {
    id: 1,
    name: "Weddings",
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
    name: 'Restaurants',
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
        Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at 
        nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
  
        Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. 
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
  
        Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. 
  
        Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. 
        Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. 
        Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. 
  
        <br /><br />
  
        Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. 
        Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per 
        conubia nostra, per inceptos himenaeos. Nam nec ante. 
  
        Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. 
        Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.
  
        <br /><br />
  
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
        Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at 
        nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
  
        Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. 
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
  
        <br /><br />
  
        Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. 
        Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. 
        Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. 
        Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.

        <br /><br />
  
        Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. 
        Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. 
        Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. 
        Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.

        <br /><br />
  
        Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. 
        Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. 
        Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. 
        Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet.
      </div>
    ),
  },
  
];


const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="flex flex-col bg-blue-50 md:flex-row min-h-screen font-circular-web  pt-16 md:pt-0">
      {/* List Section */}
      <div className="w-full md:w-1/5 p-3 border-b md:border-b-0 md:border-r border-blue-500 flex flex-col justify-center">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => setSelectedService(service)}
            className={`p-2 text-left text-sm md:text-2xl transition-all duration-300 
            ${selectedService?.id === service.id 
              ? 'bg-blue-500 text-gray-100 scale-110' 
              : 'hover:bg-blue-500 hover:text-gray-100 hover:scale-110'} 
            rounded-tl-full rounded-bl-full`}            
            >
            <AnimatedTitle2
              title={service.name}
              containerClass="mt-1 text-left"
            />          
          </button>
        ))}
      </div>

      {/* Details Section */}
      <div className="w-full md:flex-1 p-5 flex flex-col items-start bg-blue-500 text-black">
        {selectedService ? (
          <>
            <AnimatedTitle2
              title={selectedService.name}
              containerClass="mt-5 !text-white text-center"
            />            
            <p className="text-sm md:text-lg text-black">{selectedService.description}</p>
          </>
        ) : (
          <p className="text-sm md:text-lg text-black text-center">Select a service to view details</p>
          
        )}
      </div>
    </div>
  );
};

export default Services;
