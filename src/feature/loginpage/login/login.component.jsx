import { Link, useNavigate } from 'react-router-dom';
import assistant from '../../../assests/images/herbal-treatment.png';
import iconBlack from '../../../assests/images/iconOfblack.png';
import './login.component.css';
import '@fortawesome/fontawesome-free/css/all.css';

import { getuser } from '../../../services/user.service';
import { useEffect, useState } from 'react';



export function LoginComponent() {

  const [userData, setUserData] = useState({
    username: '',
    password: '',
 
  });

  useEffect(() => {
   
    getLogindata();
  }, []);


function getLogindata(){
getuser().then((res)=>{
  setUserData({
    username: res.username,
    password: res.password,
   
  });
})
}



  return (
    <>


      <div>
        <div className='outer_color'>
          <img src={iconBlack} className='logoblack' alt='Logo' style={{ marginLeft: '920px' }}></img>
          <span style={{ marginLeft: '-40px', marginTop: '-10px' }}>SMART HOSPTIAL</span>
          <h4 className='header ' style={{ marginRight: '-180px' }}>Health Management System</h4>

          <div className='border_color '>
            <div className='row'>
              <div className='col-5'>
                <img src={assistant} className='asisitantimage ' style={{ marginLeft: '150px' }}></img>
              </div>
              <div className='col-7'>
                <div className='input_border'>



                  <div >

                    <div>
                      <h1 style={{ fontFamily: 'bolder', textAlign: 'center' }} >LOGIN</h1>
                      <div>
                        <form method='post' action='http://localhost:4000/saveLogindataas'>



                          <div className="container mt-5">
                            <input type="text" className="form-control container" placeholder="USERNAME" id="nameuser" name="username" style={{ width: '730px' }}></input>
                           </div>
                          <div className="container mt-3">
                            <input type="password" className="form-control container" placeholder="PASSWORD" id="password" name="password" style={{ width: '730px' }} />
                          </div>



                          <div className="container mt-5">
 <form method='post' action='http://localhost:4000/saveLogindataas'>


{/* 
                          <div className="container mt-5">
                            <input type="name" className="form-control container" placeholder="USERNAME" id="nameuser" name="username"
                             value={userData.username} style={{ width: '730px' }}></input>
                           </div>
                          <div className="container mt-3">
                            <input type="password" className="form-control container" placeholder="PASSWORD" id="password" name="password"
                            value={userData.password} style={{ width: '730px' }} />
                          </div> */}



                          <div className="container mt-5">

                            {/* <Link to="/admin" style={{ textDecoration: 'none' }}>
                              <input type="button" value="Login" onClick={()=>{ LoginPage()}} className="form-control container " placeholder="PASSWORD" style={{ width: '730px', backgroundColor: ' mediumorchid', height: '48px', color: 'white', fontSize: '28px' }} />
                            </Link> */}
                            <Link to="/admin" style={{ textDecoration: 'none' }}>
                              <input type="submit" value="Login"  className="form-control container " placeholder="PASSWORD" style={{ width: '730px', backgroundColor: ' mediumorchid', height: '48px', color: 'white', fontSize: '28px' }} />
                            </Link>
                          </div>


                          <div className="user-type-btns ">
                          &nbsp;&nbsp;&nbsp;
                            <div className="btn-row">
                              <button className="user-type-btn superadmin-btn"> <i className="fa fa-user-secret"></i>&nbsp;&nbsp;&nbsp;Admin</button>
                              <button className="user-type-btn admin-btn"><i className="fa fa-user-plus"></i>&nbsp;&nbsp;Doctor</button>
                              <button className="user-type-btn doctor-btn"> <i className="fa fa-user-md" ></i>&nbsp;&nbsp;Patient</button>
                            </div>


                            <div className="btn-row">
                              <button className="user-type-btn pharmacist-btn"><i className="fa fa-user"></i>&nbsp;&nbsp;Nurse</button>
                              <button className="user-type-btn pathologist-btn"><i className="fa fa-user"></i>&nbsp;&nbsp;Receptionist</button>
                              <button className="user-type-btn radiologist-btn"> <i className="fa fa-user"></i>&nbsp;&nbsp;Laboratorist</button>
                            </div>

                            <div className="btn-row">
                              <button className="user-type-btn accountant-btn"><i className="fa fa-usd"></i>&nbsp;&nbsp;Pharmacist</button>
                              <button className="user-type-btn receptionist-btn"> <i className="fa fa-ioxhost"></i>&nbsp;&nbsp;Accountant</button>
                              
                            </div>
                          </div>



                        </form>
                          </div>

{/* 
                          <div className="user-type-btns ">
                          &nbsp;&nbsp;&nbsp;
                            <div className="btn-row">
                              <button className="user-type-btn superadmin-btn"> <i className="fa fa-user-secret"></i>&nbsp;&nbsp;&nbsp;Admin</button>
                              <button className="user-type-btn admin-btn"><i className="fa fa-user-plus"></i>&nbsp;&nbsp;Doctor</button>
                              <button className="user-type-btn doctor-btn"> <i className="fa fa-user-md" ></i>&nbsp;&nbsp;Patient</button>
                            </div>


                            <div className="btn-row">
                              <button className="user-type-btn pharmacist-btn"><i className="fa fa-user"></i>&nbsp;&nbsp;Nurse</button>
                              <button className="user-type-btn pathologist-btn"><i className="fa fa-user"></i>&nbsp;&nbsp;Receptionist</button>
                              <button className="user-type-btn radiologist-btn"> <i className="fa fa-user"></i>&nbsp;&nbsp;Laboratorist</button>
                            </div>

                            <div className="btn-row">
                              <button className="user-type-btn accountant-btn"><i className="fa fa-usd"></i>&nbsp;&nbsp;Pharmacist</button>
                              <button className="user-type-btn receptionist-btn"> <i className="fa fa-ioxhost"></i>&nbsp;&nbsp;Accountant</button>
                              
                            </div>
                          </div> */}



                        </form>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
  }
