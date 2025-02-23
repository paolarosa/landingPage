import React from "react";
import "./Card.css";

const Card = ({ imageSrc, title, recipeName, pdfFile }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = recipeName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="card">
      <img src={imageSrc} alt={title} />
      <div className="overlay">
        <button className="download-button" onClick={handleDownload}>
          Scarica la ricetta
        </button>
      </div>
      <h3>{recipeName}</h3>
    </div>
  );
};

export default Card;
