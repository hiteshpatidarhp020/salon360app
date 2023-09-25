import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Container from "./components/container";
import Button from "./components/Button";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Container padding="0  50px 50px 50px">
      {/*<App />*/}

      <Button btnIcon="/img/plus.svg" size="large" label="New Sale" />
    </Container>
  </React.StrictMode>
);

reportWebVitals();
