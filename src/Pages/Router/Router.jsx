import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage";
import Sidebar from "../../Components/ProfileComponent/Sidebar/Sidebar";
import Profile from "../Profile/Profile";

const Router = (props) => {
  return (
    <div>
      <div className="flex">
        <div className="w-[20%] border-l-slate-500">
          <Sidebar />
        </div>
        <div className="w-full">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/username" element={<Profile />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Router;
