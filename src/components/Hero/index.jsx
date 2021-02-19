import react from 'react';
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Hero() {
    return (
    <main className="heroSection" id="hero">
        <div className="presentation">
        <h2>
            Hi, I'm Thiago Machado.
        </h2>
        <h2>
            I'm a Front-End Developer.
        </h2>
        </div>
        <p className="sm-text">
            this website is created with React and NextJs :).
        </p>
        <div>
            <a href="#about">
            <button className="custombtn">
            See my work! 
            <FontAwesomeIcon className="arrow-icon" icon = { faAngleDoubleRight } />
            </button>
            </a>
        </div>
    </main>
    )
};

export default Hero;