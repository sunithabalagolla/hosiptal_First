


import { AdminHead } from "../../adminpage/admin";
import { Department } from "../../leftadmin/department/department";





export function HeadDepartment() {
    return (
        <>
            <div className="row">
                <div className="col-2  bgforadminhead">
                    <AdminHead></AdminHead>
                </div>
                <div className="col-10">
                    <Department></Department>
                </div>
            </div>
        </>
    )
}