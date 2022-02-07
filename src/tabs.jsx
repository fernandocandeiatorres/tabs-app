import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import TabInfo from "./tab";

const url = "https://course-api.com/react-tabs-project";

const TabsButtons = () => {
  const [dataItems, setDataItems] = useState([]);
  //   const [currentItem, setCurrentItem] = useState(null);
  const [value, setValue] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const jobs = await response.json();
      setDataItems(jobs);
      //   setCurrentItem(jobs[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const job = dataItems[value];

  return (
    <div className="flex flex-row h-4/5 pt-5">
      <div className="flex items-end flex-col w-1/5 h-full pr-14">
        {dataItems.map((job, index) => {
          return (
            <button
              onClick={() => setValue(index)}
              key={job.id}
              className={`${
                value === index && "text-teal-400 border-l-2"
              } focus:text-teal-400 outline-0 focus:border-l-2 hover:text-teal-400 hover:transition-colors ease-in hover:border-l-2 text-2xl border-current font-light mb-4 px-5`}
            >
              {job.company}
            </button>
          );
        })}
      </div>
      {job ? <TabInfo key={job.id} job={job} /> : null}
    </div>
  );
};

export default TabsButtons;
