import {  Route, Routes ,  useLocation} from "react-router-dom";

import { HomeComponent } from "./feature/homepage/home";
import { DoctorPage } from "./feature/doctorpage/doctors";
import { AboutPage } from "./feature/aboutpage/about";
import { ContactUs } from "./feature/contactus/contactus.component";
// import LoginComponent from "./feature/login/login";

import { useState } from "react"; // Import useState
import { HeadDashboard } from "./feature/admin/combineadminpage/head_dash/head_dash";
// import { HeaderComponent } from "./feature/header/header";
import { HeadPatient } from "./feature/admin/combineadminpage/head_patient/head_patient";
import { HeadDepartment } from "./feature/admin/combineadminpage/head_department/head_department";
import { HeadDoctor } from "./feature/admin/combineadminpage/head_doctor/head_doctor";
import { HeadNurse } from "./feature/admin/combineadminpage/head_nurse/head_nurse";
import { HeadPharmacist } from "./feature/admin/combineadminpage/head_pharmacist/head_pharmacist";
import { FirstViewComponent } from "./feature/loginpage/FirstView/firstview.component";
import { AppointmentPage } from "./feature/appointmentpage/appointment";
import { DepartmentPage } from "./feature/departemntpage/department";
import { BlogPage } from "./feature/blogpage/blogpage";
import { LoginComponent } from "./feature/loginpage/login/login.component";
import { AdminHead } from "./feature/admin/adminpage/admin";
import { HeaderComponent } from "./feature/header/header";
import { Dashboard } from "./feature/admin/leftadmin/dashboard/dshboard";
import { Department } from "./feature/admin/leftadmin/department/department";
import { HeadLab } from "./feature/admin/combineadminpage/head_lab/head_lab";
import { Accountant } from "./feature/admin/leftadmin/accountant/accountant";
import { HeadAccount } from "./feature/admin/combineadminpage/head_account/head_account";
import { HeadReceptionist } from "./feature/admin/combineadminpage/head_receptionist/head_receptionist";
import { HeadEmail } from "./feature/admin/combineadminpage/head_email/head_email";
import { HeadNotice } from "./feature/admin/combineadminpage/head_notice/head_notice";









export function AppRouter(){
   
  const location = useLocation();

  // // Function to check if the current route is the dashboard

  
  const isDashboardRoute = () => {
     return location.pathname === '/admin'||location.pathname === '/dashboard'|| location.pathname === '/patient'||location.pathname==='/departmentadmin'||location.pathname==='/labprstorist'||
  location.pathname==='/doctors'||location.pathname==='/nurse'||location.pathname==='/pharmacist'||location.pathname==='/accountant'
  ||location.pathname==='/receptionist'||location.pathname==='/contactemails'||location.pathname==='/notice';


   };
  
    return(
        <div>
         
           {!isDashboardRoute() && <HeaderComponent></HeaderComponent>} 
            <Routes>
            
                <Route path="/home" element={<HomeComponent></HomeComponent>}> </Route>


                <Route path="/" element={<HomeComponent></HomeComponent>}> </Route>
                  <Route path="/doctor" element={<DoctorPage></DoctorPage>}></Route>  
                  
                     <Route path='/about' element={<AboutPage></AboutPage>}></Route>
                     <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
                     <Route path='/departmenting' element={<DepartmentPage></DepartmentPage>}></Route>
                     <Route path='/appointment' element={<AppointmentPage></AppointmentPage>}></Route>
                     <Route path='/blog'element={<BlogPage></BlogPage>}></Route>
                     {/* <Route path='/login' element={<LoginComponent></LoginComponent>} ></Route> */}
                     <Route path="/dashboard" element={ <HeadDashboard></HeadDashboard>} ></Route>
                     <Route path="/departmentadmin" element={<HeadDepartment></HeadDepartment>}></Route>
                     <Route path="/doctors" element={<HeadDoctor></HeadDoctor>}></Route>
                     <Route path="/nurse" element={<HeadNurse></HeadNurse>}></Route>
                     <Route path="/pharmacist" element={<HeadPharmacist></HeadPharmacist>}></Route>
                     <Route path="/patient" element={<HeadPatient></HeadPatient>}></Route>
                     <Route path="/labprstorist"  element={<HeadLab></HeadLab>}></Route>
                     <Route path="/accountant" element={<HeadAccount></HeadAccount>}></Route>
                     <Route path="/receptionist" element={<HeadReceptionist></HeadReceptionist>}></Route>
                     <Route path="/contactemails" element={<HeadEmail></HeadEmail>}></Route>
                     <Route path="/notice" element={<HeadNotice></HeadNotice>}></Route>
            
        
                    <Route path="/login" element={<FirstViewComponent></FirstViewComponent>}></Route>
                    <Route path="loginS" element={<LoginComponent></LoginComponent>}></Route>
                     

                     <Route path="/admin" element={<HeadDashboard></HeadDashboard>}></Route>

                   
            </Routes>
        </div>
    )
}
 
