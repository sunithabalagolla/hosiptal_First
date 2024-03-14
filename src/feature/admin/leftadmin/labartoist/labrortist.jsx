
import { useEffect, useRef } from "react";
import { deleteDoctorType, getDoctorType, saveDoctorType, updataDoctorType } from "../../../../services/doctor.service";
import { useState } from "react";
import { GridComponent } from "../../../../sharedcompoent/sharecomponents/grid/grid.component";
import { Arrow90degRight, ArrowDownCircleFill, ArrowDownRightCircle, ArrowRightCircle, BoxArrowInRight, Globe, Person, PersonBadgeFill, PersonCheckFill, SignNoLeftTurn } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import '../doctor/doctor.css';
import { deleteNurseType, getNurseType } from "../../../../services/nurse.service";

export function Laboratorist() {

  //show form and hideform
  const [showForm, setShowForm] = useState(false);

  //create alert
  const [savemsg, setUpdatamsg] = useState(false);

  const [nurseid, setnurseid] = useState(0);
  //head
  const [nurseHead, setNurseHead] = useState(["ID", "NAME", "EMAIL", "ADDRESS","PHONE","ACTION"]);

  //savebtn
  const [savebtn, setSavebtn] = useState("save");

  //headdata
  const [nurseData, HeadNurseData] = useState([]);

  useEffect(() => {
    getNursedata()
  }, [])

  function getNursedata() {
   getNurseType().then((res) => {
      HeadNurseData(res.data)
    }
    )
  }


  function settime() {
    setTimeout(() => {
      setUpdatamsg(false);
    }, 2000)
  }


  const nameref = useRef();
  const emailref=useRef();
  const phoneref = useRef();
  const addressref=useRef();

  function clearNursedata() {
    nameref.current.value = "";
    emailref.current.value = "";
    addressref.current.value = "";
    phoneref.current.value = "";
    setSavebtn("save")
    setnurseid(0);
    settime();
  }


  const nurseidref = useRef(0);

  function editnursedata(value) {
    nameref.current.value = value.name;
    emailref.current.value = value.email;
    addressref.current.value = value.address;
    phoneref.current.value = value.phone;
    setSavebtn('update');
    setnurseid(value.id);
    nurseidref.current.value = value.id;



  }


  function deletenursedata(value) {
    let confrimDelete = window.confirm("Are You sure you want to delete the record")
    if (confrimDelete == true) {
      deleteNurseType(value.id)
        .then((res) => {

          clearNursedata();

          getNursedata();
        }).catch(() => {
          alert("failed to delete your property")
        })


    }
  }


  return (
    <div>
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
      Laboratist
      </h2>

      <div className="showform">
        <button onClick={() => setShowForm(!showForm)} style={{width:'300px'}}>+ Add Laboratist</button>
      </div>



      {showForm && (

        <form method="post" action="http://localhost:4000/saveNursedata">
          <div>
            <input type="hidden" ref={nurseidref} name="nurseimptid"></input>
          </div>
          <div>
            <label style={{ fontSize: '20px' }}>Name</label>
            <input type="text" className="form-control" style={{ width: '980px' }}  ref={nameref} name="name"></input>
          </div>

          <div className="mt-3">
            <label style={{ fontSize: '20px' }}>Email</label>
            <input type="text" className="form-control" id="descjs" style={{ width: '980px' }} ref={emailref} name="email"></input>
          </div>

          <div>
            <label style={{ fontSize: '20px' }}>Address</label>
            <input type="text" className="form-control" style={{ width: '980px' }}  ref={addressref} name="address"></input>
          </div>

          <div>
            <label style={{ fontSize: '20px' }}>Phone</label>
            <input type="number" className="form-control" style={{ width: '980px' }}  ref={phoneref} name="phone"></input>
          </div>

          <div className="mt-3">
            <input type="submit" value={savebtn} style={{ backgroundColor: 'green', color: 'white', width: '99px', fontSize: '26px', padding: '4px', borderRadius: '16px' }}></input>
            &nbsp;&nbsp;&nbsp;&nbsp;

            <input type="button" value="cancel"
              style={{ backgroundColor: 'red', color: 'white', width: '99px', fontSize: '26px', padding: '4px', borderRadius: '16px' }} onClick={() => {
                clearNursedata()
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
        headers={nurseHead}
        body={nurseData}

        editItemFromGrid={(value) => {
          editnursedata(value)
        }}
        deleteRecord={(value) => {
          deletenursedata(value)
        }}
      >
      </GridComponent></div>

    </div>
  );
}