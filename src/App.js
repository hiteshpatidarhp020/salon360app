import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Button from "./components/Button";
import IcPlus from "./design-system/icons/IcPlus";

const App = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-dark text-white">
        <div className="container d-flex justify-content-between align-items-center ">
          <img src="your-logo.png" />
          <div className="d-flex align-items-center">
            <button className="btn btn-primary me-2">Button 1</button>
            <button className="btn btn-secondary">Button 2</button>
            <img src="user-profile.png" className="me-2" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mt-4">
        <div className="row">
          {/* Left Side */}
          <div className="col-md-8">
            <ul className="list-group">
              <li className="list-group-item">Item 1</li>
              <li className="list-group-item">Item 2</li>
              <li className="list-group-item">Item 3</li>
              <li className="list-group-item">Item 4</li>
              <li className="list-group-item">Item 5</li>
            </ul>
          </div>

          {/* Right Side (responsive ordering) */}
          <div className="col-md-4 order-md-2 order-end">
            <img
              src="/images/Rectangle 7667.png"
              alt="Right Side Image"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
