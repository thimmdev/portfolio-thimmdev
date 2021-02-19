import react from 'react';

function Navbar() {
    return (
    <nav className="sticky">
        <div className="container">
            <div className="active-div">   
                <a className="nav-active" href="#">Home</a>
            </div>
            <div>
                <a href="#about">About</a>
            </div>
            <div >
                <a href="#projects">Projects</a>
            </div>
            <div>
                <a href="#contact">Contact</a>
            </div>
        </div>
    </nav>
    )
};

export default Navbar;