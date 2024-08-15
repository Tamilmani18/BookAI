import React from "react";

const Tutorial = () => {
  return (
    <div className="flex justify-center items-center h-full p-4 sm:p-6">
      <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg max-w-4xl my-7 w-full border border-[#334155]">
        <div className="text-[#a5b4fc] font-bold text-2xl mb-7">Tutorial</div>
        <div className="mb-7">
          <div className="text-[#a5b4fc] font-bold text-xl mb-2">
            Step 1: Obtain an API Key
          </div>
          <p className="text-[#e2e8f0]">
            Generate an API key using the button in the Authentication section
            above.
          </p>
        </div>

        <div className="mb-7">
          <div className="text-[#a5b4fc] font-bold text-xl mb-2">
            Step 2: Make a Request
          </div>
          <p className="text-[#e2e8f0]">
            Use your preferred programming language or tool to make a POST
            request to the /api/generate-book endpoint. Include your API key in
            the header and the required parameters in the request body.
          </p>
        </div>

        <div className="mb-7">
          <div className="text-[#a5b4fc] font-bold text-xl mb-2">
            Step 3: Handle the Response
          </div>
          <p className="text-[#e2e8f0]">
            The API will return a response with a job ID. You can use this ID to
            check the status of your book generation job.
          </p>
        </div>

        <div className="mb-7">
          <div className="text-[#a5b4fc] font-bold text-xl mb-2">
            Step 4: Retrieve the Generated Book
          </div>
          <p className="text-[#e2e8f0]">
            Once the job is complete, you can retrieve the generated book using
            the job ID (endpoint to be implemented).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
