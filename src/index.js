import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import GlobalStyle, { AppContainer } from "./Styles/globalStyles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <AppContainer>
      <App />
    </AppContainer>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
