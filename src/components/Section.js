import React from "react";
import browsers from "../data/browsers.json"
import Article from "./Article";

export default function Section() {
  return (
    <section>
      <h1>Popular web browsers</h1>
      {
        browsers.map((browser) => (
          <Article name={browser.name} description={browser.description} img={browser.img} img_alt={browser.img_alt} />
        ))
      }
    </section>
  );
}
