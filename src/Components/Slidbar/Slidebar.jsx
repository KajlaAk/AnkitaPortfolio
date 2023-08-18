import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import mmyimg from "../../assets/mmyimg.png"
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen, AiOutlineContacts, AiFillLinkedin, AiOutlineGithub, AiFillFacebook, AiFillInstagram } from "react-icons/ai"
import { PiNewspaperLight } from "react-icons/pi"

import Home from '../Home/Home';


const Sidebar = () => {
  return (

    <div id='sidebar'>
      <div className='mypic'>
        <img src={mmyimg} className='image' />
        <div>
          <h3 style={{ fontFamily: "Constantia", color: "#050A30" }}>Ankita Kajla</h3>
        </div>
      </div>
      <div className='linklist'>
        <ul>
          <li className='list'>
            <Link to="/home" className='li' style={{ display: "flex", alignItems: "center", gap: "10px" }}><AiOutlineHome />Home</Link>
            <Link to="/aboutus" className='li' style={{ display: "flex", alignItems: "center", gap: "10px" }} ><AiOutlineUser />About Me</Link>
            <Link to="/resume" className='li' style={{ display: "flex", alignItems: "center", gap: "10px" }}><PiNewspaperLight />Resume</Link>
            <Link to="/project" className='li' style={{ display: "flex", alignItems: "center", gap: "10px" }}><AiOutlineFundProjectionScreen />Project</Link>
            <Link to="/contact" className='li' style={{ display: "flex", alignItems: "center", gap: "10px" }}><AiOutlineContacts />Contact Me</Link>
          </li>
        </ul>
      </div>
      <div className='so'>
        <ul>
          <li className='social'>
            <Link to="https://www.linkedin.com/in/ankita-kajla-878a06213?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BvnmLPt%2BJQeagvvExjgB29A%3D%3D"><AiFillLinkedin size={"30px"} /></Link>
            <Link to="https://github.com/KajlaAk"><AiOutlineGithub size={"30px"} /></Link>
            <Link to="https://www.facebook.com/ankita.kajla.16"><AiFillFacebook size={"30px"} /></Link>
            <Link to="https://www.instagram.com/_ankita__kajla/"><AiFillInstagram size={"30px"} /></Link>
          </li>
        </ul>
      </div>


    </div>

  );
};

export default Sidebar;
