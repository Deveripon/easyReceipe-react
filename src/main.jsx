import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FormContextProvider from "./providers/FormContextProvider.jsx";
import ModalContextProvider from "./providers/ModalContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ModalContextProvider>
            <FormContextProvider>
                <App />
            </FormContextProvider>
        </ModalContextProvider>
    </React.StrictMode>
);
