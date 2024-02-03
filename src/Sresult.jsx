import React from "react";
import "./index.css";

const Sresult = (img) => {
  const image = `https://source.unsplash.com/600×400/${img.name}`;
  //By any issue, this is not getting image
  return (
    <>
      <div className="image">
        <img src={image} alt="Image" />
      </div>
    </>
  );
};

export default Sresult;
