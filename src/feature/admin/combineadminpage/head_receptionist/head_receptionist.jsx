import { AdminHead } from "../../adminpage/admin";
import { Receptionist } from "../../leftadmin/recepinost/receponist";





export function HeadReceptionist() {
    return (
        <>
            <div className="row">
                <div className="col-2  bgforadminhead">
                    <AdminHead></AdminHead>
                </div>
                <div className="col-10">
                 <Receptionist></Receptionist>
                </div>
            </div>
        </>
    )
}