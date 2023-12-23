import { useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import linkImg from "../public/assets/icon-source.svg";

export default function Planet({ hidden }) {
  const { planet } = useParams();

  const [change, setChange] = useState("overview");

  const currentPlanet = data.find((item) => item.name === planet);

  return (
    <>
      {!hidden && (
        <div>
          {/* here i write a overviev, structure and surface */}
          <div className="flex items-center justify-center gap-[57px] mt-[20px] px-[24px] md:hidden">
            <div>
              <p
                onClick={() => setChange("overview")}
                className={`text-white text-[11px] font-bold tracking-widest ${
                  change === "overview" ? "opacity-100" : "opacity-50"
                }`}
                style={
                  change === "overview"
                    ? { borderBottom: `4px solid ${currentPlanet.color}` }
                    : {}
                }
              >
                OVERVIEW
              </p>
            </div>
            <div>
              <p
                onClick={() => setChange("structure")}
                className={`text-white text-[11px] font-bold tracking-widest  ${
                  change === "structure" ? "opacity-100" : "opacity-50"
                }`}
                style={
                  change === "structure"
                    ? { borderBottom: `4px solid ${currentPlanet.color}` }
                    : {}
                }
              >
                STRUCTURE
              </p>
            </div>
            <div>
              <p
                onClick={() => setChange("geology")}
                className={`text-white text-[11px] font-bold tracking-widest ${
                  change === "geology" ? "opacity-100" : "opacity-50"
                }`}
                style={
                  change === "geology"
                    ? { borderBottom: `4px solid ${currentPlanet.color}` }
                    : {}
                }
              >
                SURFACE
              </p>
            </div>
          </div>

          {/* hr line */}
          <hr className="px-[0] h-[1px] bg-[#FFF] opacity-[0.2] mt-[20px]" />
          <div className=" flex justify-center items-center">
            <img
              className="px-[24px] w-[220px] mt-[75px] "
              src={currentPlanet.images.planet}
              alt="all planet image"
            />
          </div>

          {/* text sectiction */}
          <div className="px-[24px] text-center flex items-center flex-col md:text-left md:items-start">
            <h1 className="text-[#FFFFFF] text-[40px] font-normal font-antonio mt-[98px]">
              {currentPlanet.name.toLocaleUpperCase()}
            </h1>
            <p className="text-[#FFFFFF] text-[11px] font-normal w-[39ch] font-sparten mt-[16px] leading-5 opacity-70 md:text-[15px] ">
              {currentPlanet[change]?.content}
            </p>
            <div className="flex items-center justify-center mt-[32px] md:justify-start">
              <p className="text-[#FFF] opacity-[0.5] text-[12px] font-sparten font-bold">
                <span className="text-[#FFF] opacity-[0.5] text-[12px] font-sparten font-normal">
                  Source :
                </span>
                Wikipedia
              </p>
              <img className="ml-[4px]" src={linkImg} alt="link open image" />
            </div>
          </div>

          <div className="px-[24px] mt-[28px] grid justify-center items-center">
            {/* first div */}
            <div className="w-[327px] h-[48px] border border-solid border-white border-opacity-20 mt-[8px] flex items-center px-[24px]">
              <p className="text-[#FFFFFF] font-bold text-[10px] opacity-[0.5] font-sparten mr-[auto]">
                ROTATION TIME
              </p>
              <h4 className="text-[#FFFFFF] text-[20px] font-normal font-antonio ml-[auto]">
                {currentPlanet.rotation}
              </h4>
            </div>
            {/* second div */}
            <div className="w-[327px] h-[48px] border border-solid border-white border-opacity-20 mt-[8px] flex items-center px-[24px]">
              <p className="text-[#FFFFFF] font-bold text-[10px] opacity-[0.5] font-sparten mr-[auto]">
                REVOLUTION TIME
              </p>
              <h4 className="text-[#FFFFFF] text-[20px] font-normal font-antonio ml-[auto]">
                {currentPlanet.revolution}
              </h4>
            </div>
            {/* third div */}
            <div className="w-[327px] h-[48px] border border-solid border-white border-opacity-20 mt-[8px] flex items-center px-[24px]">
              <p className="text-[#FFFFFF] font-bold text-[10px] opacity-[0.5] font-sparten mr-[auto]">
                RADIUS
              </p>
              <h4 className="text-[#FFFFFF] text-[20px] font-normal font-antonio ml-[auto]">
                {currentPlanet.radius}
              </h4>
            </div>
            {/* fourth div */}
            <div className="w-[327px] h-[48px] border border-solid border-white border-opacity-20 mt-[8px] flex items-center px-[24px]">
              <p className="text-[#FFFFFF] font-bold text-[10px] opacity-[0.5] font-sparten mr-[auto]">
                AVERAGE TEMP.
              </p>
              <h4 className="text-[#FFFFFF] text-[20px] font-normal font-antonio ml-[auto]">
                {currentPlanet.temperature}
              </h4>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
