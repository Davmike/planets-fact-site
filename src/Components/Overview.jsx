import React from "react";
import data from "../../data.json";
import { useParams } from "react-router-dom";

export default function Overview({ change, setChange }) {
  const { planet } = useParams();
  const currentPlanet = data.find((item) => item.name === planet);

  return (
    <div className="hidden md:flex flex-col gap-[16px] mt-[140px]">
      {/* Overview section*/}
      <div
        onClick={() => setChange("overview")}
        className={`md:w-[281px] md:h-[40px] md:border md:border-solid md:border-white md:border-opacity-20 ${
          change === "overview" ? "opacity-100" : "opacity-50"
        }`}
        style={
          change === "overview"
            ? { backgroundColor: `${currentPlanet.color}` }
            : {}
        }
      >
        <p className="md:text-[white] font-bold text-[11px] leading-6 font-sparten tracking-widest flex gap-[17px] pt-[8px] pl-[20px]">
          <span className="md:opacity-20">01</span>OVERVIEW
        </p>
      </div>
      {/* Structure section */}
      <div
        onClick={() => setChange("structure")}
        className={`md:w-[281px] md:h-[40px] md:border md:border-solid md:border-white md:border-opacity-20 
        ${change === "structure" ? "opacity-100" : "opacity-50"}`}
        style={
          change === "structure"
            ? { backgroundColor: `${currentPlanet.color}` }
            : {}
        }
      >
        <p className="md:text-[white] font-bold text-[11px] leading-6 font-sparten tracking-widest flex gap-[17px] pt-[8px] pl-[20px]">
          <span className="md:opacity-20">02</span>INTERNAL STRUCTURE
        </p>
      </div>
      {/* Sruface section */}
      <div
        onClick={() => setChange("geology")}
        className={`md:w-[281px] md:h-[40px] md:border md:border-solid md:border-white md:border-opacity-20 ${
          change === "geology" ? "opacity-100" : "opacity-50"
        }`}
        style={
          change === "geology"
            ? { backgroundColor: `${currentPlanet.color}` }
            : {}
        }
      >
        <p className="md:text-[white] font-bold text-[11px] leading-6 font-sparten tracking-widest flex gap-[17px] pt-[8px] pl-[20px]">
          <span className="md:opacity-20">03</span>SURFACE GEOLOGY
        </p>
      </div>
    </div>
  );
}
