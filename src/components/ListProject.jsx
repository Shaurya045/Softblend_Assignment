import React, { useContext } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

function ListProject() {
  const { data } = useContext(Context);

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
      management: "#FDF2FA",
      design: "#DBEAFE",
      discuss: "#71EA8B",
      motivation: "#FEF3C7",
      gamedev: "#FEE2E2",
      leadership: "#F3E8FF",
      career: "#E0F2FE",
    };
    return tagMap[tag] || "#F9F5FF";
  };

  const getTagTextColor = (tag) => {
    const tagMap = {
      devchallenge: "#7C3AED",
      webdev: "#4F46E5",
      ai: "#DB2777",
      api: "#2563EB",
      coding: "#4F46E5",
      management: "#C11574",
      design: "#2563EB",
      discuss: "#FFFFFF",
      motivation: "#D97706",
      gamedev: "#DC2626",
      leadership: "#9333EA",
      career: "#0891B2",
    };
    return tagMap[tag] || "#6941C6";
  };

  return (
    <div className="flex flex-col gap-[30px] mb-[60px] ">
      <h2 className="font-semibold text-[25px]">List Project</h2>

      <div className="flex flex-col gap-[30px]">
        <div className="flex md:flex-row flex-col gap-[30px] w-full h-full">
          <div className="flex flex-col gap-[20px] w-full md:w-[50%]">
            <div className="relative overflow-hidden w-full">
              <img
                className="w-full h-full object-cover"
                src={data[0].social_image || "/placeholder.svg"}
                alt={data[0].title}
              />
            </div>

            <div className="flex flex-col gap-[8px] w-full">
              <p className="text-[#6941C6] font-semibold text-sm">
                {data[0].readable_publish_date}
              </p>

              <Link
                to={data[0].url}
                target="blank"
                className="flex justify-between items-start"
              >
                <h3 className="font-bold text-lg leading-tight pr-2">
                  {data[0].title}
                </h3>
                <FiArrowUpRight className="flex-shrink-0 h-5 w-5" />
              </Link>

              <p className="text-gray-400 text-sm line-clamp-2">
                {data[0].description}
              </p>

              <div className="flex items-center gap-3 ">
                <div className="w-10 rounded-full overflow-hidden">
                  <img
                    src={data[0].user.profile_image}
                    alt={data[0].user.name}
                  />
                </div>
                <p>{data[0].user.name}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-1">
                {data[0].tag_list.slice(0, 2).map((tag, index) => (
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

          <div className="flex flex-col gap-[20px] w-full md:w-[50%]">
            <div className="relative overflow-hidden w-full">
              <img
                className="w-full h-full object-cover"
                src={data[2].social_image || "/placeholder.svg"}
                alt={data[2].title}
              />
            </div>

            <div className="flex flex-col gap-[8px] w-full">
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

        <div className="flex flex-col gap-[20px] w-full ">
          <div className="relative overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={data[1].social_image || "/placeholder.svg"}
              alt={data[1].title}
            />
          </div>

          <div className="flex flex-col gap-[12px]">
            <div className="flex items-center justify-between">
              <p className="text-[#6941C6] font-semibold">
                {data[1].readable_publish_date}
              </p>
            </div>

            <Link
              to={data[1].url}
              target="blank"
              className="flex justify-between items-start"
            >
              <h3 className="font-bold text-[22px] leading-tight pr-2">
                {data[1].title}
              </h3>
              <FiArrowUpRight className="flex-shrink-0 h-5 w-5" />
            </Link>

            <p className="text-gray-400 line-clamp-3">{data[1].description}</p>

            <div className="flex items-center gap-3 ">
              <div className="w-10 rounded-full overflow-hidden">
                <img src={data[1].user.profile_image} alt={data[1].user.name} />
              </div>
              <p>{data[1].user.name}</p>
            </div>

            <div className="flex flex-wrap gap-2 mt-1">
              {data[1].tag_list.map((tag, index) => (
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

        <div className="flex md:flex-row flex-col gap-[30px] w-full h-full">
          <div className="flex flex-col gap-[20px] w-full md:w-[50%]">
            <div className="relative overflow-hidden w-full">
              <img
                className="w-full h-full object-cover"
                src={data[3].social_image || "/placeholder.svg"}
                alt={data[3].title}
              />
            </div>

            <div className="flex flex-col gap-[8px] w-full">
              <p className="text-[#6941C6] font-semibold text-sm">
                {data[3].readable_publish_date}
              </p>

              <Link
                to={data[3].url}
                target="blank"
                className="flex justify-between items-start"
              >
                <h3 className="font-bold text-lg leading-tight pr-2">
                  {data[3].title}
                </h3>
                <FiArrowUpRight className="flex-shrink-0 h-5 w-5" />
              </Link>

              <p className="text-gray-400 text-sm line-clamp-2">
                {data[3].description}
              </p>

              <div className="flex items-center gap-3 ">
                <div className="w-10 rounded-full overflow-hidden">
                  <img
                    src={data[3].user.profile_image}
                    alt={data[3].user.name}
                  />
                </div>
                <p>{data[3].user.name}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-1">
                {data[3].tag_list.slice(0, 2).map((tag, index) => (
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

          <div className="flex flex-col gap-[20px] w-full md:w-[50%]">
            <div className="relative overflow-hidden w-full">
              <img
                className="w-full h-full object-cover"
                src={data[4].social_image || "/placeholder.svg"}
                alt={data[4].title}
              />
            </div>

            <div className="flex flex-col gap-[8px] w-full">
              <p className="text-[#6941C6] font-semibold text-sm">
                {data[4].readable_publish_date}
              </p>

              <Link
                to={data[4].url}
                target="blank"
                className="flex justify-between items-start"
              >
                <h3 className="font-bold text-lg leading-tight pr-2">
                  {data[4].title}
                </h3>
                <FiArrowUpRight className="flex-shrink-0 h-5 w-5" />
              </Link>

              <p className="text-gray-400 text-sm line-clamp-2">
                {data[4].description}
              </p>

              <div className="flex items-center gap-3 ">
                <div className="w-10 rounded-full overflow-hidden">
                  <img
                    src={data[4].user.profile_image}
                    alt={data[4].user.name}
                  />
                </div>
                <p>{data[4].user.name}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-1">
                {data[4].tag_list.slice(0, 2).map((tag, index) => (
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
    </div>
  );
}

export default ListProject;
