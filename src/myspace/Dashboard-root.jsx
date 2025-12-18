import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Timesheet/Home";
import MyTimecard from "./Timesheet/MyTimecard";
import { Outlet } from "react-router-dom";
import NewTimecard from "./Timesheet/NewTimecard";

export default function DashboardRoot() {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "timecard":
        return <MyTimecard />;
        case "newtimecard":
          return <NewTimecard />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="dashboard-root">
    <Header />
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1" style={{ overflow: "scroll" }}>
        <Outlet /> {/* Child route (Home or Timecard) renders here */}
      </div>
    </div>
  </div>
  );
}
