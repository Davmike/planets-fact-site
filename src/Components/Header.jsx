import React, { useState } from "react";
import hamburger from "../../public/assets/icon-hamburger.svg";
import { Link } from "react-router-dom";
import planets from "../../data.json";
import arrowImg from "../../public/assets/icon-chevron.svg";

export default function Header() {
  const [hidden, SetHidden] = useState(false);
  return (
    <header>
      <div className="flex justify-between items-center px-[24px] pt-[16px]">
        <h3 className="text-[#FFFFFF] text-[28px] font-[normal] font-antonio">
          THE PLANETS
        </h3>
        <img
          src={hamburger}
          alt="hamburger image"
          onClick={() => {
            SetHidden(!hidden);
          }}
        />
      </div>
      <hr className="px-[0] h-[1px] bg-[#FFF] opacity-[0.2] mt-[17px]" />

      {hidden && (
        <nav className="px-[24px] mt-[44px]">
          <ul className="text-[#FFF] text-[15px] font-bold">
            {planets.map((planet, index) => {
              return (
                <div>
                  <Link
                    key={index}
                    to={`/${planet.name}`}
                    className="flex justify-center items-center mt-[20px]"
                  >
                    {/* get planets color from data json */}
                    <div
                      className="w-[20px] h-[20px] rounded-[50%]"
                      style={{ backgroundColor: planet.color }}
                    ></div>
                    <li className="ml-[25px]">{planet.name.toUpperCase()}</li>
                    <img
                      src={arrowImg}
                      alt="arrow image"
                      className="w-[4px] h-[8px] ml-auto mr-[8px]"
                    />
                  </Link>
                  <hr className="text-[white] h-[1px] opacity-[0.2] px-[24px] mt-[20px]" />
                </div>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
