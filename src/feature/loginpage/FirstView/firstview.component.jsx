import './firstview.component.css';
import logoPurple from './Handdrawn_Circle_Logo-removebg-preview (1).png';
import hms from '../Hospital.gif';
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from 'react-router-dom';


export function FirstViewComponent() {
    return (
        <>
            <div className='header_div'>
                <img src={logoPurple} className='logopurple' style={{marginLeft:'-120px',fontSize:'150px'}} alt='Logo'></img>
                <div className='header_contents'>
                    <span style={{fontSize:'59px',color:'#06b2b6',marginLeft:'120px'}}>SMART HOSPTIAL</span>
                    <h3 style={{color:'#06b2b6',marginLeft:'60px'}}>Health Management System</h3>
                </div>
            </div>


            <div className='section_middle'>
                <div className='row'>
                    <div className='col-8'>
                        <img src={hms} className='hmspic' alt='Logohtm' style={{width:'1200px',height:'900px',marginLeft:'220px'}}></img>
                    </div>


                    <div className='col-4'>
                        <div className="list-item">
                            <ul>
                                <li>
                                    <Link to='/loginS' className="btn btn-lg btn-round ">
                                        <i className="fa fa-user-secret"></i>ADMIN LOGIN
                                    </Link>
                                </li>


                               

                                <li>
                                    <a href="#" className="btn btn-lg btn-round">
                                        <i className="fa fa-user-md" ></i>DOCTOR LOGIN
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="btn  btn-lg btn-round ">
                                        <i className="fas fa-bed"></i>PATIENT LOGIN
                                    </a>
                                </li>


                                <li>
                                    <a href="#" className="btn btn-lg btn-round">
                                        <i className="fa fa-usd"></i>NURSE LOGIN
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="btn  btn-lg btn-round ">
                                        <i className="fa fa-ioxhost"></i>RECEPTIONIST LOGIN
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="btn btn-lg btn-round" >
                                        <i className="fa fa-user"></i>LABORATORIST LOGIN
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="btn btn-lg  btn-round" >
                                        <i className="fa fa-user"></i>PHARMACIST LOGIN
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="btn  btn-lg btn-round ">
                                        <i className="fa fa-user"></i>ACCOUNTANT LOGIN
                                    </a>
                                </li>

                                

                                



                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}


