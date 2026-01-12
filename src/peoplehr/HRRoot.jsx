import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../myspace/Header";
import Sidebar from "./Sidebar";

export default function HRRoot() {
  return (
    <div className="dashboard-root">
      <Header />
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
