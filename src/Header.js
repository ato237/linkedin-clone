import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccount from "@material-ui/icons/SupervisorAccount";
import NotificationsIcon from "@material-ui/icons/Notifications";
import WorkIcon from "@material-ui/icons/Work";
import MessageIcon from "@material-ui/icons/Message";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"
          alt="logo.linkedin"
        />

        <div className="header__search">
          {/*Search icon*/}
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={WorkIcon} title="Jobs" />

        <HeaderOption Icon={MessageIcon} title="Messaging" />

        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption title ="you" avatar="https://scontent-mad1-1.xx.fbcdn.net/v/t1.6435-9/83503810_1844210712377405_5153236228576903168_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeG_gILGeHLGZ2KyuY8Cln9OU9KnOnwT0ZtT0qc6fBPRmzovVvx3XPk7_qc2OjPFhlveBssFwT2ZKA4drvQSXm8B&_nc_ohc=dzUUWPXYQCoAX98RpWZ&_nc_ht=scontent-mad1-1.xx&oh=8cf2a2d896291ac93fdca0e825fae353&oe=616067F7" />
      </div>
    </div>
  );
}

export default Header;
