import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Container from "./components/container";
import Button from "./components/Button";
import { Icon } from "./components/icon/icon";
import IcServices from "./design-system/icons/IcServices";
import IcPlus from "./design-system/icons/IcPlus";
import styel from "./components/Button/button.module.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    <Container padding="0  50px 50px 50px"></Container>
  </React.StrictMode>
);

reportWebVitals();
