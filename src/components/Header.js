import React from "react";
import headers from "../data/headers.json"

export default function Header() {
  return (
    <header>
      <p>Navigation bar</p>
      <Nav/>
    </header>
  );
}

export function Nav() {
  return (
    <nav>
      <ul className="headers">
        {
          headers.map((header, i) => (
            <li key={i}>
              <a href={header.url}>{header.text}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}
