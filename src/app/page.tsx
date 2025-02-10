"use client";
import { useState, useEffect } from 'react';

import ContentWrapper from '@/components/layout/ContentWrapper';
import './global.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <div style={{ background: '#040117' }}>
   
      {/* <CustomCursor/> */}
      <ContentWrapper />
      {/* <MyForm/> */}
      {/* {showModal && <WebsiteAuditForm />} */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
    </div>
  );
}
