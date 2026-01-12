import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import PinLogin from "./Pinlogin";
import DashboardRoot from "./myspace/Dashboard-root";
import Auth from "./Login";
import MyTimecard from "./myspace/Timesheet/MyTimecard";
import Home from "./myspace/Home";
import NewTimecard from "./myspace/Timesheet/NewTimecard";
import TeamTimecard from "./myspace/TeamTimecard";
import DashboardIcons from "./DashboardIcons";
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
import HRRoot from "./peoplehr/HRRoot";
import LetterWorkflow from "./peoplehr/HR-LETTER/letter-workflow";
import ApprovalWorkflow from "./peoplehr/HR-LETTER/Approval-workflow";
import LetterIssuance from "./peoplehr/HR-LETTER/Letter-issuance";
import LetterRepository from "./peoplehr/HR-LETTER/Repository-history";
import CategoryView from "./peoplehr/Knowledge/Category-view";
import DocumentUpload from "./peoplehr/Knowledge/Document-upload";
import DocumentDetail from "./peoplehr/Knowledge/Document-details";
import DocumentDashboard from "./peoplehr/Knowledge/Documents-dashboard";
import HRLettersDashboard from "./peoplehr/HR-LETTER/Hrletter-dashboard";
import OnboardingDashboard from "./peoplehr/Onboarding/onboarding-login";
import EmployeeCreationForm from "./peoplehr/Onboarding/Employee-creation";
import AadhaarAuthentication from "./peoplehr/Onboarding/adhar-verification";
import DocumentUploadWizard from "./peoplehr/Onboarding/Document-correction";
import HRReviewDashboard from "./peoplehr/Onboarding/hr-review";
import ESignContract from "./peoplehr/Onboarding/Contract-esign";
import MISAccountCreation from "./peoplehr/Onboarding/Mis-account";
import ITSetupDashboard from "./peoplehr/Onboarding/IT-setupteam";
import PreBoardingSummary from "./peoplehr/Onboarding/final-summary";
import PerformanceCycleSetup from "./peoplehr/Performance/Performance-Cycle";
import GoalSetting from "./peoplehr/Performance/Goal-setting";
import GoalReview from "./peoplehr/Performance/Goal-review";
import SelfAssessment from "./peoplehr/Performance/SelfAssessment";
import ManagerAssessment from "./peoplehr/Performance/ManagerAssessment";
import MultiRaterFeedback from "./peoplehr/Performance/multirated-feedback";
import CalibrationModeration from "./peoplehr/Performance/Calibration-moderation";
import FinalizationLetters from "./peoplehr/Performance/Finalization-letters";
import ReportsAnalytics from "./peoplehr/Performance/Reports-analytics";
import AdminSettings from "./peoplehr/Performance/admin-settings";
import AppraisalCyclesDashboard from "./peoplehr/Performance/Appraisal-Cycles";
import JonRequest from "./peoplehr/Recruitment/Job-request";
import JobPostingManagement from "./peoplehr/Recruitment/Job-posting";
import CandidateApplicationInbox from "./peoplehr/Recruitment/candidate-inbox";
import WrittenTestManagement from "./peoplehr/Recruitment/written-test";
import WrittenTestSubmission from "./peoplehr/Recruitment/Test-submittion";
import WrittenTestReviewScoring from "./peoplehr/Recruitment/Test-review";
import InterviewSchedulingRounds from "./peoplehr/Recruitment/Interview-schedule";
import InterviewFeedbackProgress from "./peoplehr/Recruitment/Interview-feedback";
import OfferApprovalRelease from "./peoplehr/Recruitment/Offer-approval";
import CandidateProfileAudit from "./peoplehr/Recruitment/Candidate-profile";
import TrainingCreation from "./peoplehr/Trainings/Training-creation";
import TraineeAssignment from "./peoplehr/Trainings/Training-assignment";
import TrainingDetail from "./peoplehr/Trainings/Training-details";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardIcons />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/pinlogin" element={<PinLogin correctPin="1234" />} />

        {/* Dashboard layout and nested pages */}
        <Route path="/hr" element={<HRRoot />}>
         <Route index element={<Home />} />
         <Route path="letter-workflow" element={<LetterWorkflow />} />
         <Route path="approval-workflow" element={<ApprovalWorkflow />} />
         <Route path="letter-issuance" element={<LetterIssuance />} />
         <Route path="repository-history" element={<LetterRepository />} />
         <Route path="category-view" element={<CategoryView />} />
         <Route path="document-upload" element={<DocumentUpload />} />
         <Route path="document-preview" element={<DocumentDetail />} />
         <Route path="document-dashboard" element={<DocumentDashboard />} />
         <Route path="hrletter-dashboard" element={<HRLettersDashboard />} />
         <Route path="onboarding-login" element={<OnboardingDashboard />} />
         <Route path="employee-creation" element={<EmployeeCreationForm />} />
         <Route path="adhar-verification" element={<AadhaarAuthentication />} />
         <Route path="documeny-correction" element={<DocumentUploadWizard />} />
         <Route path="hrreview" element={<HRReviewDashboard />} />
         <Route path="contract-esign" element={<ESignContract />} />
         <Route path="mis-account" element={<MISAccountCreation />} />
         <Route path="IT-setupteam" element={<ITSetupDashboard />} />
         <Route path="final-summary" element={<PreBoardingSummary />} />
         <Route path="cycle-setup" element={<PerformanceCycleSetup />} />
         <Route path="goal-settings" element={<GoalSetting />} />
         <Route path="goal-review" element={<GoalReview />} />
         <Route path="Self-assessment" element={<SelfAssessment />} />
         <Route path="managerassessment" element={<ManagerAssessment />} />
         <Route path="multirated-feedback" element={<MultiRaterFeedback />} />
         <Route path="calibration-moderation" element={<CalibrationModeration />} />
         <Route path="finalization-letters" element={<FinalizationLetters />} />
         <Route path="reports-analytics" element={<ReportsAnalytics />} />
         <Route path="admin-settings" element={<AdminSettings />} />
         <Route path="appraisal-cycle" element={<AppraisalCyclesDashboard />} />
         <Route path="job-request" element={<JonRequest />} />
         <Route path="job-posting" element={<JobPostingManagement />} />
         <Route path="candidate-inbox" element={<CandidateApplicationInbox />} />
         <Route path="written-test" element={<WrittenTestManagement />} />
         <Route path="test-submission" element={<WrittenTestSubmission />} />
         <Route path="test-review" element={<WrittenTestReviewScoring />} />
         <Route path="interview-schedule" element={<InterviewSchedulingRounds />} /> 
         <Route path="interview-feedback" element={<InterviewFeedbackProgress />} />
         <Route path="offer-approval" element={<OfferApprovalRelease />} />
         <Route path="report-analytics" element={<ReportsAnalytics />} />
         <Route path="candidate-Profile" element={<CandidateProfileAudit />} />
         <Route path="training-creation" element={<TrainingCreation />} />
         <Route path="trainee-assignment" element={<TraineeAssignment />} />
         <Route path="training-details" element={<TrainingDetail />} />
         <Route path="training-dashboard" element={<Traveldashboard />} />
        </Route>
         {/* MySpace */}
       
  <Route path="/dashboard" element={<DashboardRoot />}>
        {/* <Route path="/dashboard" element={<DashboardRoot />}> */}
          <Route index element={<Home />} />
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
