import './blog.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import { Link } from 'react-router-dom';

import { FaTwitter, FaFacebook, FaInstagram, FaSkype, FaLinkedin } from 'react-icons/fa';

export function BlogPage() {
    return (
        <>
            <div>

                <div className='blog_header'>
                    <div>
                        <h1>BLOG</h1>
                        <hr className='horzintal'></hr>
                    </div>
                    <p className='blog_para'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
                        Sit sint consectetur velit. Quisquam quos quisquam cupiditate. <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>


                <div className='section-content'>

                    <div class="containers">
                        <h1 className='top-text'>Welcome to Smart Hospital</h1>
                        <h2 className='mt-3 text-right'>Where Healthcare Meets Innovation and Empowering health through smart technology and compassionate care</h2>
                        <div className='mt-5'>
                            <a href="#about" className="button_get text-down" >Get Started</a></div>
                    </div>

                    <div className='slide-content'>
                        <div className='slideOne-content'>Your health, our priority – where care meets compassion.</div>
                        <div className='slideTwo-content'>Caring for your well-being with compassion and expertise</div>
                        <div className='slideThree-content' >Your health, our commitment – delivering excellence in care</div>
                        <div className='slideFour-content'>Innovative healthcare, personalized for you, at our hospital</div>
                    </div>

                </div>


                <section>
                    <div className="containers">
                        <div className="row">
                            <div className="contents col-3">
                                <h3 className='container'>Why Choose <br></br>Medilab?</h3>
                                <p className='container'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                                </p>
                                <div className="text-center mt-3">
                                    <a href="#" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
                                </div>
                            </div>


                            <div className="col-xl-2 d-flex contentOne ">
                                <div className="icon-box mt-4 mt-xl-0">
                                    <i className="bx bx-receipt"></i>
                                    <h4>&nbsp;&nbsp;&nbsp;&nbsp;Corporis voluptates &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sit</h4>
                                    <p style={{ fontSize: '20px' }}>Consequuntur sunt aut quasi enim&nbsp;&nbsp;&nbsp;&nbsp; aliquamquae
                                        harum pariatur laboris<br></br>&nbsp;&nbsp;nisi ut aliquip</p>
                                </div>
                            </div>


                            <div className="col-xl-2 d-flex contentTwo">
                                <div className="icon-box mt-4 mt-xl-0">
                                    <i className="bx bx-cube-alt"></i>
                                    <h4>&nbsp;&nbsp;&nbsp;&nbsp;Ullamco laboris &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ladore
                                        pan</h4>
                                    <p style={{ fontSize: '20px' }}>Excepteur sint occaecat cupidatat non &nbsp;&nbsp;&nbsp;&nbsp; proident, sunt in culpa qui officia deserunt</p>
                                </div>
                            </div>
                            <div className="col-xl-2 d-flex contentThree">
                                <div className="icon-box mt-4 mt-xl-0">
                                    <i className="bx bx-images" ></i>
                                    <h4>Labore consequatur</h4>
                                    <p style={{ fontSize: '20px' }}>Aut suscipit aut cum nemo deleniti aut omnis. Doloribusbsp;&nbsp;&nbsp;&nbsp; ut maiores omnis facere</p>
                                </div>
                            </div>

                        </div>




                    </div>
                </section>

                <section className="features">
                    <div className='feature_div'>

                        <div className="row">
                            <div className="col-lg-6 features_content" >
                                <div className="icon-box mt-5 ">
                                    <i className="bx bx-receipt"></i>
                                    <h4>Est labore ad</h4>
                                    <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                </div>
                                <div className="icon-box mt-5">
                                    <i className="bx bx-cube-alt"></i>
                                    <h4>Harum esse qui</h4>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                </div>
                                <div className="icon-box mt-5">
                                    <i className="bx bx-images"></i>
                                    <h4>Aut occaecati</h4>
                                    <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                                </div>
                                <div className="icon-box mt-5">
                                    <i className="bx bx-shield"></i>
                                    <h4>Beatae veritatis</h4>
                                    <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                                </div>
                            </div>
                            <div className="images col-lg-6  mt-5" ></div>
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

        </>
    )
}