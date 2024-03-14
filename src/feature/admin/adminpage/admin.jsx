
import { Link } from 'react-router-dom';
import './admin.css';
import whiteicon from './adminicon.png';
import adminicon from './adminlogo-removebg-preview.png';
import dashicon from './dashboard.png';
import { Laptop } from 'react-bootstrap-icons';
export function AdminHead() {
    return (
        <>
            {/* <div>
            <img src={whiteicon} style={{width:'320px',marginRight:'1300px'}}></img>
                <span style={{color:'white'}}>SMART HOSPTIAL</span>
            </div> */}

            {/* <hr style={{color:'white',marginTop:'-20px'}}></hr> */}
            {/*               
              <div className='admindiv'>
                 <div className='row'>
                    <div className='col-3 mb-4'>
                    <img src={whiteicon} style={{width:'430px',height:'192px',marginLeft:'-170px',marginTop:'-60px'}}></img>
                    </div>
                    
                    <div className='col-9 mt-4 '>
                    <span style={{color:'white',fontSize:'29px',marginTop:'90px',fontWeight:'bolder'}}>SMART HOSPTIAL</span>
                    </div>
                   
                   
                 </div> */}

            <div className='adminHeader ' >
                <div className='row'>
                    <div className='col-1 mt-3'>
                        <img src={adminicon} style={{ width: '76px', marginLeft: '50px' }}></img>
                    </div>
                    <div className='col-11' style={{ color: 'white', marginLeft: '150px', marginTop: '-60px' }}>
                        <span>Welcome,</span>
                        <h3>Mr.Admin</h3>
                       
                    </div>
                    
                </div>
                <hr style={{color:'white'}}></hr> 

                <div className='dashboard'>
                    <ul className='unordered_item '>
                        <li>
                            <i class="fa fa-desktop" style={{color:'white',fontSize:'30px'}}></i>&nbsp;&nbsp;&nbsp;&nbsp;
                            
                            <Link  to="/dashboard" style={{color:'white',textDecoration:'none',fontSize:'22px'}}>Dashboard</Link>
                            
                        </li>
                    </ul>
                    <ul className='unordered_item mt-4'>
                        <li>
                            <i class="fa fa-sitemap" style={{color:'white',fontSize:'30px'}}></i>&nbsp;&nbsp;&nbsp;&nbsp;
                           
                            <Link to="/departmentadmin" style={{color:'white',textDecoration:'none',fontSize:'22px'}}>Department</Link>
                            
                        </li>
                    </ul>

                    <ul className='unordered_item mt-4'>
                        <li>
                       
                            <i class="fa fa-user-md" style={{color:'white',fontSize:'30px'}}></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           
                            <Link to="/doctors" style={{color:'white',textDecoration:'none',fontSize:'22px'}}>Doctor</Link>
                            
                        </li>
                    </ul>
                    <ul className='unordered_item mt-4'>
                        <li>
                       
                            <i class="fa fa-user" style={{color:'white',fontSize:'30px'}}></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           
                            <Link to="/patient" style={{color:'white',textDecoration:'none',fontSize:'22px'}}>Patient</Link>
                            
                        </li>
                    </ul>

                    <ul className='unordered_item mt-4'>
                        <li>
                       
                            <i class="fa fa-plus-square" style={{color:'white',fontSize:'30px'}}></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        
                            <Link to="/nurse" style={{color:'white',textDecoration:'none',fontSize:'22px'}}>Nurse</Link>
                            
                        </li>
                    </ul>

                    <ul className='unordered_item mt-4'>
                        <li>
                       
                            <i className="fa fa-medkit" style={{color:'white',fontSize:'30px'}}></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        
                            <Link to="/pharmacist" style={{color:'white',textDecoration:'none',fontSize:'22px'}}>Pharmacist</Link>
                            
                        </li>
                    </ul>

                    <ul className='unordered_item mt-4'>
                        <li>
                       
                            <i className="fa fa-user" style={{color:'white',fontSize:'30px'}}></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           
                            <Link to="/labprstorist" style={{color:'white',textDecoration:'none',fontSize:'22px'}}>Laboratorist</Link>
                            
                        </li>
                    </ul>
                    <ul className='unordered_item mt-4'>
                        <li>
                           <i className="fas fa-money-bill" style={{color:'white',fontSize:'30px'}}></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           <Link to="/accountant"style={{color:'white',textDecoration:'none',fontSize:'22px'}}>Accountant</Link>
                            
                        </li>
                    </ul>

                    <ul className='unordered_item mt-4'>
                        <li>

                        <i className="fa fa-plus-square"  style={{color:'white',fontSize:'30px'}}></i>
                       
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           
                            <Link to="/receptionist" style={{color:'white',textDecoration:'none',fontSize:'22px'}}>Receptionist</Link>
                            
                        </li>
                    </ul>
                    <ul className='unordered_item mt-4'>
                        <li>
                
                        <i className="fa fa-sun"  style={{color:'white',fontSize:'30px'}}></i>
                       
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                           
                            <Link style={{color:'white',textDecoration:'none',fontSize:'22px'}}>Monitor Hospital</Link>
                            
                        </li>
                    </ul>

                    <ul className='unordered_item mt-4'>
                        <li>
                
                        <i className="fa fa-tag"  style={{color:'white',fontSize:'30px'}}></i>
                       
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Link style={{color:'white',textDecoration:'none',fontSize:'22px'}}>Payroll</Link>
                            
                        </li>
                    </ul>

                    <ul className='unordered_item mt-4'>
                        <li>
                        
                        <i className="fa fa-file-text"  style={{color:'white',fontSize:'30px'}}></i>
                       
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Link to="/notice"style={{color:'white',textDecoration:'none',fontSize:'22px'}}>Noticeboard</Link>
                            
                        </li>
                    </ul>

                    
                    <ul className='unordered_item mt-4'>
                        <li>
                        
                        <i className="fa fa-wrench"  style={{color:'white',fontSize:'30px'}}></i>
                       
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Link style={{color:'white',textDecoration:'none',fontSize:'22px'}}>Settings</Link>
                            
                        </li>
                    </ul>

                    <ul className='unordered_item mt-4'>
                        <li>
                        
                        <i className="fa fa-laptop"  style={{color:'white',fontSize:'30px'}}></i>
                       
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link style={{color:'white',textDecoration:'none',fontSize:'22px'}}>Frontend</Link>
                            
                        </li>
                    </ul>

                    <ul className='unordered_item mt-4'>
                        <li>
                        
                        <i className="fa fa-envelope"  style={{color:'white',fontSize:'30px'}}></i>
                       
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/contactemails"style={{color:'white',textDecoration:'none',fontSize:'22px'}}>Contact Emails</Link>
                            
                        </li>
                    </ul>

                    <ul className='unordered_item mt-4'>
                        <li>
                        
                        <i className="fa fa-user"  style={{color:'white',fontSize:'30px'}}></i>
                       
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link style={{color:'white',textDecoration:'none',fontSize:'22px'}}>Accounts</Link>
                            
                        </li>
                    </ul>
                </div>


            </div>










        </>
    )
}