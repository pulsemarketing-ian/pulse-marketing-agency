'use client'
import { useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import Image from 'next/image';

export default function DesignServicesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const tabContent = [
    {
      title: 'Logo Design',
      items: [
        { image: '/images/branding_page_images/brand-itendity (3).png', 
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.' 
        },
        { image: '/images/branding_page_images/brand-itendity (2).png', 
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.' 
        },
        { image: '/images/branding_page_images/brand-itendity (1).png', 
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.' 
        },
      ],
    },
    {
      title: 'Brochure Design',
      items: [
        { image: '/images/branding_page_images/brand-itendity (1).png', 
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.' 
        },
        { image: '/images/branding_page_images/brand-itendity (3).png', 
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.' 
        },
        { image: '/images/branding_page_images/brand-itendity (2).png', 
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.' 
        },
      ],
    },
    {
      title: 'Packaging Design',
      items: [
        { image: '/images/branding_page_images/brand-itendity (3).png', 
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.' 
        },
        { image: '/images/branding_page_images/brand-itendity (2).png', 
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.' 
        },
        { image: '/images/branding_page_images/brand-itendity (1).png', 
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.', 
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.' 
        },
      ],
    },
  ];

  return (
    <section className=" text-white py-16 w-[1200px] mx-auto">
      <div className="text-start mb-8">
        <h2 className="text-5xl font-medium leading-tight">Custom design services tailored to <br/>your unique brand identity.</h2>
      </div>

      {/* Tabs */}
      <div className="flex justify-start mb-8">
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          textColor="inherit"
          indicatorColor="primary"
          centered
          sx={{
            fontFamily:'Poppins, san-serif',
            fontSize:'14px'
          }}
        >
          {tabContent.map((tab, index) => (
            <Tab key={index} label={tab.title} />
          ))}
        </Tabs>
      </div>

      {/* Tab Content */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8" 
                    style={{
                        backgroundImage:"url('/images/app_page_images/radial.png')",
                        backgroundSize:'contain',
                        backgroundRepeat:'no-repeat'
                    }}        
      >
        {tabContent[activeTab].items.map((item, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg p-4">
            <div className="relative h-48 w-full mb-4">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-300 text-[13px]">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
