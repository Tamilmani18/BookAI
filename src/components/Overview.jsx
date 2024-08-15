import React from "react";

const Overview = () => {
  return (
    <div className="flex justify-center items-center h-full p-4 sm:p-6 ">
      <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg max-w-4xl my-7 w-full border border-[#334155]">
        <div className="text-[#a5b4fc] font-bold text-2xl mb-4">Overview</div>
        <div>
          <p className="text-[#e2e8f0]">
            The Book Generator API allows you to generate books on various topics
            using different language models. This documentation provides details
            on how to use the API, including authentication, available endpoints,
            and code examples.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
