import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/App.scss";
import Editor from "./Editor";
import LandingPage from "./LandingPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/editor" exact element={<Editor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
