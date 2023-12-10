import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import linkImg from "../public/assets/icon-source.svg";

export default function Planet() {
  const { planet } = useParams();

  const currentPlanet = data.find((item) => item.name === planet);

  return (
    <div>
      {/* here i write a overviev, structure and surface */}
      <div className="flex items-center justify-center gap-[62px] mt-[20px] px-[24px]">
        <p className="text-[#FFFFFF] opacity-[0.5] text-[11px] font-bold tracking-widest">
          OVERVIEW
        </p>
        <p className="text-[#FFFFFF] opacity-[0.5] text-[11px] font-bold tracking-widest">
          STRUCTURE
        </p>
        <p className="text-[#FFFFFF] opacity-[0.5] text-[11px] font-bold tracking-widest">
          SURFACE
        </p>
      </div>
      {/* hr line */}
      <hr className="px-[0] h-[1px] bg-[#FFF] opacity-[0.2] mt-[20px]" />
      <img
        className="px-[24px]"
        src={currentPlanet.images.planet}
        alt="all planet image"
      />
      {/* text sectiction */}
      <div className="px-[24px]">
        <h1>{currentPlanet.name}</h1>
        <p>{currentPlanet.overview.content}</p>
        <p>Source : Wikipedia</p>
        <img src={linkImg} alt="link open image" />
      </div>

      <div className="px-[24px]">
        {/* first div */}
        <div>
          <p>ROTATION TIME</p>
          <h4></h4>
        </div>
        {/* second div */}
        <div>
          <p>REVOLUTION TIME</p>
          <h4></h4>
        </div>
        {/* third div */}
        <div>
          <p>RADIUS</p>
          <h4></h4>
        </div>
        {/* fourth div */}
        <div>
          <p>AVERAGE TEMP.</p>
          <h4></h4>
        </div>
      </div>
    </div>
  );
}
