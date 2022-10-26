import React from "react";
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube} from 'react-icons/fa';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import {Link} from 'react-scroll';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__links">
                <div className="footer__links-link">
                    <div className="footer__links-link__logo"> DS </div>
                    <div className="footer__links-link__copyright"> DreamShelter <AiOutlineCopyrightCircle/> 2021</div>
                </div>

                <div className="footer__links-link">
                    <div className="footer__links-link__heading">Services</div>
                    <div className="footer__links-link__items">Rooms</div>
                    <div className="footer__links-link__items">Roommte</div>
                    <div className="footer__links-link__items">List Your Room</div>
                </div>

                <div className="footer__links-link">
                    <div className="footer__links-link__heading">Company</div>
                    <div className="footer__links-link__items">About Us</div>
                    <Link to="howitworks" smooth={true}><div className="footer__links-link__items">How it Works?</div></Link>
                    <div className="footer__links-link__items">Blog</div>
                    <div className="footer__links-link__items">Refer & Earn</div>
                    <div className="footer__links-link__items">Careers</div>
                    <div className="footer__links-link__items">Founders</div>
                </div>

                <div className="footer__links-link">
                    <div className="footer__links-link__heading">Support</div>
                    <Link to="contactus" smooth={true}><div className="footer__links-link__items">Help</div></Link>
                    <div className="footer__links-link__items">FAQ</div>
                    <div className="footer__links-link__items">Contact Us</div>
                    <div className="footer__links-link__items">Terms & Conditions</div>
                    <div className="footer__links-link__items">Privacy Policy</div>
                </div>
            </div>
            <div className="footer__icons">
                <div className="footer__icons-icon"><FaFacebook/></div>
                <div className="footer__icons-icon"><FaTwitter/></div>
                <div className="footer__icons-icon"><FaInstagram/></div>
                <div className="footer__icons-icon"><FaLinkedin/></div>
                <div className="footer__icons-icon"><FaYoutube/></div>
            </div>
        </div>
    );
}

export default Footer;