import React, { useState, useEffect } from "react";

export default function Header() {
  const [collapsed, setCollapsed] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const toggleSidebar = () => {
    const event = new CustomEvent("toggleSidebar");
    window.dispatchEvent(event);
    setCollapsed((c) => !c);
  };

  return (
    <nav className="navbar">
      <div className="left">
        <div className="brand">Vervo Company</div>
       
      </div>

      <div className="right">
        {/* 🔔 Bell Dropdown */}
        <div className="user-dropdown">
          <input type="checkbox" id="bell-toggle" className="toggle" />
          <label htmlFor="bell-toggle" className="right-label">
            <i className="fa fa-bell" aria-hidden="true"></i>
            <i className="fa fa-angle-down"></i>
          </label>
          <ul className="user-menu">
            <li><a href="#">Notification 1</a></li>
            <li><a href="#">Notification 2</a></li>
            <li><a href="#">Notification 3</a></li>
          </ul>
        </div>

        {/* 💼 Manager Icon */}
      

        {/* 👤 User Dropdown */}
        <div className="user-dropdown">
          <input type="checkbox" id="user-toggle" className="toggle" />
          <label htmlFor="user-toggle" className="right-label">
            <i className="fa fa-user-circle fa-lg" aria-hidden="true"></i>
            <i className="fa fa-angle-down"></i>
          </label>
          <ul className="user-menu">
            <li><a href="#">Profile</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </div>

        {/* 🍔 Sidebar Toggle (on right side) */}
        <button className="toggle-btn" onClick={toggleSidebar}>
          <i className={`fa ${collapsed ? "fa-times" : "fa-bars"}`} aria-hidden="true"></i>
        </button>
      </div>
    </nav>
  );
}
