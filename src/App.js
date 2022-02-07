import React, { useState, useEffect } from "react";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  return (
    <div className="h-screen bg-slate-200">
      <div className="h-1/5 flex justify-end items-center flex-col">
        <div className="flex flex-col items-center middle">
          <h2 className="text-4xl h-full">Experience</h2>
        </div>
      </div>

      <div className="flex flex-row h-4/5 pt-5">
        <div className="flex items-end flex-col w-1/5 h-full pr-14">
          <button className="focus:text-teal-400 focus:border-l-2 hover:text-teal-400 hover:transition-colors ease-in hover:border-l-2 text-2xl border-current font-light mb-4 px-5">
            TOMMY
          </button>
          <button className="focus:text-teal-400 focus:border-l-2 hover:text-teal-400 hover:transition-colors ease-in hover:border-l-2 text-2xl border-current font-light mb-4 px-5">
            TOMMY
          </button>
          <button className="focus:text-teal-400 focus:border-l-2 hover:text-teal-400 hover:transition-colors ease-in hover:border-l-2 text-2xl border-current font-light mb-4 px-5">
            TOMMY
          </button>
        </div>
        <div className="flex w-4/5 pl-8 flex-col">
          <h2 className="text-3xl font-light">JOB TITLE</h2>
          <h4 className="bg-slate-300 mr-auto text-center text-base mt-2 px-2 rounded">
            {" "}
            JOB TAG
          </h4>
          <p className="text-sm mt-3 text-slate-600">DATA</p>

          <div className="text-left h-3/5  w-11/12 pt-10">
            <h3>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
              quia culpa, aperiam quam ipsam libero soluta aliquid ratione
              aliquam eveniet, fuga quibusdam commodi fugiat deserunt ab
              mollitia vero ex quo.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
