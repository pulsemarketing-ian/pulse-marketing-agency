import React from 'react';
import { Skeleton } from '@mui/material';

const Video = () => {
  return (
    <div style={{ textAlign: 'center' }} className='pt-0 pb-20'>
      <h1 className='poppins-medium ct-heading text-[1.5rem] md:text-5xl pb-10'>TikTok Videos</h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '0 20px' }}>

        {/* Video 1 with MUI Skeleton */}
        <div style={{ position: 'relative' }}>
          <Skeleton variant="rectangular" width={325} height={580} />
          <iframe
            src="https://www.tiktok.com/embed/7379681701435510021"
            width="325"
            height="580"
            allowFullScreen
            title="TikTok Video 1"
            style={{ position: 'absolute', top: 0, left: 0 }}
          ></iframe>
        </div>

        {/* Video 2 with MUI Skeleton */}
        <div style={{ position: 'relative' }}>
          <Skeleton variant="rectangular" width={325} height={580} />
          <iframe
            src="https://www.tiktok.com/embed/7371191608408116485"
            width="325"
            height="580"
            allowFullScreen
            title="TikTok Video 2"
            style={{ position: 'absolute', top: 0, left: 0 }}
          ></iframe>
        </div>

        {/* Video 3 with MUI Skeleton */}
        <div style={{ position: 'relative' }}>
          <Skeleton variant="rectangular" width={325} height={580} />
          <iframe
            src="https://www.tiktok.com/embed/7371191267276934406"
            width="325"
            height="580"
            allowFullScreen
            title="TikTok Video 3"
            style={{ position: 'absolute', top: 0, right: 0 }}
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default Video;
