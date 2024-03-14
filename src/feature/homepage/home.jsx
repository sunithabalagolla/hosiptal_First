import './home.css';
import doctor from './doctor.png';

import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from 'react-router-dom';

import { FaTwitter, FaFacebook, FaInstagram, FaSkype, FaLinkedin } from 'react-icons/fa';







export function HomeComponent() {


    return (
        <>

            <div className="home-page row ">
                <div className="left-section col-5">
                    <img src={doctor} alt="Doctor" className="doctor-image" />
                </div>
                <div className="right-section col-7 mt-5">
                    <div className='responsive'>
                    <div className="top-text ">
                        <p style={{ fontSize: '80px' }}>Welcome to Smart Hospital</p>
                    </div>
                    </div>
                    <div className="top-text mt-1">
                        <p style={{ fontSize: '34px' }}> Your health is our priority. We are here to provide the best medical care.</p>
                    </div>
                    <div className="bottom-text mt-4">
                        <p style={{ fontSize: '27px' }} className='mt-3'>Dedicated to providing multidisciplinary medical care and backed by state-of-the-art facilities,Caring for your well-being with compassion and expertise </p>
                    </div>
                    <div className="bottom-text mt-5 " style={{ textAlign: 'center' }}>
                        <p style={{ fontSize: '27px' }} className='mt-3'><button style={{ textAlign: 'center', marginRight: '350px', width: '320px', height: '80px', color: 'white', borderRadius: '30px', backgroundColor: '#06b2b6', border: '2px #06b2b6 solid' }} >More Features</button></p>
                    </div>
                </div>

            </div>








            <div className='key-features'>
                <div className='row '>
                    <div className='col-3 key-one key-single'><i className="fas fa-plus-square"></i><b style={{ fontSize: '30px' }}>Care about your Health</b></div>
                    <div className='col-3 key-two key-single'><i className="fas fa-user-md"></i><b style={{ fontSize: '30px' }}>Professional Doctors</b></div>
                    <div className='col-3 key-three key-single'><i className="fas fa-wheelchair"></i><b style={{ fontSize: '30px' }}>15000+ People Treated</b></div>
                    <div className='col-3 key-four key-single'><i className="fas fa-plus-square"></i><b style={{ fontSize: '30px' }}>Fast and Flex Service</b></div>
                </div>
            </div>



            <div className='featured-services '>


                <div className="row ">
                    <div className="col-3 icon1">
                        <div>
                            <div className="icon"><i class="fas fa-heartbeat"></i></div>
                            <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                            <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                        </div>
                    </div>


                    <div className="col-3 icon1">
                        <div>
                            <div className="icon"><i class="fas fa-pills"></i></div>
                            <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                            <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                        </div>
                    </div>

                    <div className="col-3 icon1">
                        <div>
                            <div className="icon"><i class="fas fa-thermometer"></i></div>
                            <h4 className="title"><a href="">Magni Dolores</a></h4>
                            <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                        </div>
                    </div>

                    <div className="col-3 icon1">
                        <div>
                            <div className="icon"><i class="fas fa-dna"></i></div>
                            <h4 className="title"><a href="">Nemo Enim</a></h4>
                            <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                        </div>
                    </div>
                </div>

            </div>


            <div className="appointment_page">
                <div className="containers">

                    <div className="text-center">
                        <h3>In an emergency? Need help now?</h3>
                        <p className='container'> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>


                        <Link to="/appointment" className='appointment ' ><button>Make an Make an Appointment</button></Link>

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
                                <form>
                                    <input type="email" name="email"/>
                                    <input type="submit" value="Subscribe" style={{backgroundColor:'#06b2b6',color:'white'}}  />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </>

    )
}