import { useState } from "react";
import { Outlet } from "react-router-dom";

import "./App.css";
import Navbar from "./components/navbar_/Navbar";
import SidBarUserMain from "./components/Sibars/SidBarUser_Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        <div className="flex ">
          <div className="fixed right-0 bottom-0 top-14 w-[300px]   h-screen">
            <SidBarUserMain />
          </div>
         <div className="flex flex-col w-full">
         <Navbar />
          <main className="h-[calc(100vh-4.2rem)] overflow-y-scroll flex-grow rounded-2xl rounded-tl-none bg-white w-[calc(100vw-300px)] ">
     
            <Outlet />
          </main>
         </div>
        </div>
      </div>
    </>
  );
}

export default App;
