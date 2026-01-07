import React from "react";

function Topbar() {
  return (
    <div className="topbar">
      <input type="text" placeholder="🔍 Search projects…" />
      <button className="submit-btn">Submit Project</button>
      <button className="sign-out-btn">Sign Out</button>
    </div>
  );
}

export default Topbar;
