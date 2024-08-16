import React from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

const Header = () => {
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <div
      className={`h-32 flex justify-between items-center px-4 ${
        dark ? "bg-black" : "bg-[#6366f1]"
      }`}
    >
      <div className="flex-1 flex justify-center">
        <p
          className={`text-5xl font-bold ${
            dark ? "text-gray-200" : "text-white"
          }`}
        >
          Book Generator API
        </p>
      </div>
      <div>
        <button
          onClick={darkModeHandler}
          className={`font-bold py-2 px-4 rounded flex items-center ${
            dark ? "bg-gray-800 text-white" : "bg-white text-black"
          }`}
        >
          {dark ? <IoSunny size={24} /> : <IoMoon size={24} />}
        </button>
      </div>
    </div>
  );
};

export default Header;
