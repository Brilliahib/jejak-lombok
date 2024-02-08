import React from "react";
import Asset from "../../../assets/img/Asset 4page.png";

const Jumbotron = () => {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pt-16 jumbotron mb-24">
      <div>
        <h1 className="text-6xl font-black leading-tight mb-8 tracking-wide">
          Discover The Natural Beauty <br />
          of Lombok Island
        </h1>
        <div className="">
          <img src={Asset} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
