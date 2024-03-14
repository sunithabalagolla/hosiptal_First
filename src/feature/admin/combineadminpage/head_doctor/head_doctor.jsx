

import { AdminHead } from "../../adminpage/admin";
import { Doctor } from "../../leftadmin/doctor/doctor";
import { Patient } from "../../leftadmin/patient/patient";




export function HeadDoctor() {
    return (
        <>
            <div className="row">
                <div className="col-2  bgforadminhead">
                    <AdminHead></AdminHead>
                </div>
                <div className="col-10">
                   <Doctor></Doctor>
                </div>
            </div>
        </>
    )
}