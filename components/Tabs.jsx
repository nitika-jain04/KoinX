import React from "react";

const Tabs = () => {
  return (
    <div className="mt-10">
      <div className="flex gap-9 items-center text-[#3E424A] text-base font-medium leading-[19.36px] w-auto">
        <h3 className="text-[#0141CF] underline-offset-[24px] underline">
          Overview
        </h3>
        <h3>Fundamentals</h3>
        <h3>New Insights</h3>
        <h3>Sentiments</h3>
        <h3>Team</h3>
        <h3>Technicals</h3>
        <h3>Tokenomics</h3>
      </div>

      <hr
        // width="h-1px bg-[#C9CFDD] border-2 border-black"
        style={{ width: "66.67%", height: "2px", borderColor: "#C9CFDD" }}
        className="mt-5"
      />
    </div>
  );
};

export default Tabs;

// #0052FE
