'use client';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const flowerCursorRef = useRef(null);


    const moveCursor = (e) => {
        console.log(e.clientX, e.clientY);
        gsap.to(cursorRef.current, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.2,
            ease: 'power2.out'
        });
        gsap.to(flowerCursorRef.current, {
            x: e.clientX - 0,
            y: e.clientY - 0,
            duration: 0.9,
            ease: 'power3.out'
        });
    };

    useEffect(() => {
        gsap.set(cursorRef.current, { xPercent: -20, yPercent: -20 });
        gsap.set(flowerCursorRef.current, { xPercent: -50, yPercent: -50 });
    }, []);

    useEffect(() => {
        window.addEventListener('mousemove', moveCursor);
        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <div>
            <div
                ref={cursorRef}
                className="cursor w-[8px] h-[8px] rounded-[50%] fixed bg-blue-200"
                style={{ pointerEvents: 'none', zIndex: 9999 }}
            ></div>
            <div
                ref={flowerCursorRef}
                className="flower-cursor w-[30px] h-[30px] bg-transparent border-[2px] rounded-[50%] border-blue-500 fixed z-[9999]"
                style={{ width: '30px', height: '30px', pointerEvents: 'none' }}
            
            ></div>
        </div>
    );
};

export default CustomCursor;