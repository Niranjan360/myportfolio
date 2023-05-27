const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/85229a57490547.59e4b5dfe4a75.gif" alt="logo" />
                <h1>Niranjan</h1>
            </div>

            <div className="nav-links">
                <a href="/">Contact me</a>
                <a href="/">Know more</a>
                <a href="">Download resume</a>
                <a href="/">Projects</a>
            </div>
        </nav>
    );
}

export default Navbar;