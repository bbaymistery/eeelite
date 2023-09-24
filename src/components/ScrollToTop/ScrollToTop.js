// ScrollToTopButton.js

import React, { useState, useEffect } from 'react';
import './scrolltotop.scss';

import { AiOutlineArrowUp } from 'react-icons/ai'
const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    if (!visible) return null;

    return (
        <button className="scroll-to-top" onClick={handleClick} >
            <AiOutlineArrowUp />
        </button>
    );
};

export default ScrollToTopButton;
