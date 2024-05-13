import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import home from "../assets/home.png";
import homeH from "../assets/home-highlight.png";
import page2 from "../assets/page2.png";
import page2H from "../assets/page2-highlight.png";
import page3 from "../assets/page3.png";
import page3H from "../assets/page3-highlight.png";
import page4 from "../assets/page4.png";
import page4H from "../assets/page4-highlight.png";


const Navbar = () => {

    const currentUrl = window.location.href;
    const currUrl = useLocation();

  return (
    <div className='navbar'>
      <Link to="/" className={`${currentUrl === "http://localhost:3000/" ? "navLink-highlight" : "navbar-link" }`}>
        <img src={`${currentUrl === "http://localhost:3000/" ? homeH : home }`}/>
        <p>Page1</p>
      </Link>
      <Link to="/page2" className={`${currentUrl === "http://localhost:3000/page2" ? "navLink-highlight" : "navbar-link" }`}>
        <img src={`${currentUrl === "http://localhost:3000/page2" ? page2H : page2 }`}/>
        <p>Page2</p>
      </Link>
      <Link to="/page3" className={`${currentUrl === "http://localhost:3000/page3" ? "navLink-highlight" : "navbar-link" }`}>
        <img src={`${currentUrl === "http://localhost:3000/page3" ? page3H : page3 }`}/>
        <p>Page3</p>
      </Link>
      <Link to="/page4" className={`${currentUrl === "http://localhost:3000/page4" ? "navLink-highlight" : "navbar-link" }`}>
        <img src={`${currentUrl === "http://localhost:3000/page4" ? page4H : page4 }`}/>
        <p>Page4</p>
      </Link>
    </div>
  )
}

export default Navbar;
