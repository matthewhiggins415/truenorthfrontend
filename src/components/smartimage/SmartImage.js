import React, { useEffect, useRef, useState } from 'react';

// Reusable image that loads cleanly: it stays invisible over a subtle
// placeholder background until the image has fully decoded, then fades in.
// It also lazy-loads and decodes off the main thread to avoid jank.
const SmartImage = ({ src, alt = '', className, style, ...rest }) => {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    // Cached images can finish before React attaches the onLoad handler.
    if (img && img.complete && img.naturalWidth > 0) {
      setLoaded(true);
    } else {
      setLoaded(false);
    }
  }, [src]);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onLoad={() => setLoaded(true)}
      style={{
        opacity: loaded ? 1 : 0,
        transition: 'opacity 400ms ease-in-out',
        backgroundColor: '#eceff3',
        ...style,
      }}
      {...rest}
    />
  );
};

export default SmartImage;
