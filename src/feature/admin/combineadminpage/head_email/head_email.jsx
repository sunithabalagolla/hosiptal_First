import { AdminHead } from "../../adminpage/admin";
import { Contactemail } from "../../leftadmin/contactemail/contactemial";





export function HeadEmail() {
    return (
        <>
            <div className="row">
                <div className="col-2  bgforadminhead">
                    <AdminHead></AdminHead>
                </div>
                <div className="col-10">
                <Contactemail></Contactemail>
                </div>
            </div>
        </>
    )
}