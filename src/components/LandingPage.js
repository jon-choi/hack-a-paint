import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      Welcome to the landing page for pixe-paint
      <button className="button">
        <Link to="/editor">Start Drawing</Link>
      </button>
    </div>
  );
};

export default LandingPage;
