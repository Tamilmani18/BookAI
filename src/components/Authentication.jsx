import React from "react";

const Authentication = () => {
  return (
    <div className="flex justify-center items-center h-full p-4 sm:p-6">
      <div className="bg-[#1e293b] dark:bg-[#0f172a] p-6 rounded-lg shadow-lg max-w-4xl my-5 w-full border border-[#334155] dark:border-[#4b5563]">
        <div className="text-[#a5b4fc] font-bold text-2xl mb-4">
          Authentication
        </div>
        <div className="text-[#e2e8f0] mb-4">
          <p className="mb-4">
            To use the API, you need to include your API key in the header of
            each request:
          </p>
          <span className="text-sm bg-[#374151] dark:bg-[#1f2937] p-2 rounded-md">
            X-API-Key: YOUR_API_KEY
          </span>
        </div>

        <div className="mb-4">
          <p className="text-[#e2e8f0]">
            To generate an API key, use the button below:
          </p>
          <button className="mt-3 bg-[#22d3ee] text-black dark:bg-[#1e40af] dark:text-white font-bold px-4 py-2 rounded">
            Generate API Key
          </button>
        </div>

        <div className="text-[#e2e8f0] flex items-center">
          <p className="mr-2">Your API Key: </p>
          <span className="font-bold bg-[#374151] dark:bg-[#1f2937] p-2 rounded-md">
            Generated API Key
          </span>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
