import { Arrow90degRight, ArrowDownCircleFill, ArrowDownRightCircle, ArrowRightCircle, BoxArrowInRight, Globe, Person, PersonBadgeFill, PersonCheckFill, SignNoLeftTurn } from 'react-bootstrap-icons';
import './dashboard.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


export function Dashboard() {

    const [counter, setCounter] = useState(1);
    const [counter2, setCounter2] = useState(2);

    useEffect(() => {
        const interval = setInterval(() => {
          setCounter((prevCounter) => {
            if (prevCounter < 9) {
              return prevCounter + 1;
            } else {
              clearInterval(interval); 
              return prevCounter;
            }
          });
        }, 500); 
        const interval2 = setInterval(() => {
            setCounter2((prevCounter) => {
              if (prevCounter < 7) {
                return prevCounter + 1;
              } else {
                clearInterval(interval2); 
                return prevCounter;
              }
            });
          }, 300);
    
        return () => clearInterval(interval);
        clearInterval(interval2); 
      }, []);
    return (
        <>

            <div className='dashboard_div'>
                <h1 style={{ textAlign: 'center' }} >Smart Hospital Managment System</h1>
                <br></br>
                <PersonCheckFill style={{ fontSize: '30px', marginLeft: '60px', marginTop: '-10px' }}></PersonCheckFill>
                <span style={{ fontSize: '24px', marginLeft: '10px' }}>admin</span>

                <Globe className='globalfill mb-1'></Globe>
                <Link to="/" style={{ color: 'black', textDecorationLine: 'none', fontSize: '23px', marginLeft: '16px' }}>Website</Link>
                &nbsp;&nbsp; &nbsp;&nbsp;
                <Link to="/login" style={{ color: 'black', textDecorationLine: 'none', fontSize: '23px' }}>Logout</Link>

                <BoxArrowInRight style={{ fontSize: '30px' }}></BoxArrowInRight>
            </div>
            <hr></hr>

            <h2>
                <ArrowRightCircle style={{ fontSize: '39px' }}></ArrowRightCircle>

                &nbsp;
                Admin Dashboard
            </h2>

            {/* <Link to="/doctors" className='linkofdoctors'>
            <div>
               
                <div>2</div>
                <h3>Doctor</h3>
            </div>
       </Link> */}
            <div className='row  dashboard_div2 mt-4'>
                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                <div className='col-2 deptartment_record '>
                    <Link to="/doctors" className='linkofdoctors'>
                        <div>
                            <div className='number_linkofdoctors'>2</div>
                            <h3>  &nbsp;&nbsp;&nbsp;Doctor</h3>
                        </div>
                    </Link>
                </div>
                <div className='col-2 deptartment_record'>
                    <Link to="/patient" className='linkofdoctors'>
                        <div>
                            <div className='number_linkofdoctors color_linkofdoctors'>{counter}</div>
                            <h3 className='color_linkofdoctors'>Patient</h3>
                        </div>
                    </Link>
                </div>
                <div className='col-2 deptartment_record'>
                    <Link to="/doctors" className='linkofdoctors'>
                        <div>
                            <div className='number_linkofdoctors pinks_linkofdoctors'>{counter2}</div>
                            <h3 className='pinks_linkofdoctors'>Nurse</h3>
                        </div>
                    </Link>
                </div>
                <div className='col-2 deptartment_record'>
                    <Link to="/patient" className='linkofdoctors'>
                        <div>
                            <div className='number_linkofdoctors blue_linkofdoctors'>{counter}</div>
                            <h3 className='blue_linkofdoctors'>Pharmacist</h3>
                        </div>
                    </Link>
                </div>
            </div>

            <div className='row  dashboard_div2 mt-4'>
                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                <div className='col-2 deptartment_record '>
                    <Link to="/doctors" className='linkofdoctors'>
                        <div>
                            <div className='number_linkofdoctors skyblue_linkofdoctors'>{counter}</div>
                            <h3 className='skyblue_linkofdoctors'>Laboratorist</h3>
                        </div>
                    </Link>
                </div>
                <div className='col-2 deptartment_record'>
                    <Link to="/patient" className='linkofdoctors'>
                        <div>
                            <div className='number_linkofdoctors orange_linkofdoctors'>{counter2}</div>
                            <h3 className='orange_linkofdoctors'>Accountant</h3>
                        </div>
                    </Link>
                </div>
                <div className='col-2 deptartment_record'>
                    <Link to="/doctors" className='linkofdoctors'>
                        <div>
                            <div className='number_linkofdoctors pink_linkofdoctors'>{counter}</div>
                            <h3 className='pink_linkofdoctors'>Payment</h3>
                        </div>
                    </Link>
                </div>
                <div className='col-2 deptartment_record'>
                    <Link to="/patient" className='linkofdoctors'>
                        <div>
                            <div className='number_linkofdoctors yellow_linkofdoctors'>1</div>
                            <h3 className='yellow_linkofdoctors'>Medicine</h3>
                        </div>
                    </Link>
                </div>
            </div>


            <div className='row  dashboard_div2 mt-4'>
                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                <div className='col-2 deptartment_record '>
                    <Link to="/doctors" className='linkofdoctors'>
                        <div>
                            <div className='number_linkofdoctors green_linkofdoctors'>1</div>
                            <h3 className='green_linkofdoctors'>Operation Report</h3>
                        </div>
                    </Link>
                </div>
                <div className='col-2 deptartment_record '>
                    <Link to="/patient" className='linkofdoctors'>
                        <div>
                            
                            <h3 className='brown_linkofdoctors'>Birth Records</h3>
                        </div>
                    </Link>
                </div>
                <div className='col-2 deptartment_record '>
                    <Link to="/doctors" className='linkofdoctors'>
                        <div>
                           
                            <h3 className='brown_linkofdoctors'>Deadth Records</h3>
                        </div>
                    </Link>
                </div>
               
            </div>
        </>
    )
}