import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  // --- STATE ---
  const [openMenu, setOpenMenu] = useState(null); // currently open parent
  const [manualOpen, setManualOpen] = useState(false); // user clicked parent
  const [open, setOpen] = useState(false); // mobile toggle

  // --- MENU ROUTE MAP ---
  const menuRoutes = {
    hrletter: [
      "/hr/hrletter-dashboard",
      "/hr/letter-workflow",
      "/hr/approval-workflow",
      "/hr/letter-issuance",
      "/hr/repository-history",
    ],
    knowledge: [
      "/hr/document-dashboard",
      "/hr/category-view",
      "/hr/document-upload",
      "/hr/document-preview",
    ],
    onboarding: [
      "/hr/onboarding-login",
      "/hr/employee-creation",
      "/hr/adhar-verification",
      "/hr/documeny-correction",
      "/hr/hrreview",
      "/hr/contract-esign",
      "/hr/mis-account",
      "/hr/IT-setupteam",
      "/hr/final-summary",
    ],
    performance: [
      "/hr/appraisal-cycle",
      "/hr/cycle-setup",
      "/hr/goal-settings",
      "/hr/goal-review",
      "/hr/Self-assessment",
      "/hr/managerassessment",
      "/hr/multirated-feedback",
      "/hr/calibration-moderation",
      "/hr/finalization-letters",
      "/hr/reports-analytics",
      "/hr/admin-settings",
    ],
    recruitment: [
      "/hr/job-request",
      "/hr/job-posting",
      "/hr/candidate-inbox",
      "/hr/written-test",
      "/hr/test-submission",
      "/hr/test-review",
      "/hr/interview-schedule",
      "/hr/interview-feedback",
      "/hr/offer-approval",
      "/hr/report-analytics",
      "/hr/candidate-profile",
    ],
    training: [
      "/hr/training-dashboard",
      "/hr/training-creation",
      "/hr/trainee-assignment",
      "/hr/training-details",
    ],
  };

  // --- GET ACTIVE PARENT MENU ---
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
    if (!manualOpen) setOpenMenu(getActiveMenu());
  }, [location.pathname, manualOpen]);

  // --- RESET MANUAL OPEN ON NAVIGATION ---
  useEffect(() => setManualOpen(false), [location.pathname]);

  // --- TOGGLE MENU ---
  const toggleMenu = (menu) => {
    setManualOpen(true);
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  // --- MOBILE SIDEBAR TOGGLE ---
  useEffect(() => {
    const handler = () => setOpen((o) => !o);
    window.addEventListener("toggleSidebar", handler);
    return () => window.removeEventListener("toggleSidebar", handler);
  }, []);

  // --- CHECK ACTIVE CLASS ---
  const isActive = (menu) =>
    manualOpen ? openMenu === menu : getActiveMenu() === menu;

  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <ul className="menu">

        {/* HOME */}
        <li>
          <NavLink to="/hr" className="nav-link">
            <i className="fa fa-home fa-lg"></i>&nbsp; Home
          </NavLink>
        </li>

        {/* HR LETTER */}
        <li className={`dropdown ${isActive("hrletter") ? "active open" : ""}`}>
          <div className="menu-label" onClick={() => toggleMenu("hrletter")}>
            <div className="label-content">
              <i className="fa fa-file-text fa-lg"></i>
              <span>HR Letters</span>
            </div>
            <i className={`fa fa-angle-down arrow-icon ${openMenu === "hrletter" ? "rotate" : ""}`} />
          </div>
          {openMenu === "hrletter" && (
            <ul className="submenu">
              <li><NavLink to="/hr/hrletter-dashboard">Hr Letter Dashboard</NavLink></li>
              <li><NavLink to="/hr/letter-workflow">Letter Workflow</NavLink></li>
              <li><NavLink to="/hr/approval-workflow">Approval Workflow</NavLink></li>
              <li><NavLink to="/hr/letter-issuance">Letter Issuance</NavLink></li>
              <li><NavLink to="/hr/repository-history">Repository & History</NavLink></li>
            </ul>
          )}
        </li>

        {/* KNOWLEDGE */}
        <li className={`dropdown ${isActive("knowledge") ? "active open" : ""}`}>
          <div className="menu-label" onClick={() => toggleMenu("knowledge")}>
            <div className="label-content">
              <i className="fa fa-book fa-lg"></i>
              <span>Knowledge Base</span>
            </div>
            <i className={`fa fa-angle-down arrow-icon ${openMenu === "knowledge" ? "rotate" : ""}`} />
          </div>
          {openMenu === "knowledge" && (
            <ul className="submenu">
              <li><NavLink to="/hr/document-dashboard">Dashboard</NavLink></li>
              <li><NavLink to="/hr/category-view">Category View</NavLink></li>
              <li><NavLink to="/hr/document-upload">Document Upload</NavLink></li>
              <li><NavLink to="/hr/document-preview">Document Preview</NavLink></li>
            </ul>
          )}
        </li>

        {/* ONBOARDING */}
        <li className={`dropdown ${isActive("onboarding") ? "active open" : ""}`}>
          <div className="menu-label" onClick={() => toggleMenu("onboarding")}>
            <div className="label-content">
              <i className="fa fa-user-plus fa-lg"></i>
              <span>Onboarding</span>
            </div>
            <i className={`fa fa-angle-down arrow-icon ${openMenu === "onboarding" ? "rotate" : ""}`} />
          </div>
          {openMenu === "onboarding" && (
            <ul className="submenu">
              <li><NavLink to="/hr/onboarding-login">Onboarding Dashboard</NavLink></li>
              <li><NavLink to="/hr/employee-creation">Employee Creation</NavLink></li>
              <li><NavLink to="/hr/adhar-verification">Aadhar Authentication</NavLink></li>
              <li><NavLink to="/hr/documeny-correction">Document Correction</NavLink></li>
              <li><NavLink to="/hr/hrreview">HR Review Dashboard</NavLink></li>
              <li><NavLink to="/hr/contract-esign">Digital Contract Signing</NavLink></li>
              <li><NavLink to="/hr/mis-account">MIS Account Creation</NavLink></li>
              <li><NavLink to="/hr/IT-setupteam">IT Setup Dashboard</NavLink></li>
              <li><NavLink to="/hr/final-summary">Final Pre-Boarding Summary</NavLink></li>
            </ul>
          )}
        </li>

        {/* PERFORMANCE */}
        <li className={`dropdown ${isActive("performance") ? "active open" : ""}`}>
          <div className="menu-label" onClick={() => toggleMenu("performance")}>
            <div className="label-content">
              <i className="fa fa-line-chart fa-lg"></i>
              <span>Performance</span>
            </div>
            <i className={`fa fa-angle-down arrow-icon ${openMenu === "performance" ? "rotate" : ""}`} />
          </div>
          {openMenu === "performance" && (
            <ul className="submenu">
              <li><NavLink to="/hr/appraisal-cycle">Appraisal Cycles Dashboard</NavLink></li>
              <li><NavLink to="/hr/cycle-setup">Cycle Setup</NavLink></li>
              <li><NavLink to="/hr/goal-settings">Goal Settings</NavLink></li>
              <li><NavLink to="/hr/goal-review">Goal Review</NavLink></li>
              <li><NavLink to="/hr/Self-assessment">Self Assessment</NavLink></li>
              <li><NavLink to="/hr/managerassessment">Manager Assessment</NavLink></li>
              <li><NavLink to="/hr/multirated-feedback">Multi-Rater Feedback</NavLink></li>
              <li><NavLink to="/hr/calibration-moderation">Calibration & Moderation</NavLink></li>
              <li><NavLink to="/hr/finalization-letters">Finalization & Letters</NavLink></li>
              <li><NavLink to="/hr/reports-analytics">Reports & Analytics</NavLink></li>
              <li><NavLink to="/hr/admin-settings">Admin Settings</NavLink></li>
            </ul>
          )}
        </li>

        {/* RECRUITMENT */}
        <li className={`dropdown ${isActive("recruitment") ? "active open" : ""}`}>
          <div className="menu-label" onClick={() => toggleMenu("recruitment")}>
            <div className="label-content">
              <i className="fa fa-briefcase fa-lg"></i>
              <span>Recruitment</span>
            </div>
            <i className={`fa fa-angle-down arrow-icon ${openMenu === "recruitment" ? "rotate" : ""}`} />
          </div>
          {openMenu === "recruitment" && (
            <ul className="submenu">
              <li><NavLink to="/hr/job-request">Job Request</NavLink></li>
              <li><NavLink to="/hr/job-posting">Job Posting Management</NavLink></li>
              <li><NavLink to="/hr/candidate-inbox">Candidate Application Inbox</NavLink></li>
              <li><NavLink to="/hr/written-test">Written Test Management</NavLink></li>
              <li><NavLink to="/hr/test-submission">Written Test Submission</NavLink></li>
              <li><NavLink to="/hr/test-review">Written Test Review & Scoring</NavLink></li>
              <li><NavLink to="/hr/interview-schedule">Interview Scheduling & Rounds</NavLink></li>
              <li><NavLink to="/hr/interview-feedback">Interview Feedback & Progress</NavLink></li>
              <li><NavLink to="/hr/offer-approval">Offer Approval & Release</NavLink></li>
              <li><NavLink to="/hr/report-analytics">Reports & Analytics</NavLink></li>
              <li><NavLink to="/hr/candidate-profile">Candidate Profile / Audit</NavLink></li>
            </ul>
          )}
        </li>

        {/* TRAINING */}
        <li className={`dropdown ${isActive("training") ? "active open" : ""}`}>
          <div className="menu-label" onClick={() => toggleMenu("training")}>
            <div className="label-content">
              <i className="fa fa-graduation-cap fa-lg"></i>
              <span>Training</span>
            </div>
            <i className={`fa fa-angle-down arrow-icon ${openMenu === "training" ? "rotate" : ""}`} />
          </div>
          {openMenu === "training" && (
            <ul className="submenu">
              <li><NavLink to="/hr/training-dashboard">Training Dashboard</NavLink></li>
              <li><NavLink to="/hr/training-creation">Training Creation</NavLink></li>
              <li><NavLink to="/hr/trainee-assignment">Trainee Assignment</NavLink></li>
              <li><NavLink to="/hr/training-details">Training Detail</NavLink></li>
            </ul>
          )}
        </li>

      </ul>
    </aside>
  );
}
