import { useState } from "react";
import { Link } from "react-router-dom";
import cv from './assets/resume.pdf'

const Navbar = () => {
    let[menu , setMenu] = useState(false);
    return ( 
        <nav>
            <div className="logo">
                <Link to="/"><h1>Niranjan</h1></Link>
            </div>

            <div className="nav-links">
                <Link to="/contact">Contact me</Link>
                <Link to="/">Know more</Link>
                <Link to={cv} download={true}>Download resume</Link>
                <Link to="/">Projects</Link>
            </div>

            <div className="hamberger">
                <span onClick={()=>{setMenu(!menu)}}>
                    {!menu ? <i className='bx bx-menu'></i>
                            :<i class='bx bx-menu-alt-left'></i>}
                </span>
                {menu && <div className="menu-links" data-aos="fade-left">
                <Link to="/">Home</Link>
                <Link to="/contact">Contact me</Link>
                <Link to="/">Know more</Link>
                <Link to="/">Download resume</Link>
                <Link to="/">Projects</Link>
                </div>}
            </div>
        </nav>
    );
}

export default Navbar;