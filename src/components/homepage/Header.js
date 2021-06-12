import React from 'react';
import { RiHome7Line } from "react-icons/ri";
import { GiThreeFriends} from "react-icons/gi";
import { IoIosMenu } from "react-icons/io";
import Friends from "../../Images/friends.mp4";

const Header = () => {
  return (
      <header>
        <div className="container">

          {/* cover video */}
          <div className="bg-video">
            <video className="bg-video__content" autoPlay muted loop>
              <source src={Friends} type="video/mp4"/>
            </video>
          </div>

          <div className="user-nav">

            {/* nav logo */}
            <div className="user-nav__logo-box">
                <div className="user-nav__logo-box__logo">
                    DS
                </div>
            </div>

            {/* nav buttons */}
            <div className="user-nav__buttons">
              <div className="user-nav__buttons_button">
                List Your Room 
              </div>
              <div className="user-nav__buttons_button">
                Log In 
              </div>
              <div className="user-nav__buttons_button">
                Sign Up 
              </div>
              <div className="user-nav__buttons_menu">
              <IoIosMenu className="user-nav__menu-icon"/>
            </div>
            </div>

            

          </div>

          <div className="card-container__card">
                <div className="card-container__card__title">
                    Helping students to find housing, roommates, and much more
                </div>
                <div className="card-container__card__buttons">
                    <button className="card-container__card__buttons-button">
                        <RiHome7Line className="card-container__card__buttons-button-icon"/>
                        Housing
                    </button>
                    <button className="card-container__card__buttons-button">
                        <GiThreeFriends className="card-container__card__buttons-button-icon"/>
                        Roommates
                    </button>
                </div>
          </div>
        </div>
      </header>
  );
}

export default Header;
