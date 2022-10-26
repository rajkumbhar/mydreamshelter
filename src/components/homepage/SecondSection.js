import React from 'react';
import { FaHandsHelping } from "react-icons/fa";
import { BiBuildingHouse, BiSupport } from "react-icons/bi";
import { GiThreeFriends } from "react-icons/gi";

const SecondSection = () => {
    return (
        <div>
            <div className="SecondSection">

                    {/* Card title */}
                    <div className="SecondSection__title">
                        Why Dream Shelter ?
                    </div>

                    {/* benifit cards */}
                    <div className="SecondSection__cards">

                        <div className="SecondSection__cards-card">
                            <BiBuildingHouse className="SecondSection__cards-card-icon"/>
                            <div className="SecondSection__cards-card-title">Accommodation</div>
                            <div className="SecondSection__cards-card-info">We will help you in booking and the paperwork required. </div>
                        </div>

                        <div className="SecondSection__cards-card">
                            <GiThreeFriends className="SecondSection__cards-card-icon"/>
                            <div className="SecondSection__cards-card-title">Roommate</div>
                            <div className="SecondSection__cards-card-info">We help you find roommates through our verified community.</div>
                        </div>

                        <div className="SecondSection__cards-card">
                            <FaHandsHelping className="SecondSection__cards-card-icon"/>
                            <div className="SecondSection__cards-card-title">Transparency</div>
                            <div className="SecondSection__cards-card-info">What you see is what you get, You'll find verified information</div>
                        </div>

                        <div className="SecondSection__cards-card">
                            <BiSupport className="SecondSection__cards-card-icon"/>
                            <div className="SecondSection__cards-card-title"> 24x7 Support </div>
                            <div className="SecondSection__cards-card-info">Got any Questions? we will help you at Anytime, Anywhere</div>
                        </div>

                    </div>

            </div>
        </div>
    );
}

export default SecondSection;