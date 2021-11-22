import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "../styles/App.scss";
import Editor from "./Editor";
import Header from "./Header";
import Footer from "./Footer";
import LandingPage from "./LandingPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/editor" exact element={<Editor />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

// TODO: Build a nice landing page
