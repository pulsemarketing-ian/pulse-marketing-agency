"use client";
import { useState, useEffect } from 'react';
import ECommerce from "@/components/Dashboard/E-commerce";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <DefaultLayout>
                <ECommerce />
            </DefaultLayout>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
        </>
    );
}
