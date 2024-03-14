import { AdminHead } from "../../adminpage/admin";
import { Accountant } from "../../leftadmin/accountant/accountant";




export function HeadAccount() {
    return (
        <>
            <div className="row">
                <div className="col-2  bgforadminhead">
                    <AdminHead></AdminHead>
                </div>
                <div className="col-10">
                    <Accountant></Accountant>
                </div>
            </div>
        </>
    )
}