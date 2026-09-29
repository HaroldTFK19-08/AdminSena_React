import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./features/resources"; // registra los dominios del modelo relacional
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
