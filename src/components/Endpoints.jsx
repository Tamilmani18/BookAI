import React from "react";

const Endpoints = () => {
  return (
    <div className="flex justify-center items-center h-full p-4 sm:p-6">
      <div className="bg-[#1e293b] p-4 sm:p-6 rounded-lg shadow-lg max-w-4xl my-7 w-full border border-[#334155]">
        <div className="text-[#a5b4fc] font-bold text-xl sm:text-2xl mb-3 sm:mb-5">
          Endpoints
        </div>

        <div>
          <div className="text-[#a5b4fc] font-bold text-lg sm:text-xl mb-2 sm:mb-1">
            Generate Book
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mt-3">
            <button className="bg-[#22d3ee] text-black font-bold px-4 py-2 rounded w-full sm:w-auto">
              Post
            </button>
            <button className="font-bold text-[#e2e8f0] px-3 py-2 sm:py-3 bg-[#374151] rounded-md w-full sm:w-auto">
              /api/generate-book
            </button>
          </div>
        </div>

        <div className="mt-5">
          <div className="text-[#a5b4fc] font-bold text-lg sm:text-xl mb-3 sm:mb-4">
            Request Body
          </div>

          <div className="overflow-x-auto mb-4">
            <table className="min-w-full bg-[#1e293b] rounded-lg overflow-hidden border-[#334155]">
              <thead>
                <tr className="bg-[#6366f1] text-[#e2e8f0] text-xs sm:text-sm border border-[#334155]">
                  <th className="px-4 py-2 sm:px-6 sm:py-3 text-left">
                    PARAMETER
                  </th>
                  <th className="px-4 py-2 sm:px-6 sm:py-3 text-left">TYPE</th>
                  <th className="px-4 py-2 sm:px-6 sm:py-3 text-left">
                    DESCRIPTION
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-[#e2e8f0] border border-[#334155]">
                  <td className="px-4 py-2 sm:px-6 sm:py-4 text-[#22d3ee]">
                    api
                  </td>
                  <td className="px-4 py-2 sm:px-6 sm:py-4">string</td>
                  <td className="px-4 py-2 sm:px-6 sm:py-4">
                    The API provider to use. Options: "openai" or "together"
                  </td>
                </tr>

                <tr className="text-[#e2e8f0] border border-[#334155]">
                  <td className="px-4 py-2 sm:px-6 sm:py-4 text-[#22d3ee]">
                    model
                  </td>
                  <td className="px-4 py-2 sm:px-6 sm:py-4">string</td>
                  <td className="px-4 py-2 sm:px-6 sm:py-4">
                    The specific model to use (e.g., "gpt-3.5-turbo", "gpt-4",
                    "llama-2-70b")
                  </td>
                </tr>

                <tr className="text-[#e2e8f0] border border-[#334155]">
                  <td className="px-4 py-2 sm:px-6 sm:py-4 text-[#22d3ee]">
                    topic
                  </td>
                  <td className="px-4 py-2 sm:px-6 sm:py-4">string</td>
                  <td className="px-4 py-2 sm:px-6 sm:py-4">
                    The main topic or theme of the book
                  </td>
                </tr>

                <tr className="text-[#e2e8f0] border border-[#334155]">
                  <td className="px-4 py-2 sm:px-6 sm:py-4 text-[#22d3ee]">
                    language
                  </td>
                  <td className="px-4 py-2 sm:px-6 sm:py-4">string</td>
                  <td className="px-4 py-2 sm:px-6 sm:py-4">
                    The language in which the book should be generated
                  </td>
                </tr>

                <tr className="text-[#e2e8f0] border border-[#334155]">
                  <td className="px-4 py-2 sm:px-6 sm:py-4 text-[#22d3ee]">
                    word_count
                  </td>
                  <td className="px-4 py-2 sm:px-6 sm:py-4">integer</td>
                  <td className="px-4 py-2 sm:px-6 sm:py-4">
                    The approximate number of words for the generated book
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <div className="text-[#a5b4fc] font-bold text-lg sm:text-xl mb-3 sm:mb-4">
              Response
            </div>

            <div className="border border-[#334155] rounded-lg p-4 sm:p-6">
              <pre className="bg-[#0f172a] text-[#e2e8f0] p-4 rounded-md overflow-x-auto">
                <code>
                  {`{
  "message": "Book generation started",
  "status": "processing",
  "job_id": "unique-job-identifier"
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Endpoints;
