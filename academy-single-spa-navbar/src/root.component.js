import React from "react";

export default function Root(props) {
  return (
    <div className="container">
      <div className="row">
        <header className="masthead mb-auto">
      <div className="inner">
        <a className="blog-logo" href="/">
          <img
            style={{ maxWidth: "40px" }}
            src="https://single-spa.js.org/img/logo-white-bgblue.svg"
            alt="LogRocket Blog"
          />{" "}
          React + single-spa
        </a>
        <nav className="nav nav-masthead justify-content-center">
          <a
            className={`nav-link ${location.pathname === "/" && "active"}`}
            href="/"
          >
            Home
          </a>
          <a
            className={`nav-link ${location.pathname === "/about" && "active"}`}
            href="/about"
          >
            About Us
          </a>
        </nav>
      </div>
    </header>
      </div>
    </div>
  );
}