import './about.css';
import aboutimage from '../../assests/images/aboutus1.jpg';
import React, { useState, useRef } from 'react';
import abooutlogo from '../../assests/images/champion.png'
import liflogo from '../../assests/images/lifebuoy_251035.png';
import librarylog from '../../assests/images/noun-public-library-2355067.png';
import sethoscope from '../../assests/images/sethoscope.jpg';
import { Facebook, Google, Instagram, Linkedin, Twitter } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

import { FaTwitter, FaFacebook, FaInstagram, FaSkype, FaLinkedin } from 'react-icons/fa';



export function AboutPage() {
    const [showContact, setShowContact] = useState(false);


    const toggleContact = () => {
        setShowContact(!showContact);
    };

    return (
        <div>
            <div className='abouthead' >


                <div>
                    <h1 style={{ fontSize: '50px', fontWeight: 'bolder', textAlign: 'center', marginTop: '30px', color: ' rgb(57, 53, 53)' }}>ABOUT US</h1>
                    <hr className='horzintal'></hr>
                </div>
                <p>SmartHospital, born in 2004, is not just a healthcare institution;<br></br> it's a sanctuary of innovation and compassion,</p>

            </div>

            <div>
                <img className="aboutimg" src={aboutimage}></img>

                <div className='asideabout'>
                    <h1>We Take Care Of Your <br></br>Healthy Life</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores rerum incidunt voluptatibus modi,<br></br> veniam quis nam corporis sequi minus error maxime aliquid ipsum saepe enim porro sapiente ullam delectus pariatur, impedit magni<br></br> minima amet deleniti voluptatem vel! Quo quos cumque nam mollitia, temporibus, voluptas quis aliquam placeat repellendus ab excepturi!
                        <br></br>Lorem ipsum dolor sit.
                        <br></br><br></br>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos laborum delectus corporis <br></br>explicabo perferendis minus accusamus vero labore nam non?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br></br>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, voluptatem!</p>





                </div>

                <div className='learnmore'>
                    <div className="container mt-4">
                        <button className="aboutusBtn" onClick={toggleContact}>
                            Learn More {showContact ? ' v' : ' >'}
                        </button>
                        {showContact && (
                            <div className="mt-2">
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt odit quam facilis.
                                    adipisicing elit. Incidunt odit quam facilis.adipisicing elit. Incidunt odit quam facilis.
                                    adipisicing elit. Incidunt odit quam facilis.adipisicing elit. Incidunt odit quam facilis.
                                    adipisicing elit. Incidunt odit quam facilis.adipisicing elit. Incidunt odit quam facilis.
                                    adipisicing elit. Incidunt odit quam facilis.adipisicing elit. Incidunt odit quam facilis.
                                    adipisicing elit. Incidunt odit quam facilis.adipisicing elit. Incidunt odit quam facilis.
                                    adipisicing elit. Incidunt odit quam facilis.adipisicing elit. Incidunt odit quam facilis.
                                    adipisicing elit. Incidunt odit quam facilis.adipisicing elit. Incidunt odit quam facilis.
                                    adipisicing elit. Incidunt odit quam facilis.adipisicing elit. Incidunt odit quam facilis.
                                    adipisicing elit. Incidunt odit quam facilis.adipisicing elit. Incidunt odit quam fadipisicing elit. Incidunt odit quam facilis.adipisicing elit. Incidunt odit quam facilis.
                                    adipisicing elit. Incidunt odit quam facilis.adipisicing elit. Incidunt odit quam facilis.
                                    adipisicing elit. Incidunt odit quam facilis.adipisicing elit. Incidunt odit quam facilis.acilis.
                                    adipisicing elit. Incidunt odit quam facilis.adipisicing elit. Incidunt odit quam facilis.
                                </p>
                            </div>
                        )}
                    </div>
                </div>


            </div>

            <div className='timetable'>
                <div className='timetable2'>
                    <div >
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <table className="table table-aboout p-5" style={{ width: '800px', height: '600px', marginTop: '-50px', marginLeft: '-260px' }}>
                                        <tbody >
                                            <tr>
                                                <td colspan="2" style={{ fontSize: '33px', textAlign: 'center' }}>
                                                    Openeing  Hours
                                                </td>
                                            </tr>
                                            <tr style={{ fontSize: '28px' }}>
                                                <td style={{ fontSize: '22px' }}>Sunday</td>
                                                <td style={{ fontSize: '22px' }}>5.30 PM to 8.30 PM</td>
                                            </tr>
                                            <tr>
                                                <td style={{ fontSize: '22px' }}>Monday</td>
                                                <td style={{ fontSize: '22px' }}>8.00AM to 12.30PM, 5.30 PM to 8.30 PM</td>
                                            </tr>
                                            <tr>
                                                <td style={{ fontSize: '22px' }}>Tuesday</td>
                                                <td style={{ fontSize: '22px' }}>8.00AM to 12.30PM, 5.30 PM to 8.30 PM</td>
                                            </tr>
                                            <tr>
                                                <td style={{ fontSize: '22px' }}>Wensday</td>
                                                <td style={{ fontSize: '22px' }}>5.30 PM to 8.30 PM</td>
                                            </tr>
                                            <tr>
                                                <td style={{ fontSize: '22px' }}>Thursday</td>
                                                <td style={{ fontSize: '22px' }}>8.00AM to 12.30PM, 5.30 PM to 8.30 PM</td>
                                            </tr>
                                            <tr>
                                                <td style={{ fontSize: '22px' }}>Friday</td>
                                                <td style={{ fontSize: '22px' }}>8.00AM to 12.30PM</td>
                                            </tr>
                                            <tr>
                                                <td style={{ fontSize: '22px' }}>Saturday</td>
                                                <td style={{ fontSize: '22px' }}>8.00AM to 12.30PM, 5.30 PM to 8.30 PM</td>
                                            </tr>
                                        </tbody></table>

                                </div>

                                
                                <div className='col-6'>
                                    <table className='quesanswr'>
                                        <tbody>
                                            <tr className="question-row">
                                                <th>
                                                    1. What are the physical and mental aspects of homeopathy?
                                                </th>
                                            </tr>
                                            <tr className="answer-row">
                                                <td>
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer assumenda shoreditch et. Nihil anim keffiyeh helvetica,
                                                </td>
                                            </tr>

                                            <tr className="question-row">
                                                <th>
                                                    2. Can such small doses be effective?
                                                </th>
                                            </tr>
                                            <tr className="answer-row">
                                                <td>
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
                                                </td>
                                            </tr>

                                            <tr className="question-row">
                                                <th>
                                                    3. How can the correct homeopathic remedy be found?
                                                </th>
                                            </tr>
                                            <tr className="answer-row">
                                                <td>
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
                                                </td>
                                            </tr>

                                            <tr className="question-row">
                                                <th>
                                                    4. Is homeopathy merely psychological?
                                                </th>
                                            </tr>
                                            <tr className="answer-row">
                                                <td>
                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='aboutusmid'>
                <div>
                    <h1>Enjoy good health at Eman Hospital</h1>
                    <p>All devices are advanced and fully care for patients and fast response to critical situations</p></div>

                <div className='row medals'>
                    <div className='col-3 medallogo'>
                        <img src={abooutlogo} className='midlogo' alt="aboutlog"></img>
                        <h2 className='mt-3'>5000 Patients</h2>
                        <p className='mt-3 p-5'>
                            5000 patients through full hospital treatment<br></br> You can visit the hospital to<br></br> get the highest possible treatment </p>
                    </div>

                    <div className='col-3 medallogo2'>
                        <img src={liflogo} className='midlogo'></img>
                        <h2 className='mt-3'>H24 Support</h2>
                        <p className='mt-3 p-5'>
                            Round-the-clock support is committed to the full care of the patient and our doctors from all over the world</p>
                    </div>
                    <div className='col-3 medallogo3'>
                        <img src={librarylog} className='midlogo'></img>
                        <h2 className='mt-4'>+75 Locations</h2>
                        <p className='mt-3 p-5'>

                            With direct line +200036541 you can contact and communicate with us now we hair you
                        </p>
                    </div>
                </div>
            </div>


            <footer className="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-info container">
                                    <h3 style={{ fontWeight: 'bolder', fontSize: '29px' }} className='mb-4'>SMART HOSPITAL</h3>
                                    <p>
                                        A108 Adam Street <br />
                                        NY 535022, USA<br /><br />
                                        <strong>Phone:</strong> +1 5589 55488 55<br />
                                        <strong>Email:</strong> info@example.com<br />
                                    </p>
                                    <div className="social-links mt-5">
                                        <a href="#" className="twitter"
                                            style={{ backgroundColor: ' #06b2b6', color: 'white', borderRadius: '8px', fontSize: '28px' }}>
                                            <FaTwitter /></a> &nbsp;

                                        <a href="#" className="facebook"
                                            style={{ backgroundColor: ' #06b2b6', color: 'white', borderRadius: '8px', fontSize: '30px' }}>
                                            <FaFacebook /></a>
                                        &nbsp;
                                        <a href="#" className="instagram"
                                            style={{ backgroundColor: ' #06b2b6', color: 'white', borderRadius: '8px', fontSize: '30px' }}>
                                            <FaInstagram /></a>
                                        &nbsp;

                                        <a href="#" className="google-plus"
                                            style={{ backgroundColor: ' #06b2b6', color: 'white', borderRadius: '8px', fontSize: '30px' }}>
                                            <FaSkype /></a>
                                        &nbsp;
                                        <a href="#" className="linkedin"
                                            style={{ backgroundColor: ' #06b2b6', color: 'white', borderRadius: '8px', fontSize: '30px' }}>
                                            <FaLinkedin /></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4 style={{ fontWeight: 'bold', fontSize: '25px' }}>Main Menu</h4>
                                <ul>
                                    <Link to='/home'><li>Home</li></Link>
                                    <Link to="/doctor"><li>Doctor</li></Link>
                                    <Link to="/appointment"> <li>Appointment</li></Link>
                                    <Link to='/departmenting'><li>Department</li></Link>
                                    <li><a href="#">Terms of service</a></li>
                                    <li><a href="#">Privacy policy</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links  ">
                                <h4 style={{ fontWeight: 'bold', fontSize: '25px' }}>Get Help</h4>
                                <ul className='container'>
                                    <Link to='/about'><li>About us</li></Link>
                                    <Link to="/contact"> <li>Contact</li></Link>
                                    <Link to="/blog"> <li>Blog</li></Link>
                                    <li><a href="#">Product Management</a></li>
                                    <li><a href="#">Marketing</a></li>
                                    <li><a href="#">Graphic Design</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                <h4 style={{ fontWeight: 'bold', fontSize: '25px' }}>Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                <form action="" method="post">
                                    <input type="email" name="email" />
                                    <input type="submit" value="Subscribe" style={{ backgroundColor: '#06b2b6', color: 'white' }} />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>



        </div>
    )
}