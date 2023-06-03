import React from 'react';
import "./Hero.css";
import myImage from '../../images/Hero.jpg';
import Typewriter from 'typewriter-effect';
import { FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
    return (
        <div className='hero'>
            <img src={myImage}></img>
            <div class='topText'>
                <h1 className='mainText'>Azaan Wazir</h1>
                <h1 className='subText'>Systems Design Engineer, University of Waterloo</h1>
            </div>
            <div className='jobExperience'>
                <span>
                    <Typewriter
                        options={{
                            strings: ['FullStack Developer @ Tremeng Group', 'Software Engineer @ Alert Driving', 'Product Lead @ Tulip Retail'],
                            autoStart: true,
                            loop: true,
                            pauseFor: 2500,
                            deleteSpeed: 12,
                            delay: 50,
                        }}
                    />
                </span>
            </div>
            <div className='scrollDown'>
                <FiChevronDown />
            </div>
            
            
        </div>
    );
}

export default Navbar;