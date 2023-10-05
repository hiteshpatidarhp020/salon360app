import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import SideBar from "./components/sidebar";
// import BannerSection from "./components/bannerSection";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SideBar />
    {/* <BannerSection /> */}
    {/*<App />*/}
  </React.StrictMode>
);

reportWebVitals();
