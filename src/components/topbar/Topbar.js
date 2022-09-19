import React from 'react';

import "./topbar.scss";


export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Practice with States and Hooks 
          </a>
          <div className="itemContainer">
            {/* <Person className="icon" /> */}
            <span>Andy Humes. <br></br>Denver, CO</span>
          </div>
          <div className="itemContainer">
            {/* <Mail className="icon" /> */}
            <span><a href="mailto:humes.andrew@gmail.com">humes.andrew@gmail.com</a></span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}