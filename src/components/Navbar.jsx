import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Context } from "../context/Context";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

function Navbar({ ismobilMenu, setIsMobileMenu }) {
  const { theme } = useContext(Context);

  return (
    <div className={`${ismobilMenu ? "" : "py-[10px]"}`}>
      <div className="flex justify-between items-center">
        {ismobilMenu ? (
          ""
        ) : (
          <h1 className="font-bold text-[20px]">Shaurya Pratap Singh</h1>
        )}
        <button
          className="block md:hidden"
          onClick={() => setIsMobileMenu(true)}
        >
          {ismobilMenu ? "" : <RxHamburgerMenu size={20} />}
        </button>
        <div className="hidden md:flex items-center gap-2">
          <div className="flex gap-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "underline underline-offset-8 font-medium"
                    : `${
                        theme === "light"
                          ? "hover:bg-black/10"
                          : "hover:bg-white/10"
                      }`
                } px-4 py-2 rounded-md`
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "underline underline-offset-8 font-medium"
                    : `${
                        theme === "light"
                          ? "hover:bg-black/10"
                          : "hover:bg-white/10"
                      }`
                } px-4 py-2 rounded-md`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "underline underline-offset-8 font-medium"
                    : `${
                        theme === "light"
                          ? "hover:bg-black/10"
                          : "hover:bg-white/10"
                      }`
                } px-4 py-2 rounded-md`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/newsletter"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "underline underline-offset-8 font-medium"
                    : `${
                        theme === "light"
                          ? "hover:bg-black/10"
                          : "hover:bg-white/10"
                      }`
                } px-4 py-2 rounded-md`
              }
            >
              Newsletter
            </NavLink>
          </div>
          <ThemeToggle />
        </div>

        {ismobilMenu && (
          <div className="relative flex flex-col items-center justify-center h-screen w-full md:hidden ">
            <div className="flex flex-col items-center justify-center gap-[10px] text-[18px]">
              <h1 className="font-bold text-[20px] mb-[30px]">
                Shaurya Pratap Singh
              </h1>
              <NavLink
                onClick={() => setIsMobileMenu(false)}
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "underline underline-offset-8 font-medium"
                      : `${
                          theme === "light"
                            ? "hover:bg-black/10"
                            : "hover:bg-white/10"
                        }`
                  } px-4 py-2 rounded-md`
                }
              >
                Blog
              </NavLink>
              <NavLink
                onClick={() => setIsMobileMenu(false)}
                to="/projects"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "underline underline-offset-8 font-medium"
                      : `${
                          theme === "light"
                            ? "hover:bg-black/10"
                            : "hover:bg-white/10"
                        }`
                  } px-4 py-2 rounded-md`
                }
              >
                Projects
              </NavLink>
              <NavLink
                onClick={() => setIsMobileMenu(false)}
                to="/about"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "underline underline-offset-8 font-medium"
                      : `${
                          theme === "light"
                            ? "hover:bg-black/10"
                            : "hover:bg-white/10"
                        }`
                  } px-4 py-2 rounded-md`
                }
              >
                About
              </NavLink>
              <NavLink
                onClick={() => setIsMobileMenu(false)}
                to="/newsletter"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "underline underline-offset-8 font-medium"
                      : `${
                          theme === "light"
                            ? "hover:bg-black/10"
                            : "hover:bg-white/10"
                        }`
                  } px-4 py-2 rounded-md`
                }
              >
                Newsletter
              </NavLink>
              <ThemeToggle />
            </div>
            <button
              className="absolute bottom-[20px] mx-auto "
              onClick={() => setIsMobileMenu(false)}
            >
              <RxCross2 size={25} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
