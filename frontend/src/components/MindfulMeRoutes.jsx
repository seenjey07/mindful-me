import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Login from "./user-pages/Login";
import Registration from "./user-pages/Registration";
import Dashboard from "./user-pages/Dashboard";
import MoodTracker from "./user-pages/MoodTracker";
import DailyJournal from "./user-pages/DailyJournal";
import NotFound from "./NotFound";

const MindfulMeRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/mood-tracker" element={<MoodTracker />} />
      <Route path="/daily-journal" element={<DailyJournal />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MindfulMeRoutes;
