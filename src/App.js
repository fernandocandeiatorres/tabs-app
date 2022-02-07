import React, { useState, useEffect } from "react";

import TabsButtons from "./tabs";

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

      <TabsButtons />
    </div>
  );
}

export default App;
