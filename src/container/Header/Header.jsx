import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Find Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ducimus expedita deserunt delectus debitis pariatur facere dolorum id. Eum at ullam sit veritatis deleniti consequatur placeat odit dolorem et velit.</p>
      <button type="button" className="custom__button">Explore Menu </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>

);

export default Header;