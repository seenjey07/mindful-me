import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Login from "./user-pages/Login";
import Registration from "./user-pages/Registration";
import Dashboard from "./user-pages/Dashboard";
import MoodTracker from "./user-pages/MoodTracker";
import DailyJournal from "./user-pages/DailyJournal";

const MindfulMeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/mood-tsracker" element={<MoodTracker />} />
      <Route path="/daily-journal" element={<DailyJournal />} />
    </Routes>
  );
};

export default MindfulMeRoutes;
