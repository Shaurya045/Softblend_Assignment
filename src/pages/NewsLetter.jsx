import React, { useEffect, useState } from "react";
import AllBlog from "../components/AllBlog";
import axios from "axios";

function NewsLetter() {
  const [data, setData] = useState([]);

  const loadData = async () => {
    try {
      const response = await axios.get("https://dev.to/api/articles");
      setData(response.data);
    } catch (err) {
      console.error("Error fetching articles:", err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className="w-full my-[40px]">
      <div className="flex flex-col items-center mb-[60px]">
        <div className="max-w-[700px] flex flex-col gap-[10px] sm:gap-[20px] items-center">
          <h4 className="text-[#6941C6] font-semibold sm:mb-[-20px] ">Newsletters</h4>
          <h1 className="text-[28px] sm:text-[40px] font-bold text-center ">Stories and interviews</h1>
          <p className="text-gray-400 text-[18px] sm:text-[20px] text-center ">
            Subscribe to learn about new product features, the latest in
            technology, solutions, and updates.
          </p>
          <div className="flex flex-col gap-1.5 mt-[10px] ">
            <div className="flex flex-row gap-3 sm:gap-5">
              <input className="py-3 px-3 w-[200px] sm:w-[350px] bg-white rounded-lg text-gray-600 outline-none border-[1px] border-black " type="text" placeholder="Enter your email" />
              <button className="bg-[#6941C6] rounded-lg px-3 sm:px-5 py-1 sm:py-2 text-white ">Subscribe</button>
            </div>
            <p className="text-gray-400 text-[14px] ">
              We care about your data in our <span className="underline underline-offset-4"> privacy policy</span>
            </p>
          </div>
        </div>
      </div>

      <AllBlog data={data} />
    </div>
  );
}

export default NewsLetter;
