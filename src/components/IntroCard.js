import React from "react";

const IntroCard = ({ src, alt, paragraph1, paragraph2, small, title }) => {
  return (
    <div className="card text-bg-dark mb-5">
      <img src={src} className="card-img" alt={alt} height="750px" />
      <div className="card-img-overlay">
        <div className="container mt-5 ms-0">
          <h1 className="card-title">{title}</h1>
          <p className="card-text">{paragraph1}</p>
          <p className="card-text">{paragraph2}</p>
          <p className="card-text text-info">
            <small>{small}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroCard;
