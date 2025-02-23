import React, { useState } from 'react';
import { Skeleton, useMediaQuery } from '@mui/material';

const Video = () => {
  const isMobile = useMediaQuery('(max-width: 768px)'); // Mobile breakpoint
  const [loadedVideos, setLoadedVideos] = useState({ 1: false, 2: false, 3: false });

  const handleLoad = (index) => {
    setLoadedVideos((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div style={{ textAlign: 'center' }} className="pt-0 pb-10 md:pb-20">
      <h1 className="poppins-medium ct-heading text-[1.5rem] md:text-5xl pb-10">
        TikTok Videos
      </h1>
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
          padding: '0 20px',
        }}
      >
        {[ 
          "https://www.tiktok.com/embed/7379681701435510021",
          "https://www.tiktok.com/embed/7371191608408116485",
          "https://www.tiktok.com/embed/7371191267276934406"
        ].map((src, index) => (
          <div key={index} style={{ position: 'relative', width: 325, height: 580 }}>
            {!loadedVideos[index] && (
              <Skeleton variant="rectangular" width={325} height={580} />
            )}
            <iframe
              src={src}
              width="325"
              height="580"
              allowFullScreen
              title={`TikTok Video ${index + 1}`}
              onLoad={() => handleLoad(index)}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                opacity: loadedVideos[index] ? 1 : 0, // Hide until loaded
                transition: 'opacity 0.3s ease-in-out', // Smooth transition
              }}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;
