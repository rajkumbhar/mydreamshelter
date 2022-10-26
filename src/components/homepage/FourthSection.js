import React, {useState} from 'react';
import { ImPhone } from 'react-icons/im';
import { HiOutlineMail } from 'react-icons/hi';

const FourthSection = () => {
    const [name, setName] = useState('');

    const handleOnChange = (e) => {
        const {value} = e.target;
        setName(value);
    }

    return (
        <div className="Fourthsection" id="contactus">
            <div className="Fourthsection__contactinfo">
                <div className="Fourthsection__contactinfo-info">
                    <div>
                        <h1 className="Fourthsection__contactinfo-info-hello">{name? `Hello ${name},` : "Hello,"}</h1>
                        <h3 className="Fourthsection__contactinfo-info-tagline">Get your personal assistant</h3>
                        <p className="Fourthsection__contactinfo-info-discription">Do you have any doubts on Rent, Rooms, Budget and Roommates ?</p>
                        <p className="Fourthsection__contactinfo-info-discription">Please give us your contact infomation, we will contact you in no time</p>
                    </div>
                    <div>
                        <div className="Fourthsection__contactinfo-info-contact" >
                            <ImPhone className="Fourthsection__contactinfo-info-icon"/>  
                            +91 7876540189
                        </div>
                        <div className="Fourthsection__contactinfo-info-contact" >
                            <HiOutlineMail className="Fourthsection__contactinfo-info-icon"/>
                            contact@dreamshelter.com
                        </div>
                    </div>
                </div>
            </div>

            <div className="Fourthsection__contactform">
                <div className="Fourthsection__contactform-form">
                        <div className="Fourthsection__contactform-form-allinput">
                            <div className="Fourthsection__contactform-form-allinput-input">
                                First Name:
                                <input onChange={handleOnChange} value={name} type="text" name="firstname" className="Fourthsection__contactform-form-allinput-input-inputfield" />
                            </div>
                            <div className="Fourthsection__contactform-form-allinput-input">
                                Last Name:
                                <input  type="text" name="firstname" className="Fourthsection__contactform-form-allinput-input-inputfield"/>
                            </div>
                            <div className="Fourthsection__contactform-form-allinput-input">
                                Phone Number:
                                <input type="number" name="phone" className="Fourthsection__contactform-form-allinput-input-inputfield"/>
                            </div>
                            <div className="Fourthsection__contactform-form-allinput-input">
                                Email:
                                <input type="email" name="email" className="Fourthsection__contactform-form-allinput-input-inputfield"/>
                            </div>
                        </div>
                        <button className="Fourthsection__contactform-form-button">
                            Submit
                        </button>
                </div>
            </div>
        </div>
    );
}

export default FourthSection;