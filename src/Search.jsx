import React, { useState } from "react";
import "./index.css";
import Sresult from "./Sresult";

const Search = () => {
  const [img, setImg] = useState("");
  const check = (e) => {
    const data = e.target.value;
    setImg(data);
    img === "" ? setImg(" ") : "";
  };
  return (
    <>
      <div className="hello">
        <label>Search Anything</label>
        <input
          type="text"
          placeholder="Enter Anything"
          className="search"
          onChange={check}
          value={img}
        />
      </div>
      {img === "" ? null : <Sresult name={img} />}
    </>
  );
};

export default Search;
