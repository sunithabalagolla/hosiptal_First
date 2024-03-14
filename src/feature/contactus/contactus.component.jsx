import { EnvelopeAt, GeoAlt, Map, Phone, Telephone } from "react-bootstrap-icons";
import './contactus.component.css';
import sethoscope from '../../assests/images/sethoscope.jpg';
import { Facebook, Google, Instagram, Linkedin, Twitter } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

import { FaTwitter, FaFacebook, FaInstagram, FaSkype, FaLinkedin } from 'react-icons/fa';
import { getContact, saveContact } from "../../services/contactushome.serive";
import { useEffect, useState } from "react";


export function ContactUs() {






    return (
        <div className="mt-4">
            <div className='abouthead' >
                
            <div>
                    <h1 style={{fontSize:'50px',fontWeight:'bolder',textAlign:'center',marginTop:'30px',color:' rgb(57, 53, 53)'}}>CONTACTUS</h1>
                    <hr className='horzintal'></hr>
                </div>
                <p className="mt-0">
                    Please Call Us Or Complete The Form Below And We Will Get To You Shortly</p>

            </div>

            <div className="mapOfCOntactus">
                   

                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15224.752470234911!2d78.38399569680045!3d17.450708035154157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f201b205%3A0x11bbe7be7792411b!2sMadhapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1703417496177!5m2!1sen!2sin" 
                  width="100%"
                   height="600"
                    style={{ border: 0 }} 
                    allowfullscreen="" loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>

       

            <section className="contact">
            <br></br><br></br><br></br>
                <div className="content">
                    <h2>Contact Us</h2>
                    <p>Have any questions?Reach out to us from our contact form  and<br></br> we will get back to you shortly</p>
                </div>

                <div className="containert">
                    <div className="contactinfo">
                        <div className="boxs " style={{marginTop:'90px'}}>
                            <div className="icon" style={{color:'white',fontSize:'50px'}}><GeoAlt></GeoAlt></div>
                            <div className="text">
                                <h2 style={{color:'white',fontWeight:'bolder',fontSize:'50px'}}>Address</h2>
                                <p style={{color:'white',fontSize:'23px'}}>20033  Hitech-tech camp Road,<br></br>Madhapur,Hyderabad<br></br>500018</p>
                            </div>
                        </div>

                        <div className="boxs mt-3">
                            <div className="icon"  style={{color:'white',fontSize:'50px'}}><Telephone></Telephone></div>
                            <div className="text">
                                <h2 style={{color:'white',fontWeight:'bolder',fontSize:'50px'}}>Phone</h2>
                                <p style={{color:'white',fontSize:'23px'}}>4045-389-980</p>
                            </div>
                        </div>

                        <div className="boxs mt-3">
                            <div className="icon"  style={{color:'white',fontSize:'50px'}}><EnvelopeAt></EnvelopeAt></div>
                            <div className="text">
                                <h2 style={{color:'white',fontWeight:'bolder',fontSize:'50px'}}>Email</h2>
                                <p style={{color:'white',fontSize:'23px'}}>propertyViews3230@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <br></br><br></br><br></br>
                    <div className="contactForm mt-5">
                        
                        <form method="post" action="http://localhost:4000/savecontact">
                            <h2 >Send Message</h2>
                            <br></br>
                            <div className="inputbox">
                                <input type="text" id="fullNameInput" required  name="name"/>
                                <span htmlFor="fullNameInput">Full Name</span>
                            </div>

                            <div className="inputbox">
                                <input type="email" id="emailInput" required name="email" />
                                <span htmlFor="emailInput">Email</span>
                            </div>
                            <div className="inputbox">
                                <textarea id="messageInput" required name="message"></textarea>
                                <span htmlFor="messageInput">Type Your Message</span>
                            </div>

                            <div className="inputbox">
                                <input type="submit" value="save" className="typesubmit" ></input>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

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
                                        style={{ backgroundColor: ' #06b2b6', color: 'white', borderRadius: '8px' ,fontSize:'28px'}}>
                                        <FaTwitter /></a> &nbsp;

                                        <a href="#" className="facebook"
                                         style={{ backgroundColor: ' #06b2b6', color: 'white', borderRadius: '8px' ,fontSize:'30px'}}>
                                        <FaFacebook /></a>
                                        &nbsp;
                                        <a href="#" className="instagram"
                                         style={{ backgroundColor: ' #06b2b6', color: 'white', borderRadius: '8px' ,fontSize:'30px'}}>
                                        <FaInstagram /></a>
                                        &nbsp;

                                        <a href="#" className="google-plus"
                                         style={{ backgroundColor: ' #06b2b6', color: 'white', borderRadius: '8px' ,fontSize:'30px'}}>
                                        <FaSkype /></a>
                                        &nbsp;
                                        <a href="#" className="linkedin"
                                         style={{ backgroundColor: ' #06b2b6', color: 'white', borderRadius: '8px' ,fontSize:'30px'}}>
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
                                    <input type="submit" value="Subscribe" style={{backgroundColor:'#06b2b6',color:'white'}} />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

