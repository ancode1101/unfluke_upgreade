import React, { useState } from "react";
import {
  bannerimg,
  Become1,
  Become2,
  CertificateIcon,
  Course1,
  Course2,
  Course3,
  Course4,
  Course5,
  Course6,
  CourseIcon,
  GratuateIcon,
  Icon01,
  Icon02,
  Icon03,
  Icon04,
  Icon1,
  Icon10,
  Icon12,
  Icon13,
  Icon14,
  Icon15,
  Icon16,
  Icon17,
  Icon18,
  Icon2,
  Icon7,
  Icon8,
  Icon9,
  Join,
  PencilIcon,
  Share,
  User1,
  User2,
  User3,
  User4,
  User5,
  User6,
} from "../imagepath";
import TopCategory from "./slider/topCategory";
import Loginbg from "../../assets/img/banner.png";
import tv from "../../assets/img/tv.jpg";
import TrendingCourse from "./slider/trendingCourse";
import Companies from "./slider/companies";
import BgBanner1 from "../../assets/img/bg-banner-01.png";
import BgBanner2 from "../../assets/img/bg-banner-02.png";
import UserLove from "../../assets/img/user-love.jpg";
import Blog from "./slider/blog";

import Testimonial from "./slider/testimonial";
import Select from "react-select";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CountUp from "react-countup";
// import { abs  } from "../imagepath";



