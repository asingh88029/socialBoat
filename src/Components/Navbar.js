import React from "react";
import './Navbar.css';
import ankit_avatar from '../Images/ankit_pic.png'
import Searchbar from './Searchbar';

const Navbar = (props) => {
  return (
    <div className="navbar">
      {/*Brand Name*/}
      <div className="company_name">SocialBoat</div>
      {/*Input Box to Search Videos*/}
      <Searchbar search_input={props.search_input}></Searchbar>
      {/*User Profile Image & It's Name*/}
      <div className="profile">
        {/*User Profile Image*/}
        <div className="avatar">
          <img
            src={ankit_avatar}
            alt="avatar"
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
          ></img>
        </div>
        {/*User Profile Name*/}
        <div className="avatar_name">Ankit Singh</div>
      </div>
    </div>
  );
};

export default Navbar;
