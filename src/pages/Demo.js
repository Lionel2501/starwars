import React from "react";
import { Link } from "react-router-dom";

function Demo() {
  return (
    <div>
      <h1>Page Demo</h1>
      <Link to="/demo/app_test">Aller à App Test</Link>
    </div>
  );
}

export default Demo;
