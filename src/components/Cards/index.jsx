import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Cards() {
    return (
        <section className="cards-section">
                <div className="card card-tech">
                        <div className="hexagon techs">
                            <FontAwesomeIcon className="card-icon techs-icon" icon = { faLaptopCode } />
                        </div>
                        <h4>React & NextJs</h4>
                        <p>The famous React and NextJs Combo! Static Page with a lot of functions.</p>
                </div>
                <div className="card card-responsive">
                        <div className="hexagon responsive">
                            <FontAwesomeIcon className="card-icon responsive-icon" icon = { faMobileAlt } />
                        </div>
                        <h4>Responsive</h4>
                        <p>All websites with full responsive and dynamic pages.</p>
                </div>
                <div className="card card-intuitive">
                        <div className="hexagon intuitive">
                            <FontAwesomeIcon className="card-icon intuitive-icon" icon = { faBrain } />
                        </div>
                        <h4>Intuitive</h4>
                        <p>Strong preference for easy to use, intuitive UX/UI.</p>
                </div>
            </section>
    )
};

export default Cards;