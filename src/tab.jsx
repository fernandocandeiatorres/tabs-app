import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const TabInfo = ({ job }) => {
  const { company, dates, duties, order, title } = job;

  return (
    <div className="flex w-4/5 pl-8 flex-col">
      <h2 className="text-3xl font-light">{title}</h2>
      <h4 className="bg-slate-300 mr-auto text-center text-base mt-2 px-2 rounded">
        {" "}
        {company}
      </h4>
      <p className="text-sm mt-3 text-slate-600">{dates}</p>

      <div className="text-left h-3/5  w-11/12 pt-10">
        {duties.map((duty, index) => {
          return (
            <h3 key={index} className="flex flex-row items-center py-2 ">
              <FaAngleDoubleRight className="mr-5 text-lg text-teal-400" />{" "}
              {duty}
            </h3>
          );
        })}
      </div>
    </div>
  );
};

export default TabInfo;
