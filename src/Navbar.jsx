import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/49c16a38805735.57701dcdd452c.gif" alt="logo" />
                <Link to="/"><h1>Niranjan</h1></Link>
            </div>

            <div className="nav-links">
                <Link to="/contact">Contact me</Link>
                <Link to="/">Know more</Link>
                <Link to="">Download resume</Link>
                <Link to="/">Projects</Link>
            </div>
        </nav>
    );
}

export default Navbar;