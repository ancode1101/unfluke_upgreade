import React from "react";
import { Link } from "react-router-dom";
import { Icon19, Icon20, Icon21, logo } from "../imagepath";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer Top */}
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              {/* Footer Widget */}
              <div className="footer-widget footer-about">
                
                <div className="footer-about-content">
                  
                </div>
              </div>
              {/* /Footer Widget */}
            </div>
            
          </div>
        </div>
      </div>
      {/* /Footer Top */}
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          {/* Copyright */}
          <div className="copyright">
            <div className="row">
              <div className="col-md-6">
                <div className="privacy-policy">
                  <ul>
                    <li>
                      <Link to="/term-condition">Terms and Conditions</Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">Refund Policy | Privacy Policy</Link>
                    </li>
                  </ul>
                  
                </div>
              </div>
              <div className="col-md-6">
                <div className="copyright-text">
                  <img src={Icon20} alt="" className="img-fluid mx-2" />
                  
                  <img src={Icon19} alt="" className="img-fluid mx-2" />
                  <img src={Icon21} alt="" className="img-fluid mx-2" />
                  <p className="mb-0 ">2024 © Unfluke. All rights reserved.</p>
                </div>
              </div>
            </div>
          </div>
          {/* /Copyright */}
        </div>
      </div>
      {/* /Footer Bottom */}
    </footer>
  );
};

export default Footer;
