import React from 'react';
import '../assets/styles/footer.css';


export default function Footer() {
    return (
        <div>
    <footer className="footer">
  <div className="footer-left col-md-4 col-sm-6">
    <p className="about">
      <span> About Us</span>Pakistan Railways (IR) is a government agency under the ownership of Ministry of Railways. Government of India that operates India's national railway system. It manages the fourth-largest railway network in the world by size, with a route length of 67,956 km as of 31 March 2020. Indian Railway focus on the comfort of passengers. Indian Railway is also renoun for the Royal Facilities in the Trains Like TEJAS Express. Indian Railway is always devoted to their passangers.  
    </p>
    <div className="icons">
      <a href="#"><i className="fa fa-facebook"></i></a>
      <a href="#"><i className="fa fa-twitter"></i></a>
      <a href="#"><i className="fa fa-linkedin"></i></a>
      <a href="#"><i className="fa fa-google-plus"></i></a>
      <a href="#"><i className="fa fa-instagram"></i></a>
    </div>
  </div>
  <div className="footer-center col-md-4 col-sm-6">
    <div>
      <i className="fa fa-map-marker"></i>
      <p><span>Lahore Routing</span> Lahore, Pakistan</p>
    </div>
    <div>
      <i className="fa fa-phone"></i>
      <p> (+91)23 23 420 117</p>
    </div>
    <div>
      <i className="fa fa-envelope"></i>
      <p><a href="#"> enquiry@rail.gov.in</a></p>
    </div>
  </div>
  <div className="footer-right col-md-4 col-sm-6">
    <h2> Pakistan Railway<span></span></h2>
    <p className="menu">
      <a href="#"> Home</a> |
      <a href="#"> About</a> |
      <a href="#"> Services</a> |
      <a href="#"> Portfolio</a> |
      <a href="#"> News</a> |
      <a href="#"> Contact</a>
    </p>
    <p className="name"> Pakistan High Speed Railways &copy; 2021</p>
  </div>
</footer>
        </div>
    )
}