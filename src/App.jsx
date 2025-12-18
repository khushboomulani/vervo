import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import PinLogin from "./myspace/Pinlogin";
import DashboardRoot from "./myspace/Dashboard-root";
import Auth from "./myspace/Login";
import MyTimecard from "./myspace/Timesheet/MyTimecard";
import Home from "./myspace/Timesheet/Home";
import NewTimecard from "./myspace/Timesheet/NewTimecard";
import TeamTimecard from "./myspace/TeamTimecard";
import DashboardIcons from "./myspace/DashboardIcons";
import Draft from "./myspace/Timesheet/Draft";
import TeamMembers from "./myspace/Team/TeamMembers";
import Addmembers from "./myspace/Team/Addmembers";
import Viewmember from "./myspace/Team/Viewmember";
import Viewtask from "./myspace/Tasks/Viewtask";
import Createtask from "./myspace/Tasks/Createtask";
import Teamtask from "./myspace/Tasks/Teamtask";
import Addattendence from "./myspace/Attendance/Addattendence";
import Createtrip from "./myspace/TravelManagement/Createtrip";
import Approvaltrip from "./myspace/TravelManagement/Approvaltrip";
import Bookings from "./myspace/TravelManagement/Bookings";
import Inprogress from "./myspace/TravelManagement/Inprogresstrip";
import Closetrip from "./myspace/TravelManagement/Closedtrip";
import Expenses from "./myspace/TravelManagement/Expenses";
import TripReports from "./myspace/TravelManagement/TripReports";
import Traveldashboard from "./myspace/TravelManagement/TravelDashboard";
import Applyleave from "./myspace/LeaveManagement/Applyleave";
import Approvalleave from "./myspace/LeaveManagement/Approvalleave";
import Campoff from "./myspace/LeaveManagement/Campoff";
import LeaveReports from "./myspace/LeaveManagement/LeaveReports";
import Taskdashboard from "./myspace/Tasks/Taskdashboard";
import AutoTasksMonitor from "./myspace/Tasks/AutoTasksMonitor";
import AssignmentInboxReports from "./myspace/Tasks/AssignmentInboxReports";
import ExpenseClaimWizard from "./myspace/BusinessExpenseReimbursement/ExpenseClaimWizard";
import ManagerApprovalInbox from "./myspace/BusinessExpenseReimbursement/ApprovalBER";
import PaymentProcessingConsole from "./myspace/BusinessExpenseReimbursement/PaymentProcessingConsole";
import BERDashboard from "./myspace/BusinessExpenseReimbursement/BERDashboard";
import FinanceApprovalPanel from "./myspace/BusinessExpenseReimbursement/FinanceApprovalPanel";
import AttendanceDashboard from "./myspace/Attendance/attendancedashboard";
import ClockInPanel from "./myspace/Attendance/ClockInpanel";
import IntegrationStatus from "./myspace/Attendance/integrationstatus";
import ClockOutPanel from "./myspace/Attendance/ClockOut";
import OvertimeSummary from "./myspace/Attendance/Overtimesummary";
import RegularizationRequest from "./myspace/Attendance/RegularizationRequest";
import ApprovalInbox from "./myspace/Attendance/ApprovalInbox";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardIcons />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/pinlogin" element={<PinLogin correctPin="1234" />} />

        {/* Dashboard layout and nested pages */}
        <Route path="/dashboard" element={<DashboardRoot />}>
          <Route path="home" element={<Home />} />
          <Route path="timecard" element={<MyTimecard />} />
          <Route path="newtimecard" element={<NewTimecard />} />
          <Route path="teamtimecard" element={<TeamTimecard />} />
          <Route path="draft" element={<Draft />} />
          <Route path="teammembers" element={<TeamMembers />} />
          <Route path="addmembers" element={<Addmembers />} />
          <Route path="viewprofile" element={<Viewmember />} />
          <Route path="viewtask" element={<Viewtask />} />
          <Route path="createtask" element={<Createtask />} />
          <Route path="teamtask" element={<Teamtask />} />
          <Route path="addattendence" element={<Addattendence />} />
          <Route path="createtrip" element={<Createtrip />} />
          <Route path="approvaltrip" element={<Approvaltrip />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="inprogress" element={<Inprogress />} />
          <Route path="closedtrip" element={<Closetrip />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="tripreports" element={<TripReports />} />
          <Route path="traveldashboard" element={<Traveldashboard />} />
          <Route path="applyleave" element={<Applyleave />} />
          <Route path="approveleave" element={<Approvalleave />} />
          <Route path="campoff" element={<Campoff />} />
          <Route path="leavereports" element={<LeaveReports />} />
          <Route path="taskdashboard" element={<Taskdashboard />} />
          <Route path="autotaskmonitor" element={<AutoTasksMonitor />} />
          <Route path="assignreports" element={<AssignmentInboxReports />} />
          <Route path="createclaim" element={<ExpenseClaimWizard />} />
          <Route path="approvalBER" element={<ManagerApprovalInbox />} />
          <Route path="paymentprocess" element={<PaymentProcessingConsole />} />
          <Route path="berdashboard" element={<BERDashboard />} />
          <Route path="financeapproval" element={<FinanceApprovalPanel />} />
          <Route path="attendencedashboard" element={<AttendanceDashboard />} />
          <Route path="clockinpanel" element={<ClockInPanel />} />
          <Route path="integrationstatus" element={<IntegrationStatus />} />
          <Route path="ClockOutPanel" element={<ClockOutPanel />} />
          <Route path="OvertimeSummary" element={<OvertimeSummary />} />
          <Route path="Regulationreq" element={<RegularizationRequest />} />
          <Route path="approvalinbox" element={<ApprovalInbox />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
