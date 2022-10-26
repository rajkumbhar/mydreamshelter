import React, {useState} from "react";
import Getverified from '../../Images/Getverified.png';
import Computerguy from '../../Images/Usecomputer.png';
import Checking from '../../Images/Checking.png';
import Dance from '../../Images/Dance.png';
import Done from '../../Images/Done.png';
import Checking2 from '../../Images/Checking2.png';
import Friends from '../../Images/Friends.png';

const ThirdSection = () => {
    const [active, setActive] = useState('haveRoom');
    return (
        <div className="ThirdSection" id="howitworks">
            <div className="SecondSection__title">
                How Dream Shelter Works?
            </div>

            <div className="ThirdSection__buttons">
                    <button className="ThirdSection__buttons-button" onClick={()=> setActive("haveRoom")}>
                        Have a Room
                    </button>
                    <button className="ThirdSection__buttons-button" onClick={()=> setActive("needRoom")}>
                        Need a Room
                    </button>
                    <button className="ThirdSection__buttons-button" onClick={()=> setActive("needRoommate")}>
                        Need a Roommate
                    </button>
            </div>
            {active === "haveRoom" &&
            <div className="ThirdSection__content">
                <div className="ThirdSection__content-1">
                    <img src={Computerguy} className="ThirdSection__content-1__img" />
                    <div className="ThirdSection__content-1__title">List a Room</div>
                    <div className="ThirdSection__content-1__info">List an empty room for free and tell us about your ideal roommate in a few steps.</div>
                </div>
                <div className="ThirdSection__content-1">
                    <img src={Getverified} className="ThirdSection__content-1__img" />
                    <div className="ThirdSection__content-1__title">Get Verified</div>
                    <div className="ThirdSection__content-1__info">Find a roommate faster by adding your social media and getting background checked.</div>
                </div>
                <div className="ThirdSection__content-1">
                    <img src={Checking} className="ThirdSection__content-1__img" />
                    <div className="ThirdSection__content-1__title">Invite and Review Requests</div>
                    <div className="ThirdSection__content-1__info">Approve or decline chat requests and booking requests. You can also invite people to move in!</div>
                </div>
                <div className="ThirdSection__content-1">
                    <img src={Done} className="ThirdSection__content-1__img" />
                    <div className="ThirdSection__content-1__title">Done !</div>
                    <div className="ThirdSection__content-1__info">Time to pop the champagne and celebrate finding a new Roommate to move in.</div>
                </div>
            </div>
            }

            {active === "needRoom" &&
                <div className="ThirdSection__content">
                    <div className="ThirdSection__content-1">
                        <img src={Getverified} className="ThirdSection__content-1__img" />
                        <div className="ThirdSection__content-1__title">Get Verified</div>
                        <div className="ThirdSection__content-1__info">Find a roommate faster by adding your social media and getting background checked.</div>
                    </div>
                    <div className="ThirdSection__content-1">
                        <img src={Computerguy} className="ThirdSection__content-1__img" />
                        <div className="ThirdSection__content-1__title">Browse send request</div>
                        <div className="ThirdSection__content-1__info">List an empty room for free and tell us about your ideal roommate in a few simple steps.</div>
                    </div>
                    <div className="ThirdSection__content-1">
                        <img src={Checking2} className="ThirdSection__content-1__img" />
                        <div className="ThirdSection__content-1__title">paperwork from our side</div>
                        <div className="ThirdSection__content-1__info">After finalizing your Room, we’ll start the paperwork for you. It involves signing of your lease agreement etc</div>
                    </div>
                    <div className="ThirdSection__content-1">
                        <img src={Dance} className="ThirdSection__content-1__img" />
                        <div className="ThirdSection__content-1__title">Your Room is Booked</div>
                        <div className="ThirdSection__content-1__info">You have successfully booked your Room. Now sit back and prepare for your journey</div>
                    </div>
                </div>
            }

            {active === "needRoommate" &&
            <div className="ThirdSection__content">
                <div className="ThirdSection__content-1">
                    <img src={Getverified} className="ThirdSection__content-1__img" />
                    <div className="ThirdSection__content-1__title">Get Verified</div>
                    <div className="ThirdSection__content-1__info">Find a roommate faster by adding your social media and getting background checked.</div>
                </div>
                <div className="ThirdSection__content-1">
                    <img src={Computerguy} className="ThirdSection__content-1__img" />
                    <div className="ThirdSection__content-1__title">Look for Roommate</div>
                    <div className="ThirdSection__content-1__info">List an empty room for free and tell us about your ideal roommate in a few steps.</div>
                </div>
                <div className="ThirdSection__content-1">
                    <img src={Checking} className="ThirdSection__content-1__img" />
                    <div className="ThirdSection__content-1__title">Send requests and chat</div>
                    <div className="ThirdSection__content-1__info">Approve or decline chat requests and booking requests. You can also invite people to move in!</div>
                </div>
                <div className="ThirdSection__content-1">
                    <img src={Friends} className="ThirdSection__content-1__img" />
                    <div className="ThirdSection__content-1__title">Match Successfully</div>
                    <div className="ThirdSection__content-1__info">Time to pop the champagne and celebrate finding a new Roommate to move in.</div>
                </div>
            </div>
            }
        </div>
    );
}

export default ThirdSection;