export const Home = () => {
  const [setValue] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [isActivetwo, setIsActivetwo] = useState(false);
  const [isActivethree, setIsActivethree] = useState(false);
  const [isActivefour, setIsActivefour] = useState(false);
  const [isActivefive, setIsActivefive] = useState(false);
  const [isActivesix, setIsActivesix] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };
  const toggleClasstwo = () => {
    setIsActivetwo(!isActivetwo);
  };
  const toggleClassthree = () => {
    setIsActivethree(!isActivethree);
  };
  const toggleClassfour = () => {
    setIsActivefour(!isActivefour);
  };
  const toggleClassfive = () => {
    setIsActivefive(!isActivefive);
  };
  const toggleClasssix = () => {
    setIsActivesix(!isActivesix);
  };

  const formatValue = (value) => `${Math.floor(value)}`;

  const style = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: "#FFDEDA",
      border: state.isFocused ? 0 : 0,
      paddingLeft: "5px",
      paddingTop: "5px",
      paddingBottom: "5px",
      // This line disable the blue border
      boxShadow: state.isFocused ? 0 : 0,
      borderRadius: state.isSelected ? "0" : "10px",
      fontSize: "14px",
      "&:hover": {
        border: state.isFocused ? 0 : 0,
        color: "black",
      },
      // eslint-disable-next-line no-dupe-keys
      // borderRadius: "50px",
      outline: "none",
    }),
    menu: (base) => ({ ...base, marginTop: "2px" }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#FFDEDA" : "white",
      fontSize: "14px",
      "&:hover": {
        backgroundColor: "#FFDEDA",
      },
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: "none",
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      color: "black",
      transform: state.selectProps.menuIsOpen ? "rotate(-180deg)" : "rotate(0)",
      transition: "250ms",
    }),
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <div className="main-wrapper">
        {/* banner */}
        <section
          className="home-slide d-flex align-items-center"
          style={{ backgroundImage: "url(" + Loginbg + ")" }}
        >
          <div className="container">
            <div className="row ">
              <div className="col-md-7">
                <div className="home-slide-face aos" data-aos="fade-up">
                  <div className="home-slide-text ">
                    <h1>One stop solution to test your Strategy ideas</h1>
                    <p>As we are launching a Beta soon, we are giving away 1 month FREE subscription to our early backers. Sign up below to get FREE subscription.</p>
                  </div>
                  <ul className="course-list">
                    <li>
                      <i className="fa-solid fa-circle-check" />
                      Free 30-day subscription
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check" />
                      No credit card needed
                    </li>
                  </ul>
                 
                </div>
              </div>
              <div className="col-md-5 d-flex align-items-center">
                <div className="girl-slide-img aos" data-aos="fade-up">
                  <img src={bannerimg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /banner */}

        {/* Home banner bottom */}
        <section className="section student-course">
          <div className="container">
            <div className="course-widget">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="course-full-width">
                    <div
                      className="blur-border course-radius align-items-center aos"
                      data-aos="fade-up"
                    >
                      <div className="online-course d-flex align-items-center">
                        {/* <div className="course-img">
                          <img src={PencilIcon} alt="" />
                        </div> */}
                        <div className="course-inner-content">
                          <h3><b>
                            {/* <span>10</span>K */}
                            <span className="d-flex">
                              <CountUp
                                start={0}
                                end={100}
                                delay={1}
                                duration={4}
                              />
                              +
                            </span></b>
                          </h3>
                          <p><b>Indicators</b> </p>
                          <p>Help you get best scanners</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="course-full-width">
                    <div
                      className="blur-border course-radius aos"
                      data-aos="fade-up"
                    >
                      <div className="online-course d-flex align-items-center">
                        {/* <div className="course-img">
                          <img src={CourseIcon} alt="" />
                        </div> */}
                        <div className="course-inner-content">
                          <h3>
                            <b>
                            <span className="d-flex">
                              <CountUp start={0} end={1024} delay={1} /> MB+
                            </span>
                            </b>
                          </h3>
                          <p><b>Market Data</b></p>
                          <p>Scan results and alerts</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="course-full-width">
                    <div
                      className="blur-border course-radius aos"
                      data-aos="fade-up"
                    >
                      <div className="online-course d-flex align-items-center">
                        {/* <div className="course-img">
                          <img src={CertificateIcon} alt="" />
                        </div> */}
                        <div className="course-inner-content">
                          <h3>
                            <b>
                            <span className="d-flex">
                              <CountUp
                                start={0}
                                end={6}
                                delay={1}
                                duration={5}
                              />
                              + Years
                            </span>
                            </b>
                          </h3>
                          <p><b>Martket Data </b></p>
                          <p>In equity, Futures and Options</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex">
                  <div className="course-full-width">
                    <div
                      className="blur-border course-radius aos"
                      data-aos="fade-up"
                    >
                      <div className="online-course d-flex align-items-center">
                        <div className="course-img">
                          <img src={GratuateIcon} alt="" />
                        </div>
                        <div className="course-inner-content">
                          <h3>
                            <b>
                              <span className="d-flex center">
                              <CountUp
                                start={0}
                                end={1000}
                                delay={1}
                                duration={2}
                              />
                               +
                            </span>
                            </b>
                          </h3>
                          <p><b>Option strategies</b></p>
                          <p>Use indicators, ideas!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <div className="text-center-padding">
        <span className="feature-tag">FEATURES</span>
        <h5 className="title-text fs-2 fw-medium m-2">Excellent Features. Excellent Results</h5>
        <p className="normal-text">
          Start working with{' '}
          <a href="#" className="unfluke-link">
            Unfluke
          </a>{' '}
          to manage all your strategies
        </p>
      </div>
        <section className="section master-skill">
          <div className="container">
            <div className="row">
            <div className="col-lg-5 col-md-12 flex align-items-end">
              <img src={Icon15} alt="" className="img-fluid col-lg-5 " />
              </div>
              <div className="col-lg-7 col-md-10">
                <div className="section-header aos" data-aos="fade-up">
                  <div className="section-sub-head">
                    
                    <h2>HISTORICAL INTRADAY CHARTS</h2>
                  </div>
                </div>
                
                <div className="career-group aos" data-aos="fade-up">
                  <div className="row">
                    <div className="col-lg-9 col-md-11 flex">
                      <div className="certified-group blur-border d-flex">
                        <div className="get-certified d-flex align-items-center">
                          <div className="blur-box">
                            <div className="certified-img ">
                              <img src={Icon1} alt="" className="img-fluid" />
                            </div>
                          </div>
                          <div>
                          <h4>Different Segments Charts</h4>
                          <p>Get historical intraday charts of Equity, Futures and Options.</p>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                    <ul>
                    <div className="col-lg-9 col-md-11 flex">
                      <div className="certified-group blur-border d-flex">
                        <div className="get-certified d-flex align-items-center">
                          <div className="blur-box">
                            <div className="certified-img ">
                              <img src={Icon02} alt="" className="img-fluid" />
                            </div>
                          </div>
                          <div>
                          <h4>Data since 2017</h4>
                          <p>Currently we have data since 2017 and its updated real time.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    </ul>
                    
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>


        <section className="section master-skill">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12">
                <div className="section-header aos" data-aos="fade-up">
                  <div className="section-sub-head">
                    <h2>HISTORICAL SCANNER</h2>
                  </div>
                </div>

                <div className="career-group aos" data-aos="fade-up">
                  <div className="row">
                    <div className="col-lg-9 col-md-11 flex">
                      <div className="certified-group blur-border d-flex">
                        <div className="get-certified d-flex align-items-center">
                          <div className="blur-box">
                            <div className="certified-img">
                              <img src={Icon1} alt="" className="img-fluid" />
                            </div>
                          </div>
                          <div>
                            <h4>Different Segments Scanner</h4>
                            <p>Check scanner results using a combination of different indicators and time frames.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-11 flex">
                      <div className="certified-group blur-border d-flex">
                        <div className="get-certified d-flex align-items-center">
                          <div className="blur-box">
                            <div className="certified-img">
                              <img src={Icon02} alt="" className="img-fluid" />
                            </div>
                          </div>
                          <div>
                            <h4>Data since 2017 for FNO</h4>
                            <p>Get scanner results of even Futures and Options (intraday) since 2017</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 flex align-items-center">
                <img
                  src={Icon16}
                  alt=""
                  className="img-fluid block rounded aos-init aos-animate"
                  data-aos="fade-right"
                  data-aos-duration="200"
                />
              </div>
            </div>
          </div>
        </section>

        
        <section
          className="section share-knowledge"
          style={{ backgroundImage: "url(" + BgBanner1 + ")" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="knowledge-img aos" data-aos="fade-up">
                  <img src={Icon17} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="join-mentor aos" data-aos="fade-up">
                  <h2>BACKTEST STRATEGIES</h2>
                  
                </div>
              </div>
            </div>
          </div>
        </section>


        <section
          className="section share-knowledge"
          style={{ backgroundImage: "url(" + BgBanner1 + ")" }}
        >
          <div className="container">
            <div className="row">
              
              <div className="col-md-6 d-flex align-items-center">
                <div className="join-mentor aos" data-aos="fade-up">
                  <h2>ADVANCE BACKTEST STRATEGIES</h2>
                  
                </div>
              </div>
              <div className="col-md-6">
                <div className="knowledge-img aos" data-aos="fade-up">
                  <img src={Icon18} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section
          className="section latest-blog"
          style={{ backgroundImage: "url(" + BgBanner2 + ")" }}
        >
          <div className="container">
            <div className="section-header aos" data-aos="fade-up">
              <div className="section-sub-head feature-head text-center mb-0">
                  <h4>In partnership with</h4>
                  
                <div className="section-text aos" data-aos="fade-up">
                <div className="list-inline-item mx-4 mx-xl-5 mb-3">
                  <img src={tv} alt="" height="64" />
                </div>

                  <p className="mb-0">
                   TradingView is a widely recognized and highly regarded platform
                    among traders and investers,with a vast user base spanning the globe.
                    It offers state-of-the-art charting tools that allow market enthusiasts to
                    engage, analyze data, prepare for BTC USD, ETH USD trading and various other assets.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </section>
        {/* /Blog */}

       
      </div>
    </>
  );
};

export default Home;
