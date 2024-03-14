import { AdminHead } from "../../adminpage/admin";
import { Patient } from "../../leftadmin/patient/patient";

import './head_patient.css';


export function HeadPatient() {
    return (
        <>
            <div className="row">
                <div className="col-2  bgforadminhead">
                    <AdminHead></AdminHead>
                </div>
                <div className="col-10">
                    <Patient></Patient>
                </div>
            </div>
        </>
    )
}