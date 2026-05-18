import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LazyImage = ({ src, alt, className = '', imageClassName = '', ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#121212]/50 ${className}`} {...props}>
      {/* Luxury gold/beige shimmer placeholder skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-warm-beige/5 to-transparent animate-pulse" />
      )}
      
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        initial={{ filter: 'blur(15px)', opacity: 0 }}
        animate={isLoaded ? { filter: 'blur(0px)', opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full h-full object-cover ${imageClassName}`}
      />
    </div>
  );
};

export default LazyImage;
