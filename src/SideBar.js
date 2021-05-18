import { Avatar } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./SideBar.css";

function SideBar() {
  const user = useSelector(selectUser);
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
          alt="backgroundimg"
        />
        <Avatar src={user?.photoUrl} className="sidebar__avatar"></Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed your profile</p>
          <p className="sidebar__statNumber">55</p>
        </div>
        <div className="sidebar__stat">
          <p>Connections</p>
          <p className="sidebar__statNumber">145</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <div className="sidebar__bottomOptions">
          <div className="sidebar__bottomOption">
            <h4 className="option">Groups</h4>
          </div>
          <div className="sidebar__bottomOption">
            <h4 className="option">Events</h4>
            <AddIcon />
          </div>
          <div className="sidebar__bottomOption">
            <h4 className="option">Followed Hashtags</h4>
          </div>
        </div>
        <div className="sidebar__bottomDiscover">Discover more</div>
      </div>
    </div>
  );
}

export default SideBar;
