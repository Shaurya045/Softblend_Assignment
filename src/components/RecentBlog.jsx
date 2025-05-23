import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function RecentBlog({ data }) {
  if (!data || data.length === 0) {
    return <div>Loading recent posts...</div>;
  }

  const getTagBackgroundColor = (tag) => {
    const tagMap = {
      devchallenge: "#EDE9FE",
      webdev: "#E0E7FF",
      ai: "#FCE7F3",
      api: "#DBEAFE",
      coding: "#E0E7FF",
      frameworks: "#FEF3C7",
      design: "#DBEAFE",
      "Software Development": "#DCFCE7",
      tools: "#FEF3C7",
      saaS: "#FEE2E2",
      podcasts: "#F3E8FF",
      "Customer Success": "#E0F2FE",
    };
    return tagMap[tag] || "#E0E7FF";
  };

  const getTagTextColor = (tag) => {
    const tagMap = {
      devchallenge: "#7C3AED",
      webdev: "#4F46E5",
      ai: "#DB2777",
      api: "#2563EB",
      coding: "#4F46E5",
      frameworks: "#D97706",
      design: "#2563EB",
      "Software Development": "#16A34A",
      tools: "#D97706",
      saaS: "#DC2626",
      podcasts: "#9333EA",
      "Customer Success": "#0891B2",
    };
    return tagMap[tag] || "#4F46E5";
  };

  return (
    <div className="flex flex-col gap-[30px] mb-[60px] ">
      <h2 className="font-semibold text-[25px]">Recent blog posts</h2>

      <div className="flex flex-col gap-[30px]">
        {/* Top row with featured post and two smaller posts */}
        <div className="flex flex-col h-full lg:flex-row gap-[30px]">
          {/* Featured post (left side) */}
          <div className="flex flex-col gap-[20px] w-full h-full lg:w-[50%]">
            <div className="relative overflow-hidden">
              <img
                className="w-full h-[250px] object-cover"
                src={data[0].social_image || "/placeholder.svg"}
                alt={data[0].title}
              />
            </div>

            <div className="flex flex-col gap-[12px]">
              <div className="flex items-center justify-between">
                <p className="text-[#6941C6] font-semibold">
                  {data[0].readable_publish_date}
                </p>
              </div>

              <Link
                to={data[0].url}
                target="blank"
                className="flex justify-between items-start"
              >
                <h3 className="font-bold text-[22px] leading-tight pr-2">
                  {data[0].title}
                </h3>
                <FiArrowUpRight className="flex-shrink-0 h-5 w-5" />
              </Link>

              <p className="text-gray-400 line-clamp-3">
                {data[0].description}
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 rounded-full overflow-hidden">
                  <img
                    src={data[0].user.profile_image}
                    alt={data[0].user.name}
                  />
                </div>
                <p>{data[0].user.name}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-1">
                {data[0].tag_list.map((tag, index) => (
                  <div
                    key={index}
                    className="px-3 py-1 rounded-full text-sm flex justify-center items-center"
                    style={{
                      backgroundColor: getTagBackgroundColor(tag),
                      color: getTagTextColor(tag),
                    }}
                  >
                    <p>{tag}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Two smaller posts (right side) */}
          <div className="flex flex-col gap-[30px] w-full h-full lg:w-[50%]">
            {/* First small post */}
            <div className="flex flex-col h-[50%] sm:flex-row gap-[20px]">
              <div className="relative overflow-hidden sm:w-[50%]">
                <img
                  className="w-full h-full object-cover"
                  src={data[1].social_image || "/placeholder.svg"}
                  alt={data[1].title}
                />
              </div>

              <div className="flex flex-col gap-[8px] sm:w-[50%]">
                <p className="text-[#6941C6] font-semibold text-sm">
                  {data[1].readable_publish_date}
                </p>

                <Link
                  to={data[1].url}
                  target="blank"
                  className="flex justify-between items-start"
                >
                  <h3 className="font-bold text-lg leading-tight pr-2">
                    {data[1].title}
                  </h3>
                  <FiArrowUpRight className="flex-shrink-0 h-5 w-5" />
                </Link>

                <p className="text-gray-400 text-sm line-clamp-2">
                  {data[1].description}
                </p>

                <div className="flex items-center gap-3 ">
                  <div className="w-10 rounded-full overflow-hidden">
                    <img
                      src={data[1].user.profile_image}
                      alt={data[1].user.name}
                    />
                  </div>
                  <p>{data[1].user.name}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-1">
                  {data[1].tag_list.slice(0, 2).map((tag, index) => (
                    <div
                      key={index}
                      className="px-3 py-1 rounded-full text-sm flex justify-center items-center"
                      style={{
                        backgroundColor: getTagBackgroundColor(tag),
                        color: getTagTextColor(tag),
                      }}
                    >
                      <p>{tag}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Second small post */}
            <div className="flex flex-col h-[50%] sm:flex-row gap-[20px]">
              <div className="relative overflow-hidden sm:w-[50%]">
                <img
                  className="w-full h-full object-cover"
                  src={data[2].social_image || "/placeholder.svg"}
                  alt={data[2].title}
                />
              </div>

              <div className="flex flex-col gap-[8px] sm:w-[50%]">
                <p className="text-[#6941C6] font-semibold text-sm">
                  {data[2].readable_publish_date}
                </p>

                <Link
                  to={data[2].url}
                  target="blank"
                  className="flex justify-between items-start"
                >
                  <h3 className="font-bold text-lg leading-tight pr-2">
                    {data[2].title}
                  </h3>
                  <FiArrowUpRight className="flex-shrink-0 h-5 w-5" />
                </Link>

                <p className="text-gray-400 text-sm line-clamp-2">
                  {data[2].description}
                </p>

                <div className="flex items-center gap-3 ">
                  <div className="w-10 rounded-full overflow-hidden">
                    <img
                      src={data[2].user.profile_image}
                      alt={data[2].user.name}
                    />
                  </div>
                  <p>{data[2].user.name}</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-1">
                  {data[2].tag_list.slice(0, 2).map((tag, index) => (
                    <div
                      key={index}
                      className="px-3 py-1 rounded-full text-sm flex justify-center items-center"
                      style={{
                        backgroundColor: getTagBackgroundColor(tag),
                        color: getTagTextColor(tag),
                      }}
                    >
                      <p>{tag}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row with full-width post */}
        <div className="flex flex-col lg:flex-row gap-[30px] mt-4">
          <div className="relative overflow-hidden w-full lg:w-[50%]">
            <img
              className="w-full h-[250px] object-cover"
              src={data[3].social_image || "/placeholder.svg"}
              alt={data[3].title}
            />
          </div>

          <div className="flex flex-col gap-[12px] w-full lg:w-[50%]">
            <p className="text-[#6941C6] font-semibold">
              {data[3].readable_publish_date}
            </p>

            <Link
              to={data[3].url}
              target="blank"
              className="flex justify-between items-start"
            >
              <h3 className="font-bold text-[22px] leading-tight pr-2">
                {data[3].title}
              </h3>
              <FiArrowUpRight className="flex-shrink-0 h-5 w-5" />
            </Link>

            <p className="text-gray-400">{data[3].description}</p>

            <div className="flex items-center gap-3 ">
              <div className="w-10 rounded-full overflow-hidden">
                <img src={data[3].user.profile_image} alt={data[3].user.name} />
              </div>
              <p>{data[3].user.name}</p>
            </div>

            <div className="flex flex-wrap gap-2 mt-1">
              {data[3].tag_list.map((tag, index) => (
                <div
                  key={index}
                  className="px-3 py-1 rounded-full text-sm flex justify-center items-center"
                  style={{
                    backgroundColor: getTagBackgroundColor(tag),
                    color: getTagTextColor(tag),
                  }}
                >
                  <p>{tag}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentBlog;
