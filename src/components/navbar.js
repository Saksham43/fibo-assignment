import React, {useState, useEffect} from 'react'
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


    const [scrolled, setScrolled] = useState(false);

  const [dropbutton, setDropbutton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='navbar'>
      <Link to="/" className={`${currentUrl === "https://sakshamsehgal.com/" ? "navLink-highlight" : "navbar-link" }`}>
        <img src={`${currentUrl === "https://sakshamsehgal.com/" ? homeH : home }`}/>
        <p>Page1</p>
      </Link>
      <Link to="/page2" className={`${currentUrl === "https://sakshamsehgal.com/page2" ? "navLink-highlight" : "navbar-link" }`}>
        <img src={`${currentUrl === "https://sakshamsehgal.com/page2" ? page2H : page2 }`}/>
        <p>Page2</p>
      </Link>
      <Link to="/page3" className={`${currentUrl === "https://sakshamsehgal.com/page3" ? "navLink-highlight" : "navbar-link" }`}>
        <img src={`${currentUrl === "https://sakshamsehgal.com/page3" ? page3H : page3 }`}/>
        <p>Page3</p>
      </Link>
      <Link to="/page4" className={`${currentUrl === "https://sakshamsehgal.com/page4" ? "navLink-highlight" : "navbar-link" }`}>
        <img src={`${currentUrl === "https://sakshamsehgal.com/page4" ? page4H : page4 }`}/>
        <p>Page4</p>
      </Link>
    </div>
  )
}

export default Navbar;
