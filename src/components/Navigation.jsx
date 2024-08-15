import React from "react";

const Navigation = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-8 bg-[#1e293b] text-[#e2e8f0] text-sm font-bold h-auto md:h-16 items-center p-4 md:p-0 sticky top-0 z-10">
      <a href="#overview" className="hover:text-[#22d3ee]">OVERVIEW</a>
      <a href="#authentication" className="hover:text-[#22d3ee]">AUTHENTICATION</a>
      <a href="#endpoints" className="hover:text-[#22d3ee]">ENDPOINTS</a>
      <a href="#tutorial" className="hover:text-[#22d3ee]">TUTORIAL</a>
      <a href="#code-examples" className="hover:text-[#22d3ee]">CODE EXAMPLES</a>
      <a href="#pricing" className="hover:text-[#22d3ee]">PRICING</a>
    </div>
  );
};

export default Navigation;
