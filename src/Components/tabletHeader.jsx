import React from "react";
import planets from "../../data.json";
import { useNavigate } from "react-router-dom";

export default function TabletHeader() {
  const navigate = useNavigate();

  return (
    <header className="hidden md:flex justify-center">
      <div className="flex px-[24px] pt-[16px] md:flex flex-col items-center justify-center xl:flex-row xl:gap-[534px]">
        <div>
          <h3 className="text-[#FFFFFF] text-[28px] font-[normal] font-antonio md:pt-[16px]">
            THE PLANETS
          </h3>
        </div>

        <nav className="px-[24px] mt-[44px]">
          <ul className="text-[#FFF] text-[15px] font-bold flex md:mt-[-20px] mb-[10px] gap-[10px] opacity-70">
            {planets.map((planet, index) => {
              return (
                <div key={index}>
                  <div
                    key={index}
                    className="flex justify-center items-center mt-[20px] cursor-pointer"
                    onClick={() => {
                      navigate(`/${planet.name}`);
                    }}
                  >
                    <li className="ml-[25px]">{planet.name.toUpperCase()}</li>
                  </div>
                </div>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
