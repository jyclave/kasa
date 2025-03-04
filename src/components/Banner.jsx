import React from 'react';


const Banner = ({ imagePath, altText, title }) => {
  return (
    <div className="banner">
      <img 
        src={imagePath} 
        alt={altText || "Bannière"} 
        className="banner__image" 
      />
      {title && (
        <div className="banner__title">
          <p>{title}</p>
        </div>
      )}
    </div>
  );
};

export default Banner;