import React from "react";
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";

import InputOption from "./InputOption";
import SubscriptionsIcon  from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewIcon  from "@material-ui/icons/CalendarViewDay";



function Feed() {
  return (
    <div className="feed">
      <div className="feed__inutContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
                  <InputOption title="Photo" Icon={ImageIcon} color="#70B5F9" />
                  <InputOption title="Video" Icon={SubscriptionsIcon} color="orange" />

                  <InputOption title="Event" Icon={EventNoteIcon} color="gray" />

                  <InputOption title="Write Article" Icon={CalendarViewIcon} color="green" />

        </div>
      </div>
    </div>
  );
}

export default Feed;
