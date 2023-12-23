import React from "react";

export default function Overview() {
  return (
    <div className="hidden md:flex flex-col gap-[16px] mt-[140px]">
      {/* Overview section*/}
      <div className="md:w-[281px] md:h-[40px] md:border md:border-solid md:border-white md:border-opacity-20 ">
        <p className="md:text-[white] font-bold text-[11px] leading-6 font-sparten tracking-widest flex gap-[17px] pt-[8px] pl-[20px]">
          <span className="md:opacity-20">01</span>OVERVIEW
        </p>
      </div>
      {/* Structure section */}
      <div className="md:w-[281px] md:h-[40px] md:border md:border-solid md:border-white md:border-opacity-20 ">
        <p className="md:text-[white] font-bold text-[11px] leading-6 font-sparten tracking-widest flex gap-[17px] pt-[8px] pl-[20px]">
          <span className="md:opacity-20">02</span>INTERNAL STRUCTURE
        </p>
      </div>
      {/* Sruface section */}
      <div className="md:w-[281px] md:h-[40px] md:border md:border-solid md:border-white md:border-opacity-20 ">
        <p className="md:text-[white] font-bold text-[11px] leading-6 font-sparten tracking-widest flex gap-[17px] pt-[8px] pl-[20px]">
          <span className="md:opacity-20">03</span>SURFACE GEOLOGY
        </p>
      </div>
    </div>
  );
}
