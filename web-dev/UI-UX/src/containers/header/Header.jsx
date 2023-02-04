import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/sst.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Stay ahead of Skin Cancer!</h1>
      <p>SkinSentry is a cutting-edge website that helps you detect and monitor skin cancer and other skin-related issues. With advanced technology and medical algorithms, SkinSentry analyzes images of your skin to determine if there are any suspicious moles, growths, or other skin abnormalities that could be indicative of skin cancer. Our user-friendly interface makes it easy for you to upload and review your images!</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      {/* <div className="gpt3__header-content__people">
        <img src={people} alt="" />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div> */}
    </div>

    <div className="gpt3__header-image">
      <img src={ai} alt=""/>
    </div>
  </div>
);

export default Header;
