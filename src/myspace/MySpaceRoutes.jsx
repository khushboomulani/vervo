import { Routes, Route } from "react-router-dom";
import DashboardRoot from "./DashboardRoot";
import Home from "./Home";
import MyTimecard from "./Timesheet/MyTimecard";
import NewTimecard from "./Timesheet/NewTimecard";

export default function MySpaceRoutes() {
  return (
    <Routes>
      <Route path="/myspace" element={<DashboardRoot />}>
        {/* Landing page */}
        <Route index element={<Home />} />

        {/* Sub modules */}
        <Route path="timecard" element={<MyTimecard />} />
        <Route path="timecard/new" element={<NewTimecard />} />
      </Route>
    </Routes>
  );
}
