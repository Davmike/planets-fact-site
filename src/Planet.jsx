import { useState } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";
import linkImg from "../public/assets/icon-source.svg";
import Overview from "./Components/Overview";

export default function Planet({ hidden }) {
  const { planet } = useParams();

  const [change, setChange] = useState("overview");
  // const [showSecondImage, setShowSecondImage] = useState(true);

  const currentPlanet = data.find((item) => item.name === planet);
  // const InsidePlanetImage = currentPlanet?.images?.planet?.geology;

  return (
    <>
      {!hidden && (
        <div>
          {/* here i write a overviev, structure and surface */}
          <div className="flex items-center justify-center gap-[57px] mt-[20px] px-[24px] cursor-pointer md:hidden">
            {/* overview */}
            <div>
              <p
                onClick={() => {
                  setChange("overview");
                }}
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
            {/* strucutre */}
            <div>
              <p
                onClick={() => {
                  setChange("structure");
                }}
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
            {/* surface */}
            <div>
              <p
                onClick={() => {
                  setChange("geology");
                }}
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
          <div className="xl:flex xl:gap-[193px] xl:justify-center">
            <div className=" flex justify-center items-center xl:justify-start relative">
              <img
                className="px-[24px] w-[220px] mt-[75px] md:w-[285px] xl:w-[450px]"
                src={
                  change === "structure"
                    ? currentPlanet?.images?.internal
                    : currentPlanet?.images?.planet
                }
                alt="all planet image"
              />
              <div
                className={`${
                  change !== "geology" ? "flex" : ""
                } w-[133px] absolute top-1/2`}
              >
                {change === "geology" && (
                  <img
                    className="absolute w-[75px] top-[65px] left-[31px] md:w-[95px] md:top-[90px] md:left-[21px] xl:w-[133px] xl:top-[117px] xl:left-[157px]"
                    src={currentPlanet?.images?.geology}
                    alt="geology image"
                  />
                )}
              </div>
            </div>

            {/* text sectiction */}
            <div className="px-[24px] text-center flex flex-col md:flex-row items-center md:text-left md:items-start md:px-[40px] xl:flex-col">
              <div className="flex-grow">
                {/* Add this div to let the Overview component push to the right */}
                <h1 className="text-[#FFFFFF] text-[40px] font-normal font-antonio mt-[98px] xl:text-[80px]">
                  {currentPlanet.name.toLocaleUpperCase()}
                </h1>
                <p className="text-[#FFFFFF] text-[11px] font-normal w-[39ch] font-sparten mt-[16px] leading-5 opacity-70 md:text-[15px]">
                  {currentPlanet[change]?.content}
                </p>
                <div className="flex items-center justify-center mt-[32px] md:justify-start">
                  <p className="text-[#FFF] opacity-[0.5] text-[12px] font-sparten font-bold">
                    <span className="text-[#FFF] opacity-[0.5] text-[12px] font-sparten font-normal">
                      Source :
                    </span>
                    <a
                      href={
                        change === "overview"
                          ? currentPlanet?.overview?.source
                          : change === "structure"
                          ? currentPlanet?.structure?.source
                          : change === "geology"
                          ? currentPlanet?.geology?.source
                          : "#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FFF] opacity-[0.5] text-[12px] font-sparten font-bold hover:opacity-100"
                    >
                      Wikipedia
                    </a>
                  </p>
                  <img
                    className="ml-[4px]"
                    src={linkImg}
                    alt="link open image"
                  />
                </div>
              </div>
              <Overview change={change} setChange={setChange} />
              {/* This component will be positioned on the right side */}
            </div>
          </div>
          <div className="px-[24px] mt-[28px] grid justify-center items-center pb-[36px] md:flex md:flex-row md:gap-[11px] xl:mt-[59px] xl:gap-[30px]">
            {/* first div */}
            <div className="w-[327px] h-[48px] border border-solid border-white border-opacity-20 mt-[8px] flex items-center px-[24px] md:h-[88px] md:flex-col justify-center xl:w-[255px] xl:h-[128px]">
              <p className="text-[#FFFFFF] font-bold text-[10px] opacity-[0.5] font-sparten mr-[auto] xl:text-[15px]">
                ROTATION TIME
              </p>
              <h4 className="text-[#FFFFFF] text-[20px] font-normal font-antonio ml-[auto] md:ml-[0] md:mr-[auto] xl:text-[40px]">
                {currentPlanet.rotation}
              </h4>
            </div>
            {/* second div */}
            <div className="w-[327px] h-[48px] border border-solid border-white border-opacity-20 mt-[8px] flex items-center px-[24px] md:h-[88px] md:flex-col justify-center xl:w-[255px] xl:h-[128px]">
              <p className="text-[#FFFFFF] font-bold text-[10px] opacity-[0.5] font-sparten mr-[auto] xl:text-[15px]">
                REVOLUTION TIME
              </p>
              <h4 className="text-[#FFFFFF] text-[20px] font-normal font-antonio ml-[auto] md:ml-[0] md:mr-[auto] xl:text-[40px]">
                {currentPlanet.revolution}
              </h4>
            </div>
            {/* third div */}
            <div className="w-[327px] h-[48px] border border-solid border-white border-opacity-20 mt-[8px] flex items-center px-[24px] md:h-[88px] md:flex-col justify-center xl:w-[255px] xl:h-[128px]">
              <p className="text-[#FFFFFF] font-bold text-[10px] opacity-[0.5] font-sparten mr-[auto] xl:text-[15px]">
                RADIUS
              </p>
              <h4 className="text-[#FFFFFF] text-[20px] font-normal font-antonio ml-[auto] md:ml-[0] md:mr-[auto] xl:text-[40px]">
                {currentPlanet.radius}
              </h4>
            </div>
            {/* fourth div */}
            <div className="w-[327px] h-[48px] border border-solid border-white border-opacity-20 mt-[8px] flex items-center px-[24px] md:h-[88px] md:flex-col justify-center xl:w-[255px] xl:h-[128px]">
              <p className="text-[#FFFFFF] font-bold text-[10px] opacity-[0.5] font-sparten mr-[auto] xl:text-[15px]">
                AVERAGE TEMP.
              </p>
              <h4 className="text-[#FFFFFF] text-[20px] font-normal font-antonio ml-[auto] md:ml-[0] md:mr-[auto] xl:text-[40px]">
                {currentPlanet.temperature}
              </h4>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
