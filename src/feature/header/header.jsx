import './header.css';
import hospital from '../../assests/images/iconOfpurple.png'
import { Link } from 'react-router-dom';



export function HeaderComponent() {
    return (
        <div className='headOut'>

            
             <h1 className='smartheading '><img className="imgHospital" src={hospital}></img>SMARTHOSPITAL</h1>
           
           

            <ul className='unordereditem' >

                <Link to='/home' style={{ color: 'white' }}><li>HOME</li></Link>

                <Link to='/departmenting' style={{ color: 'white' }}><li>DEPARTMENTS</li></Link>
               

                <Link to="/doctor" style={{ color: 'white' }}><li>DOCTORS</li></Link>

               <Link to="/about" style={{ color: 'white' }}> <li>ABOUT</li></Link>

                
                <Link to="/appointment" style={{ color: 'white' }}> <li>APPOINMENT</li></Link>


               <Link to="/blog" style={{ color: 'white' }}> <li>BLOG</li></Link>
               

               <Link to="/contact" style={{ color: 'white' }}> <li>CONTACT</li></Link>

               <Link to="/login" style={{ color: 'white' }}><li>LOGIN</li></Link>
                
            </ul>
        </div>
       
    )
}