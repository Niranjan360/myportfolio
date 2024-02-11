import { useState } from "react";
// import { Link } from "react-router-dom";
import cv from '../assets/resume.pdf'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Navbar = () => {
    let[menu , setMenu] = useState(false);
    return ( 
        <nav>
            <div className="logo">
                <Link to="/"><h1>Niranjan</h1></Link>
            </div>

            <div className="nav-links">
                <Link to="contact-me" smooth={true} offset={-40}>Contact me</Link>
                <Link to="more" smooth={true} offset={-80}>Know more</Link>
                <a href={cv} download={true}>Download resume</a>
                <Link to="projects" smooth={true}>Projects</Link>
            </div>

            <div className="hamberger">
                <span onClick={()=>{setMenu(!menu)}}>
                    {!menu ? <i className='bx bx-menu'></i>
                            :<i class='bx bx-menu-alt-left'></i>}
                </span>
                {menu && <div className="menu-links" data-aos="fade-left">
                                <Link to="contact-me" smooth={true} offset={-40}>Contact me</Link>
                                <Link to="more" smooth={true} offset={-80}>Know more</Link>
                                <a href={cv} download={true}>Download resume</a>
                                <Link to="projects" smooth={true}>Projects</Link>
                        </div>}
            </div>
        </nav>
    );
}

export default Navbar;