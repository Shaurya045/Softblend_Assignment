import React, { useContext, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

function AllBlog() {
  const { data } = useContext(Context);

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  const totalPages = Math.ceil(data.length / blogsPerPage);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = data.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const goToNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

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

  if (!data || data.length === 0) {
    return <div>Loading recent posts...</div>;
  }

  return (
    <div className="flex flex-col gap-[30px] mb-[30px]">
      <h2 className="font-semibold text-[25px]">All blog posts</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {currentBlogs.map((item) => (
          <div key={item.id} className="flex flex-col h-full ">
            <div className="relative overflow-hidden mb-4">
              <img
                src={item.social_image}
                alt={item.title}
                className="w-full h-[230px] object-cover"
              />
            </div>

            <p className="text-[#6941C6] font-semibold mb-2">
              {item.readable_publish_date}
            </p>

            <Link
              to={item.url}
              target="blank"
              className="flex justify-between items-start mb-2"
            >
              <h2 className="text-xl font-bold pr-2">{item.title}</h2>
              <FiArrowUpRight className="flex-shrink-0 h-5 w-5" />
            </Link>

            <p className="text-gray-400 mb-4 flex-grow">{item.description}</p>

            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 rounded-full overflow-hidden">
                <img src={item.user.profile_image} alt={item.user.name} />
              </div>
              <p>{item.user.name}</p>
            </div>

            <div className="flex flex-wrap gap-2 mt-auto mb-[20px]">
              {item.tag_list.map((tag, index) => (
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
        ))}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row justify-between items-center border-t border-gray-800 pt-4">
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 1}
          className={`flex flex-row justify-center items-center gap-2 ${
            currentPage === 1
              ? "text-gray-600 cursor-not-allowed"
              : "cursor-pointer"
          }`}
        >
          <FaArrowLeft className="h-4 w-4" />
          <p>Previous</p>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => paginate(1)}
            className={`w-8 h-8 flex items-center justify-center rounded-md ${
              currentPage === 1
                ? "bg-gray-200 text-black font-medium"
                : "hover:bg-gray-200"
            }`}
          >
            1
          </button>

          {currentPage > 3 && totalPages > 5 && (
            <span className="text-gray-400">...</span>
          )}

          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter((num) => {
              if (totalPages <= 5) {
                return num > 1 && num < totalPages;
              }

              if (currentPage <= 3) {
                return num > 1 && num <= 3;
              } else if (currentPage >= totalPages - 2) {
                return num >= totalPages - 2 && num < totalPages;
              } else {
                return (
                  num >= currentPage - 1 &&
                  num <= currentPage + 1 &&
                  num !== 1 &&
                  num !== totalPages
                );
              }
            })
            .map((num) => (
              <button
                key={num}
                onClick={() => paginate(num)}
                className={`w-8 h-8 flex items-center justify-center rounded-md ${
                  currentPage === num
                    ? "bg-gray-200 text-black font-medium"
                    : "hover:bg-gray-200"
                }`}
              >
                {num}
              </button>
            ))}

          {currentPage < totalPages - 2 && totalPages > 5 && (
            <span className="text-gray-400">...</span>
          )}

          {totalPages > 1 && (
            <button
              onClick={() => paginate(totalPages)}
              className={`w-8 h-8 flex items-center justify-center rounded-md ${
                currentPage === totalPages
                  ? "bg-gray-200 text-black font-medium"
                  : " hover:bg-gray-200"
              }`}
            >
              {totalPages}
            </button>
          )}
        </div>

        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={`flex flex-row justify-center items-center gap-2 ${
            currentPage === totalPages
              ? "text-gray-600 cursor-not-allowed"
              : "cursor-pointer"
          }`}
        >
          <p>Next</p>
          <FaArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default AllBlog;
