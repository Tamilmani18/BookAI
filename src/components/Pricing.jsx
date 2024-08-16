import React from "react";

const Pricing = () => {
  return (
    <div className="flex justify-center items-center h-full p-4 sm:p-6">
      <div className="bg-[#1e293b] dark:bg-[#0f172a] p-6 rounded-lg shadow-lg max-w-4xl my-7 w-full border border-[#334155] dark:border-[#4b5563]">
        <div className="text-[#a5b4fc] font-bold text-2xl mb-5">
          API Pricing
        </div>

        <div className="mt-5">
          <p className="text-[#e2e8f0] mb-4">
            Our API pricing is based on the model used and the number of tokens
            processed. Here's a breakdown of the costs:
          </p>

          <div className="overflow-x-auto mb-7">
            <table className="min-w-full bg-[#1e293b] dark:bg-[#0f172a] rounded-lg overflow-hidden border-[#334155] dark:border-[#4b5563]">
              <thead>
                <tr className="bg-[#6366f1] text-[#e2e8f0] text-sm border border-[#334155] dark:border-[#4b5563]">
                  <th className="px-6 py-3 text-left">API</th>
                  <th className="px-6 py-3 text-left">MODEL</th>
                  <th className="px-6 py-3 text-left">PRICE PER 1K TOKENS</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-[#e2e8f0] border border-[#334155] dark:border-[#4b5563]">
                  <td className="px-6 py-4">OpenAI</td>
                  <td className="px-6 py-4">GPT-3.5</td>
                  <td className="px-6 py-4">$0.002</td>
                </tr>

                <tr className="text-[#e2e8f0] border border-[#334155] dark:border-[#4b5563]">
                  <td className="px-6 py-4">OpenAI</td>
                  <td className="px-6 py-4">GPT-4</td>
                  <td className="px-6 py-4">$0.03</td>
                </tr>

                <tr className="text-[#e2e8f0] border border-[#334155] dark:border-[#4b5563]">
                  <td className="px-6 py-4">Together AI</td>
                  <td className="px-6 py-4">Llama-2-70b</td>
                  <td className="px-6 py-4">$0.0008</td>
                </tr>

                <tr className="text-[#e2e8f0] border border-[#334155] dark:border-[#4b5563]">
                  <td className="px-6 py-4">Together AI</td>
                  <td className="px-6 py-4">Llama-2-13b</td>
                  <td className="px-6 py-4">$0.0006</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mb-7">
            <div className="text-[#a5b4fc] font-bold text-xl mb">
              Token Estimation
            </div>
            <p className="text-[#e2e8f0]">
              On average, 1 token is approximately 4 characters or 0.75 words.
              For precise pricing, we recommend using our token calculator tool.
            </p>
          </div>

          <div className="mb-7">
            <div className="text-[#a5b4fc] font-bold text-xl mb">Billing</div>
            <p className="text-[#e2e8f0]">
              You will only be charged for the tokens used in generating the
              book. The API tracks token usage and bills accordingly. Detailed
              usage reports are available in your account dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
