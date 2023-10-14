// useIntersectionObserver.js
import { useEffect, useRef } from 'react';

const useIntersectionObserver2 = (selector, callback, options) => {
    const observedElementsRef = useRef(new Set());
    const observerRef = useRef(null);

    useEffect(() => {
        // Create an IntersectionObserver instance
        const observer = new IntersectionObserver(callback, options);

        // Get the DOM elements to observe
        const observedElements = document.querySelectorAll(selector);
        observedElements.forEach((element) => {
            if (!observedElementsRef.current.has(element)) {
                // Observe the element if it hasn't been observed before
                observer.observe(element);
                observedElementsRef.current.add(element);
            }
        });

        // Clean up when the component unmounts
        return () => {
            if (observerRef.current) {
                observedElements.forEach((element) => {
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    observerRef.current.unobserve(element);
                });
            }
        };
    }, [selector, callback, options]);

    return null; // This hook doesn't render anything
};

export default useIntersectionObserver2;
