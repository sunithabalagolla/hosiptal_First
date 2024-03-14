

import { AdminHead } from "../../adminpage/admin";
import { Nurse } from "../../leftadmin/nurse/nurse";




export function HeadNurse() {
    return (
        <>
            <div className="row">
                <div className="col-2  bgforadminhead">
                    <AdminHead></AdminHead>
                </div>
                <div className="col-10">
                    <Nurse></Nurse>
                </div>
            </div>
        </>
    )
}

