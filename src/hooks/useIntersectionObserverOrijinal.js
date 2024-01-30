import { useEffect,  } from 'react';

const useIntersectionObserverOrijinal = (targetRef, callback, options) => {
    useEffect(() => {
        const target = targetRef.current;
        if (!target) return;

        const observer = new IntersectionObserver(callback, options);
        observer.observe(target);

        return () => {
            observer.unobserve(target);
            observer.disconnect();
        };
    }, [targetRef, callback, options]);
};

export default useIntersectionObserverOrijinal;
