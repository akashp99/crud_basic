import React from "react";
import  ReactDOM  from "react-dom/client";
import './index.css'
import { render } from "@testing-library/react";
import App from "./app";

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <>
        <App/>
    </>
)