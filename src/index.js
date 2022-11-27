import React, {StrictMode} from "react";
import {createRoot} from "react-dom/client";

import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import './style/style.css';

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Header/>
    <Section/>
    <Footer/>
  </StrictMode>
);
