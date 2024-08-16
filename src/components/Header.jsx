import React from "react";
import { IoMoon, IoSunny } from "react-icons/io5";

const Header = () => {
  const [dark, setDark] = React.useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="bg-[#6366f1] h-32 flex justify-between items-center px-4 dark:bg-black">
      <div className="flex-1 flex justify-center">
        <p className="text-5xl font-bold text-white dark:text-gray-200">
          Book Generator API
        </p>
      </div>
      <div>
        <button
          onClick={() => darkModeHandler()}
          className="bg-white text-black dark:bg-black dark:text-white font-bold py-2 px-4 rounded"
        >
          {dark && <IoSunny />}
          {!dark && <IoMoon />}
        </button>
      </div>
    </div>
  );
};

export default Header;
