import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import Image from "./tony.jpg";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={Image} alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Tony Bradpit</h2>
        <h4>tonybradpit@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you {"   "}</p>
          <p className="sidebar__statNumber">2543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on posts</p>
          <p className="sidebar__statNumber">2443</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Reccent</p>
        {recentItem("reactJs")}
        {recentItem("programming")}

        {recentItem("softwareenginnering")}

        {recentItem("design")}

        {recentItem("developper")}
      </div>
    </div>
  );
}

export default Sidebar;
