import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useContext, useState } from "react";
import { Context } from "./context/Context";

function App() {
  const { theme } = useContext(Context);
  const [ismobilMenu, setIsMobileMenu] = useState(false);

  const textColor = theme === "light" ? "text-black" : "text-white";
  const bgColor = theme === "light" ? "bg-white" : "bg-black";

  return (
    <div
      className={`${bgColor} ${textColor} w-full min-h-screen  ${ismobilMenu ? "pt-0": "pt-[10px] px-[25px] md:px-[50px] lg:px-[100px]"} `}
    >
      <Navbar ismobilMenu={ismobilMenu} setIsMobileMenu={setIsMobileMenu} />
      {ismobilMenu ? (
        ""
      ) : (
        <>
          <Outlet />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
