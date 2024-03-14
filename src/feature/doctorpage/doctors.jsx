import './doctor.css';
import React from 'react';
import doctor1 from './doctor1.jpg';
import doctor2 from './doctor.4.jpg';
import doctor3 from './doctor.3.jpg';
import doctor4 from './doctor.6.jpg';
import doctor5 from './doctor.7.jpg';

import doctor6 from './doctor.8.jpg';
import doctor7 from './doctor.9.jpg';
import doctor8 from './doctor.10.jpg';
import doctor9 from './doctor.11.jpg';
import doctor10 from './doctor.12.jpg';
import { Facebook, Instagram, Linkedin, Twitter } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

import { FaTwitter, FaFacebook, FaInstagram, FaSkype, FaLinkedin } from 'react-icons/fa';




export function DoctorPage() {
  const doctorsData = [
    { id: 1, name: 'Dr. Amy Anderson', specialization: 'Cardiologist', image: doctor1 },
    { id: 2, name: 'Dr. Jane Smith', specialization: 'Orthopedic Surgeon', image: doctor2 },
    { id: 3, name: 'Dr. Kaira peters', specialization: 'Dermatologists', image: doctor3 },
    { id: 4, name: 'Dr. Janaki Subramanyam', specialization: 'Gastroenterologists', image: doctor4 },
    { id: 5, name: 'Dr. Naina clare', specialization: 'Hematologist', image: doctor5 },
    { id: 6, name: 'Dr. Nelson Cook', specialization: 'Neurologist', image: doctor6 },
    { id: 7, name: 'Dr. Joe Saldana', specialization: 'Nephrologist', image: doctor7 },
    { id: 8, name: 'Dr. Anjan Selva', specialization: 'Gynecologist', image: doctor8 },
    { id: 9, name: 'Dr. Klin jackson', specialization: 'Oncologist', image: doctor9 },
    { id: 10, name: 'Dr. Susan Joen', specialization: 'Ophthamologist', image: doctor10 },



  ];
  return (
    <div>

      <div className='abouthead'>
  
               <div>
                    <h1 style={{fontSize:'50px',fontWeight:'bolder',textAlign:'center',marginTop:'30px',color:' rgb(57, 53, 53)'}}>OUR DOCTORS</h1>
                    <hr className='horzintal'></hr>
                </div>

        <p className='mb-5' style={{ fontSize: '20px' }}>Qualified Healthcare Professionals</p>

      </div>







      <div className="app">
        <div className='apps'>
        <h1 className='doctorsheading'>Hospital Management</h1>
        <div className="doctor-list">
          {doctorsData.map((doctor) => (
            <div key={doctor.id} className="doctor-container">
              <img src={doctor.image} alt={doctor.name} className="doctor-image" />
              <div className="doctor-details">
                <h3>{doctor.name}</h3>
                <p>{doctor.specialization}</p>
                <Instagram style={{ fontSize: '24px' }}></Instagram>&nbsp;&nbsp;
                <Facebook style={{ fontSize: '24px' }}></Facebook>&nbsp;&nbsp;
                <Twitter style={{ fontSize: '24px' }}></Twitter>&nbsp;&nbsp;
                <Linkedin style={{ fontSize: '24px' }}></Linkedin>
              </div>
            </div>
          ))}
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