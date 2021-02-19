import Cards from '../../components/Cards'
import Profile from '../../components/Profile'


function About() {
    return (
        <section id="about">
            <div className="about-container">
                <h2>About me</h2>
                <div className="separator" />
            </div>
            <Cards />
            <Profile />
        </section>
    )
};

export default About;