import { Link } from 'react-router-dom';
import './department.css';
import '@fortawesome/fontawesome-free/css/all.css';
import imagesss from './doctor.png';
import images2 from './departmetn2-removebg-preview.png';
import images3 from './360_F_225707294_V0jKFrHm1Bm5mLQjTAhKFplaWQIgdHby-removebg-preview.png';
import testimonals from './testimonials-5.jpg';
import testimonal2 from './testimonials-2.jpg';
import testtimonal3 from './testimonials-3.jpg';
import testimonal4 from './testimonials-4.jpg';
import { FaTwitter, FaFacebook, FaInstagram, FaSkype, FaLinkedin } from 'react-icons/fa';

export function DepartmentPage() {
    return (
        <>
            <div className='headers'>
                <div>
                    <h1>DEPARTMENTS</h1>
                    <hr className='horzintal'></hr>
                </div>

                <p className='header_para'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
                    Sit sint consectetur velit. Quisquam quos quisquam cupiditate. <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>







                <div className='header_content' style={{ backgroundColor: '#06b2b6', color: 'white' }}>

                    <div className='row'>

                        <div className='col-lg-4 '>
                            <div style={{ marginLeft: '30px' }}>
                                <ul style={{ listStyle: 'none', padding: 19 }}>


                                    <li style={{ borderBottom: '1px solid white', width: '299px' }} className='mt-4'>
                                        <a href="#anesthtics" style={{ color: 'white', textDecoration: 'none' }}>
                                            Anesthetics
                                        </a>
                                    </li>
                                    <li style={{ borderBottom: '1px solid white', width: '299px' }} className='mt-3'>
                                        <a href="#cardiology" style={{ color: 'white', textDecoration: 'none' }}>
                                            Cardiology
                                        </a>
                                    </li>
                                    <li style={{ borderBottom: '1px solid white', width: '299px' }} className='mt-4'>
                                        <a href="#gastroenterology" style={{ color: 'white', textDecoration: 'none' }}>
                                            Gastroenterology
                                        </a>
                                    </li>
                                </ul>
                                &nbsp;&nbsp;&nbsp;
                                <div className="appointment-btn " style={{ backgroundColor: 'white', width: '320px', height: '70px', borderRight: '12px' }}>
                                    &nbsp;&nbsp;&nbsp;
                                    <a href="/appointment" style={{ color: '#06b2b6', textDecoration: 'none', fontSize: '28px' }}>
                                        <i className="fa fa-calendar" style={{ color: '#06b2b6', fontSize: '30px', marginLeft: '17px', marginTop: '14px' }}></i>&nbsp;Book Appointment
                                    </a>
                                    <p className="mt-5" style={{ textAlign: 'center', fontSize: '19px' }}>For Emergency Contact</p>
                                    <h2 className='mt-5' style={{ textAlign: 'center' }}>1-800-400-7400</h2>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-8 imagesOfDOctot'>

                            <div id='default-image' className='content'>
                                <h2>Anesthetics</h2>
                                <img src={imagesss} alt='Anesthetics' />
                                <p style={{ fontSize: '20px' }}>Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                            </div>

                            


                            <div id="anesthtics" className="content">
                                <h2>Anesthtics</h2>
                                <img src={imagesss}></img>
                                <p style={{ fontSize: '20px' }}>Qui laudantium consequatur laborum sit qui ad sapiente<br></br> dila parde sonata raqer a videna mareta paulona marka</p>
                            </div>

                            <div id="cardiology" className="content">
                                <h2>Cardiology</h2>
                                <img src={images2}></img>
                                <p style={{ fontSize: '20px' }}>Qui laudantium consequatur laborum sit qui ad sapiente dila <br></br>parde sonata raqer a videna mareta paulona marka</p>
                            </div>

                            <div id="gastroenterology" className="content">
                                <h2>Gastroenterology</h2>
                                <img src={images3}></img>
                                <p style={{ fontSize: '20px' }}>Qui laudantium consequatur laborum sit qui ad<br></br> sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='arranged'>


                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia distinctio quam quo numquam vel voluptates, veritatis maxime neque modi doloremque iste? Hic fugiat cumque asperiores repellendus voluptatum possimus error Lorem, <ipsum className="lorem12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, excepturi nulla. Omnis.</ipsum></p>
                </div>

                <div>
                </div>

                <div className='testimonals'>
                    <h1>TESTIMONALS</h1>
                    <hr className='horzintal'></hr>
                </div>
                <p className='header_para'>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
                    Sit sint consectetur velit. Quisquam quos quisquam cupiditate. <br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>

                <div className="box-container">

                    <div className="box">

                        <div className="testimonial-item">
                            <p style={{ fontSize: '24px', fontFamily: 'inherit' }}>

                                " Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid."

                            </p>
                            <img src={testimonals} />
                            <h3 style={{ fontWeight: 'bolder' }}>John Larson</h3>
                            <h4>Entrepreneur</h4>
                        </div>
                    </div>


                    <div className="box">
                        <div className="testimonial-item">
                            <p style={{ fontSize: '24px', fontFamily: 'sans-serif' }}>

                                " Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid."

                            </p>
                            <img src={testimonal2} />
                            <h3 style={{ fontWeight: 'bolder' }}>Sara Wilsson</h3>
                            <h4>Designer</h4>
                        </div>
                    </div>



                    <div className="box" >
                        <div className="testimonial-item" >
                            <p style={{ fontSize: '24px', fontFamily: 'sans-serif' }}>


                                "" Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.""


                            </p>
                            <img src={testtimonal3} />
                            <h3 style={{ fontWeight: 'bolder' }}>Jenia Karlis</h3>
                            <h4>Store Owner</h4>
                        </div>
                    </div>


                    <div className="box" >
                        <div className="testimonial-item" >
                            <p style={{ fontSize: '24px', fontFamily: 'sans-serif' }}>


                                " Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper."





                            </p>
                            <img src={testimonal4} />
                            <h3 style={{ fontWeight: 'bolder' }}>Soul Goodman</h3>
                            <h4>Ceo & Founder</h4>
                        </div>
                    </div>

                    <div className="box">
                        <div className="testimonial-item" >
                            <p style={{ fontSize: '24px', fontFamily: 'sans-serif' }}>


                                "" Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.""


                            </p>
                            <img src={testtimonal3} />
                            <h3 style={{ fontWeight: 'bolder' }}>Jenia Karlis</h3>
                            <h4>Store Owner</h4>
                        </div>

                    </div>

                    <div className="box" >ere
                        <div className="testimonial-item" >
                            <p style={{ fontSize: '24px', fontFamily: 'sans-serif' }}>


                                "" Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.""


                            </p>
                            <img src={testtimonal3} />
                            <h3 style={{ fontWeight: 'bolder' }}>Jenia Karlis</h3>
                            <h4>Store Owner</h4>
                        </div>
                    </div>


                    <div className="box">
                        <div className="testimonial-item">
                            <p style={{ fontSize: '24px', fontFamily: 'sans-serif' }}>

                                " Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid."

                            </p>
                            <img src={testimonal2} />
                            <h3 style={{ fontWeight: 'bolder' }}>Sara Wilsson</h3>
                            <h4>Designer</h4>
                        </div>
                    </div>
                </div>



                <footer className="footer mt-2">
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
                                    <form>
                                        <input type="email" name="email" />
                                        <input type="submit" value="Subscribe" style={{ backgroundColor: '#06b2b6', color: 'white' }} />
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