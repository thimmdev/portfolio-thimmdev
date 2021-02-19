import React from 'react';
import Techs from '../Techs';
import Links from '../Links';

function Profile() {
    return (
        <div>
            <section className="profile-section">
                <a href="https://instagram.com/thi.m.m"> <div className="transitionSlide profile-photo"> </div> </a>
                <Techs />
            </section>
            <div>
                <Links />
            </div>
        </div>
    )
};

export default Profile;