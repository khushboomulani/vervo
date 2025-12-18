import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  // --- STATE ---
  const [openMenu, setOpenMenu] = useState(null); // currently open parent
  const [manualOpen, setManualOpen] = useState(false); // user clicked parent

  // --- MENU ROUTE CHECKS ---
  const menuRoutes = {
    timesheet: [
      "/dashboard/timecard",
      "/dashboard/newtimecard",
      "/dashboard/teamtimecard",
      "/dashboard/draft",
    ],
    team: ["/dashboard/teammembers"],
    task: [
      "/dashboard/taskdashboard",
      "/dashboard/viewtask",
      "/dashboard/createtask",
      "/dashboard/teamtask",
      "/dashboard/autotaskmonitor",
      "/dashboard/assignreports",
    ],
    taskmanagement: ["/dashboard/taskmanagement"], 
    attendance: [
      "/dashboard/attendencedashboard",
      "/dashboard/clockinpanel",
      "/dashboard/ClockOutPanel",
      "/dashboard/integrationstatus",
      "/dashboard/OvertimeSummary",
      "/dashboard/Regulationreq",
      "/dashboard/approvalinbox",
    ],
    leave: [
      "/dashboard/leavedashboard",
      "/dashboard/applyleave",
      "/dashboard/approveleave",
      "/dashboard/campoff",
      "/dashboard/leavereports",
    ],
    travel: [
      "/dashboard/traveldashboard",
      "/dashboard/createtrip",
      "/dashboard/approvaltrip",
      "/dashboard/bookings",
      "/dashboard/inprogress",
      "/dashboard/closedtrip",
      "/dashboard/expenses",
      "/dashboard/tripreports",
    ],
    business: [
      "/dashboard/berdashboard",
      "/dashboard/createclaim",
      "/dashboard/approvalBER",
      "/dashboard/financeapproval",
      "/dashboard/paymentprocess",
    ],
    // shifts: ["/dashboard/shifts", "/dashboard/teammembers"],
  };

  // --- DETERMINE WHICH MENU IS ACTIVE FROM ROUTE ---
  const getActiveMenu = () => {
    for (const key in menuRoutes) {
      if (menuRoutes[key].some((path) => location.pathname.startsWith(path))) {
        return key;
      }
    }
    return null;
  };

  // --- AUTO OPEN MENU BASED ON ROUTE ---
  useEffect(() => {
    if (!manualOpen) {
      const active = getActiveMenu();
      setOpenMenu(active);
    }
  }, [location.pathname, manualOpen]);

  // --- TOGGLE MENU ON CLICK ---
  const toggleMenu = (menu) => {
    setManualOpen(true); // user clicked parent
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  // --- SIDEBAR OPEN/CLOSE STATE (for mobile toggle maybe) ---
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handler = () => setOpen((o) => !o);
    window.addEventListener("toggleSidebar", handler);
    return () => window.removeEventListener("toggleSidebar", handler);
  }, []);

  // --- FUNCTION TO CHECK ACTIVE CLASS ---
  const isActive = (menu) =>
    manualOpen ? openMenu === menu : getActiveMenu() === menu;

  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <ul className="menu">
        {/* HOME */}
        <li>
          <NavLink to="/dashboard/home" className="nav-link">
            <i className="fa fa-home fa-lg"></i>&nbsp; Home
          </NavLink>
        </li>

        {/* TIME SHEET */}
        <li className={`dropdown ${openMenu === "timesheet" ? "open" : ""} ${isActive("timesheet") ? "active" : ""}`}>
          <div className="menu-label" onClick={() => toggleMenu("timesheet")}>
            <div className="label-content">
              <i className="fa fa-clock-o fa-lg"></i>
              <span>Time Sheet</span>
            </div>
            <i className={`fa fa-angle-down arrow-icon ${openMenu === "timesheet" ? "rotate" : ""}`} />
          </div>
          {openMenu === "timesheet" && (
            <ul className="submenu">
              <li><NavLink to="/dashboard/timecard">My Time Card</NavLink></li>
              <li><NavLink to="/dashboard/newtimecard">New Time Card</NavLink></li>
              <li><NavLink to="/dashboard/teamtimecard">Team Time Card</NavLink></li>
              <li><NavLink to="/dashboard/draft">Draft</NavLink></li>
            </ul>
          )}
        </li>

        {/* TEAM */}
        <li className={`dropdown ${openMenu === "team" ? "open" : ""} ${isActive("team") ? "active" : ""}`}>
          <div className="menu-label" onClick={() => toggleMenu("team")}>
            <div className="label-content">
              <i className="fa fa-users fa-lg"></i>
              <span>Team</span>
            </div>
            <i className={`fa fa-angle-down arrow-icon ${openMenu === "team" ? "rotate" : ""}`} />
          </div>
          {openMenu === "team" && (
            <ul className="submenu">
              <li><NavLink to="/dashboard/teammembers">Team Members</NavLink></li>
            </ul>
          )}
        </li>

        {/* TASKS */}
        <li className={`dropdown ${openMenu === "task" ? "open" : ""} ${isActive("task") ? "active" : ""}`}>
          <div className="menu-label" onClick={() => toggleMenu("task")}>
            <div className="label-content">
              <i className="fa fa-tasks fa-lg"></i>
              <span>Tasks</span>
            </div>
            <i className={`fa fa-angle-down arrow-icon ${openMenu === "task" ? "rotate" : ""}`} />
          </div>
          {openMenu === "task" && (
            <ul className="submenu">
              <li><NavLink to="/dashboard/taskdashboard">Task Dashboard</NavLink></li>
              <li><NavLink to="/dashboard/viewtask">My Task</NavLink></li>
              <li><NavLink to="/dashboard/createtask">Create Task</NavLink></li>
              <li><NavLink to="/dashboard/teamtask">Team Task</NavLink></li>
              <li><NavLink to="/dashboard/autotaskmonitor">Auto Task Monitor</NavLink></li>
              <li><NavLink to="/dashboard/assignreports">Assignment Report</NavLink></li>
            </ul>
          )}
        </li>

        {/* TASK MANAGEMENT */}
        <li className={`dropdown ${openMenu === "taskmanagement" ? "open" : ""} ${isActive("taskmanagement") ? "active" : ""}`}>
          <div className="menu-label" onClick={() => toggleMenu("taskmanagement")}>
            <div className="label-content">
              <i className="fa fa-list-alt fa-lg"></i>
              <span>Tasks Management</span>
            </div>
            <i className={`fa fa-angle-down arrow-icon ${openMenu === "taskmanagement" ? "rotate" : ""}`} />
          </div>
          {openMenu === "taskmanagement" && (
            <ul className="submenu">
              <li><NavLink to="/dashboard/teammembers">Team Members</NavLink></li>
            </ul>
          )}
        </li>

        {/* ATTENDANCE */}
        <li className={`dropdown ${openMenu === "attendance" ? "open" : ""} ${isActive("attendance") ? "active" : ""}`}>
          <div className="menu-label" onClick={() => toggleMenu("attendance")}>
            <div className="label-content">
              <i className="fa fa-user-plus fa-lg"></i>
              <span>Attendance</span>
            </div>
            <i className={`fa fa-angle-down arrow-icon ${openMenu === "attendance" ? "rotate" : ""}`} />
          </div>
          {openMenu === "attendance" && (
            <ul className="submenu">
              <li><NavLink to="/dashboard/attendencedashboard">Attendance Dashboard</NavLink></li>
              <li><NavLink to="/dashboard/clockinpanel">Clock In</NavLink></li>
              <li><NavLink to="/dashboard/ClockOutPanel">Clock Out</NavLink></li>
              <li><NavLink to="/dashboard/integrationstatus">Integration Status</NavLink></li>
              <li><NavLink to="/dashboard/OvertimeSummary">Overtime Summary</NavLink></li>
              <li><NavLink to="/dashboard/Regulationreq">Regularization Request</NavLink></li>
              <li><NavLink to="/dashboard/approvalinbox">Approval Inbox</NavLink></li>
            </ul>
          )}
        </li>

        {/* LEAVE */}
        <li className={`dropdown ${openMenu === "leave" ? "open" : ""} ${isActive("leave") ? "active" : ""}`}>
          <div className="menu-label" onClick={() => toggleMenu("leave")}>
            <div className="label-content">
              <i className="fa fa-calendar fa-lg"></i>
              <span>Leave Management</span>
            </div>
            <i className={`fa fa-angle-down arrow-icon ${openMenu === "leave" ? "rotate" : ""}`} />
          </div>
          {openMenu === "leave" && (
            <ul className="submenu">
              <li><NavLink to="/dashboard/leavedashboard">Leave Dashboard</NavLink></li>
              <li><NavLink to="/dashboard/applyleave">Apply Leave</NavLink></li>
              <li><NavLink to="/dashboard/approveleave">Approve Leave</NavLink></li>
              <li><NavLink to="/dashboard/campoff">CompOff</NavLink></li>
              <li><NavLink to="/dashboard/leavereports">Reports</NavLink></li>
            </ul>
          )}
        </li>

        {/* TRAVEL */}
        <li className={`dropdown ${openMenu === "travel" ? "open" : ""} ${isActive("travel") ? "active" : ""}`}>
          <div className="menu-label" onClick={() => toggleMenu("travel")}>
            <div className="label-content">
              <i className="fa fa-plane fa-lg"></i>
              <span>Travel Management</span>
            </div>
            <i className={`fa fa-angle-down arrow-icon ${openMenu === "travel" ? "rotate" : ""}`} />
          </div>
          {openMenu === "travel" && (
            <ul className="submenu">
              <li><NavLink to="/dashboard/traveldashboard">Travel Dashboard</NavLink></li>
              <li><NavLink to="/dashboard/createtrip">Create Trip</NavLink></li>
              <li><NavLink to="/dashboard/approvaltrip">Approval Trip</NavLink></li>
              <li><NavLink to="/dashboard/bookings">Booking</NavLink></li>
              <li><NavLink to="/dashboard/inprogress">In-Progress</NavLink></li>
              <li><NavLink to="/dashboard/closedtrip">Closed Trip</NavLink></li>
              <li><NavLink to="/dashboard/expenses">Expenses</NavLink></li>
              <li><NavLink to="/dashboard/tripreports">Trip Reports</NavLink></li>
            </ul>
          )}
        </li>

        {/* BUSINESS */}
        <li className={`dropdown ${openMenu === "business" ? "open" : ""} ${isActive("business") ? "active" : ""}`}>
          <div className="menu-label" onClick={() => toggleMenu("business")}>
            <div className="label-content">
              <i className="fa fa-money fa-lg"></i>
              <span>Business Expense Reimbursement</span>
            </div>
            <i className={`fa fa-angle-down arrow-icon ${openMenu === "business" ? "rotate" : ""}`} />
          </div>
          {openMenu === "business" && (
            <ul className="submenu">
              <li><NavLink to="/dashboard/berdashboard">BER Dashboard</NavLink></li>
              <li><NavLink to="/dashboard/createclaim">Create Claim</NavLink></li>
              <li><NavLink to="/dashboard/approvalBER">Approval</NavLink></li>
              <li><NavLink to="/dashboard/financeapproval">Finance Approval</NavLink></li>
              <li><NavLink to="/dashboard/paymentprocess">Payment Processing</NavLink></li>
            </ul>
          )}
        </li>

        {/* SHIFTS */}
        {/* <li className={`dropdown ${openMenu === "shifts" ? "open" : ""} ${isActive("shifts") ? "active" : ""}`}>
          <div className="menu-label" onClick={() => toggleMenu("shifts")}>
            <div className="label-content">
              <i className="fa fa-shirtsinbulk fa-lg"></i>
              <span>Shifts</span>
            </div>
            <i className={`fa fa-angle-down arrow-icon ${openMenu === "shifts" ? "rotate" : ""}`} />
          </div>
          {openMenu === "shifts" && (
            <ul className="submenu">
              <li><NavLink to="/dashboard/teammembers">Team Members</NavLink></li>
            </ul>
          )}
        </li> */}
      </ul>
    </aside>
  );
}
