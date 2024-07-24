import { BrowserRouter as Router } from "react-router-dom";
import MindfulMeRoutes from "./components/MindfulMeRoutes";

function App() {
  return (
    <>
      <Router>
        <MindfulMeRoutes />
      </Router>
    </>
  );
}

export default App;
