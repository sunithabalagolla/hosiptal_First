
import { useEffect, useRef, useState } from 'react';
import './department.css';
import { GridComponent } from "../../../../sharedcompoent/sharecomponents/grid/grid.component";
import { Arrow90degRight, ArrowDownCircleFill, ArrowDownRightCircle, ArrowRightCircle, BoxArrowInRight, Globe, Person, PersonBadgeFill, PersonCheckFill, SignNoLeftTurn } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { deleteDepartmentType, getDepartmentType } from '../../../../services/dept.service';

export function Department() {


  //show form and hideform
  const [showForm, setShowForm] = useState(false);

  const [doctorid, setdeptid] = useState(0);

  //create alert
  const [savemsg, setUpdatamsg] = useState(false);

  const deptidref = useRef(0);

   //headdata
   const [deptData, HeadDeptData] = useState([]);

   const [deptHead, setDeptHead] = useState(["ID", "NAME", "EMAIL","PHONE","DEPARTMENT", "ACTION"]);

//reference variable for inputs
const nameref=useRef();
const emailref=useRef();
const phoneref=useRef();
const deptref=useRef();

 //savebtn
 const [savebtn, setSavebtn] = useState("save");

 function settime() {
  setTimeout(() => {
    setUpdatamsg(false);
  }, 2000)
}

 function clearDeptdata() {
  nameref.current.value = "";
  emailref.current.value="";
  phoneref.current.value="";
  deptref.current.value = "";
  setSavebtn("save")
  setdeptid(0);
  settime();
}



function editdeptdata(value) {
  nameref.current.value = value.name;
  emailref.current.value = value.email;
  phoneref.current.value=value.phone;
  deptref.current.value =value.department;
  setSavebtn('update');
  setdeptid(value.id);
  deptidref.current.value = value.id;



}


function deletedeptdata(value) {
  let confrimDelete = window.confirm("Are You sure you want to delete the record")
  if (confrimDelete == true) {
    deleteDepartmentType(value.id)
   
      .then((res) => {

        clearDeptdata();

        getdeptdata();
      }).catch(() => {
        alert("failed to delete your property")
      })


  }
}

useEffect(() => {
  getdeptdata()
}, [])

function getdeptdata() {
  getDepartmentType().then((res) => {
    HeadDeptData(res.data)
  }
  )
}








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
        Department
      </h2>

      <div className="showform">
        <button onClick={() => setShowForm(!showForm)} >+add dept</button>
      </div>

      {showForm && (

        <form method="post" action="http://localhost:4000/saveDeptdata">
          <div>
            <input type="hidden" ref={deptidref} name="deptimptid"></input>
          </div>

          <div>
            <label style={{ fontSize: '20px' }}>Name</label>
            <input type="text" className="form-control" style={{ width: '980px' }}  ref={nameref} name="name"></input>
          </div>

          <div>
            <label style={{ fontSize: '20px' }}>Email</label>
            <input type="email" className="form-control" style={{ width: '980px' }}  ref={emailref} name="email"></input>
          </div>

          
          <div>
            <label style={{ fontSize: '20px' }}>Phone</label>
            <input type="number" className="form-control" style={{ width: '980px' }}  ref={phoneref} name="phone"></input>
          </div>

          <div className="mt-3">
            <label style={{ fontSize: '20px' }}>Department</label>
            <textarea type="text" className="form-control"  style={{ width: '980px' }} ref={deptref} name="department"></textarea>
          </div>

          <div className="mt-3">
            <input type="submit" value={savebtn} style={{ backgroundColor: 'green', color: 'white', width: '99px', fontSize: '26px', padding: '4px', borderRadius: '16px' }}></input>
            &nbsp;&nbsp;&nbsp;&nbsp;

            <input type="button" value="cancel"
              style={{ backgroundColor: 'red', color: 'white', width: '99px', fontSize: '26px', padding: '4px', borderRadius: '16px' }} onClick={() => {
                clearDeptdata()
              }}></input>

            <div>
              {
                savemsg && <div> data saved</div>
              }
            </div>
          </div>
        </form>
      )}
      <div className="mt-5"><GridComponent
        headers={deptHead}
        body={deptData}

        editItemFromGrid={(value) => {
          editdeptdata(value)
        }}
        deleteRecord={(value) => {
          deletedeptdata(value)
        }}
      >
      </GridComponent></div>

    </>
  )
}