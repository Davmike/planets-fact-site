import React from "react";
import hamburger from "../../public/assets/icon-hamburger.svg";
import planets from "../../data.json";
import arrowImg from "../../public/assets/icon-chevron.svg";
import { useNavigate } from "react-router-dom";

// StyledBurger component
const StyledBurger = ({ setHidden, hidden, ...props }) => (
  <button
    className={`flex flex-col justify-around  w-8 h-8 bg-transparent border-none cursor-pointer p-0 z-10 focus:outline-none ${props.className}`}
    onClick={() => setHidden(!hidden)}
    {...props}
  >
    <div
      className={`w-8 h-1 bg-white rounded-md transition-all duration-300 ease-in-out mt-[7px] ${
        hidden ? "transform rotate-45 translate-y-2" : "transform rotate-0"
      }`}
    ></div>
    <div
      className={`w-8 h-1 bg-white rounded-md transition-all duration-300 ease-in-out ${
        hidden ? "opacity-0" : "opacity-1"
      }`}
    ></div>
    <div
      className={`w-8 h-1 bg-white rounded-md transition-all duration-300 ease-in-out ${
        hidden ? "transform -rotate-45 -translate-y-2" : "transform rotate-0"
      }`}
    ></div>
  </button>
);

export default function Header({ setHidden, hidden }) {
  const navigate = useNavigate();

  return (
    <header className="md:hidden">
      <div className="flex justify-between items-center px-[24px] pt-[16px]">
        <h3 className="text-[#FFFFFF] text-[28px] font-[normal] font-antonio">
          THE PLANETS
        </h3>
        {/* Using the StyledBurger component with the states */}
        <StyledBurger setHidden={setHidden} hidden={hidden} />
      </div>
      <hr className="px-[0] h-[1px] bg-[#FFF] opacity-[0.2] mt-[17px]" />

      {hidden && (
        <nav className="px-[24px] mt-[44px]">
          <ul className="text-[#FFF] text-[15px] font-bold">
            {planets.map((planet, index) => (
              <div key={index}>
                <div
                  className="flex justify-center items-center mt-[20px] cursor-pointer "
                  onClick={() => {
                    setHidden(!hidden);
                    navigate(`/${planet.name}`);
                  }}
                >
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
                </div>
                <hr className="text-[white] h-[1px] opacity-[0.2] px-[24px] mt-[20px]" />
              </div>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
