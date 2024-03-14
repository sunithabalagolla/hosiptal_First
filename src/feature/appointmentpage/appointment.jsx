import './appintment.css';
import { Link } from 'react-router-dom';


import { FaTwitter, FaFacebook, FaInstagram, FaSkype, FaLinkedin } from 'react-icons/fa';

export function AppointmentPage() {
    return (
        <>
            <div className='appintment_header'>
                <div>
                    <h1>APPOINTMENT</h1>
                    <hr className='horzintal'></hr>
                </div>
                <p className='appointmetnheader_para'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
                    Sit sint consectetur velit. Quisquam quos quisquam cupiditate. <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>


                <div className='formofappointment'>

                    <form>




                        <div>

                            <div className="form-group container">
                                <label for="" className="text-uppercase  c-gray-light mt-4" style={{fontSize:'23px'}}>
                                    Name                            </label>
                                <input type="text" className="form-control mt-2" placeholder="" name="name" style={{height:'60px'}} />
                            </div>

                            <div className="form-group container mt-4">
                                <label for="" className="text-uppercase c-gray-light" style={{fontSize:'23px'}}>
                                    Email                            </label>
                                <input type="email" className="form-control input-lg mt-2" placeholder="" name="email" />
                            </div>

                            <div class="form-group container mt-4">
                                <label for="" class="text-uppercase c-gray-light" style={{fontSize:'23px'}}>
                                    Phone                            </label>
                                <input type="text" className="form-control input-lg mt-2" placeholder="" name="phone" />
                            </div>
                        </div>

                        <div class="form-group container mt-4">
                            <label for="" className="text-uppercase c-gray-light" style={{fontSize:'23px'}}>
                                Date                        </label>

                            <input type="date" className="form-control input-lg mt-2" placeholder="" name="date" />
                        </div>

                        <div className="form-group container mt-4">
                            <label for="" class="text-uppercase c-gray-light" style={{fontSize:'23px'}}>
                                Department</label>
                            <select className="form-control mt-2" name="department_id" id="dept_select"  >
                                <option value="0">Select A Department</option>
                                <option value="1">
                                    Anesthetics                                </option>
                                <option value="2">
                                    Cardiology                                </option>
                                <option value="3">
                                    Gastroenterology                                </option>
                            </select>
                        </div>

                        <div className="form-group container mt-4">
                            <label for="" className="text-uppercase c-gray-light mt-2" style={{fontSize:'23px'}}>
                                Doctor                        </label>
                            <div id="doctor_list">
                                <input type="text" className="form-control input-lg" value="Select A Department First" disabled="" />
                            </div>
                        </div>

                        <div className="form-group container mt-4" style={{fontSize:'23px'}}>
                            <label  className="text-uppercase c-gray-light">
                                Message                        </label>
                            <textarea className="form-control no-resize mt-2" rows="5" name="message" placeholder="Your Message To The Doctor"></textarea>
                        </div>

                        
                        <Link to="/appointment" className='appointment ' ><button> Make an Appointment</button></Link>
                    </form>

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
            </div>
        </>
    )
}