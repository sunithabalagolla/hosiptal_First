import { AdminHead } from "../../adminpage/admin";
import { Patient } from "../../leftadmin/patient/patient";
import { Pharmacist } from "../../leftadmin/pharmactist/pharmactist";




export function HeadPharmacist() {
    return (
        <>
            <div className="row">
                <div className="col-2  bgforadminhead">
                    <AdminHead></AdminHead>
                </div>
                <div className="col-10">
                   <Pharmacist></Pharmacist>
                </div>
            </div>
        </>
    )
}