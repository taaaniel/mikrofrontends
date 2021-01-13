import React from "react";

export default function Root(props) {
  return (
    <div className="container">
      <div className="row">
        <section>
      <div className="homepage-hero" style={{ margin: "5rem 0" }}>
        <img
          style={{ width: "100%" }}
          src="https://www.techuz.com/blog/wp-content/uploads/2018/02/micro-frontend-approach.jpg"
        />
      </div>
      <h1 className="cover-heading">Welcome to the micro-frontend world!</h1>
      <p className="lead">
        This is an example of how powerful micro-frontends can be!
        <br /> You may integrate all of your frontend apps, regardless of what
        frameworks they're built with.
      </p>
      <p className="lead">
        <a href="#" className="btn btn-lg btn-secondary">
          Learn more
        </a>
      </p>
    </section>
      </div>
    </div>
  );
}