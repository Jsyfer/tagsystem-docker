import React, { Component } from 'react';
import homeImg001 from 'img/001.jpg';
import homeImg002 from 'img/002.jpg';
import homeImg003 from 'img/003.png';

class HomeView extends Component {
  state = {  } 
  render() { 
    return ( 
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={homeImg001} className="d-block w-100 bannerImg" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={homeImg002} className="d-block w-100 bannerImg" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={homeImg003} className="d-block w-100 bannerImg" alt="..."/>
          </div>
        </div>
      </div>
    );
  }
}
 
export default HomeView;