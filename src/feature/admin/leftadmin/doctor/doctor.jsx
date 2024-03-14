import { useEffect, useRef } from "react";
import { deleteDoctorType, getDoctorType, saveDoctorType, updataDoctorType } from "../../../../services/doctor.service";
import { useState } from "react";
import { GridComponent } from "../../../../sharedcompoent/sharecomponents/grid/grid.component";
import { Arrow90degRight, ArrowDownCircleFill, ArrowDownRightCircle, ArrowRightCircle, BoxArrowInRight, Globe, Person, PersonBadgeFill, PersonCheckFill, SignNoLeftTurn } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import './doctor.css';

export function Doctor() {

  //show form and hideform
  const [showForm, setShowForm] = useState(false);

  //create alert
  const [savemsg, setUpdatamsg] = useState(false);

  const [doctorid, setdoctorid] = useState(0);
  //head
  const [doctorHead, setDoctorHead] = useState(["ID", "NAME", "DESCRIPTION", "ACTION"]);

  //savebtn
  const [savebtn, setSavebtn] = useState("save");

  //headdata
  const [doctorData, HeadDoctorData] = useState([]);
  
  // Function to save data
  // function saveData() {
  //   let data = {
  //     id: doctorid,
  //     name: nameref.current.value,
  //     description: descref.current.value,
  //     isActive: true
  //   }
  //   if (doctorid == 0) {
  //     saveDoctorType(data)
  //       .then(() => {
  //         alert("Data saved successfully");
  //         setUpdatamsg(true);
  //         clearDoctordata();
  //         getDoctordata();
  //       })
  //       .catch(() => {
  //         alert("Data failed to save");
  //       });
  //   }
  //   else {
  //     updataDoctorType(data)
  //       .then(() => {
  //         alert("Data saved successfully");
  //         setUpdatamsg(true);
  //         getDoctordata();
  //         clearDoctordata();
  //         getDoctordata();
  //       })
  //       .catch(() => {
  //         alert("Data failed to save");
  //       });
  //   }

  // }
  useEffect(() => {
    getDoctordata()
  }, [])

  function getDoctordata() {
    getDoctorType().then((res) => {
      HeadDoctorData(res.data)
    }
    )
  }


  function settime() {
    setTimeout(() => {
      setUpdatamsg(false);
    }, 2000)
  }


  const nameref = useRef();
  const descref = useRef();

  function clearDoctordata() {
    nameref.current.value = "";
    descref.current.value = "";
    setSavebtn("save")
    setdoctorid(0);
    settime();
  }


  const doctoridref = useRef(0);

  function editdoctordata(value) {
    nameref.current.value = value.name;
    descref.current.value = value.description;
    setSavebtn('update');
    setdoctorid(value.id);
    doctoridref.current.value = value.id;



  }


  function deletedoctordata(value) {
    let confrimDelete = window.confirm("Are You sure you want to delete the record")
    if (confrimDelete == true) {
      deleteDoctorType(value.id)
        .then((res) => {

          clearDoctordata();

          getDoctordata();
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
        Doctors
      </h2>

      <div className="showform">
        <button onClick={() => setShowForm(!showForm)} >+ Add Doctor</button>
      </div>



      {showForm && (

        <form method="post" action="http://localhost:4000/saveDoctordata">
          <div>
            <input type="hidden" ref={doctoridref} name="doctorimptid"></input>
          </div>
          <div>
            <label style={{ fontSize: '20px' }}>Name</label>
            <input type="text" className="form-control" style={{ width: '980px' }} id="namejs" ref={nameref} name="name"></input>
          </div>

          <div className="mt-3">
            <label style={{ fontSize: '20px' }}>Description</label>
            <textarea type="text" className="form-control" id="descjs" style={{ width: '980px' }} ref={descref} name="description"></textarea>
          </div>

          <div className="mt-3">
            <input type="submit" value={savebtn} style={{ backgroundColor: 'green', color: 'white', width: '99px', fontSize: '26px', padding: '4px', borderRadius: '16px' }}></input>
            &nbsp;&nbsp;&nbsp;&nbsp;

            <input type="button" value="cancel"
              style={{ backgroundColor: 'red', color: 'white', width: '99px', fontSize: '26px', padding: '4px', borderRadius: '16px' }} onClick={() => {
                clearDoctordata()
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
        headers={doctorHead}
        body={doctorData}

        editItemFromGrid={(value) => {
          editdoctordata(value)
        }}
        deleteRecord={(value) => {
          deletedoctordata(value)
        }}
      >
      </GridComponent></div>

    </div>
  );
}
