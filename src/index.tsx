import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import * as React from "react";
import App from "./recipe-ui";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


window.onload = function() {
    const root = createRoot(document.getElementById("root"));
    root.render(
        <StrictMode>
            <App />
        </StrictMode>
    );
}