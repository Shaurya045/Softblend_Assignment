import React, { useContext } from "react";
import { Context } from "../context/Context";
import RecentBlog from "../components/RecentBlog";
import AllBlog from "../components/AllBlog";

function Blog() {
  const { theme } = useContext(Context);
  const bgColor = theme === "light" ? "bg-black" : "bg-white";

  return (
    <div className="flex flex-col ">
      <div className="flex flex-col justify-center items-center my-[50px] ">
        <div className={`w-full h-[1px] ${bgColor} `}></div>
        <h1 className="text-[61px] sm:text-[100px] md:text-[130px] lg:text-[170px] xl:text-[220px] 2xl:text-[270px] font-bold mt-[-15px] sm:mt-[-20px] md:mt-[-35px] lg:mt-[-45px] xl:mt-[-55px] 2xl:mt-[-60px] ">
          THE BLOG
        </h1>
        <div
          className={`w-full h-[1px] mt-[-10px] sm:mt-[-15px] md:mt-[-20px] lg:mt-[-30px] xl:mt-[-40px] ${bgColor} `}
        ></div>
      </div>

      <RecentBlog />
      <AllBlog />
    </div>
  );
}

export default Blog;
