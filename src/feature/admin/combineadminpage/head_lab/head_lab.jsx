import { AdminHead } from "../../adminpage/admin";

import { Laboratorist } from "../../leftadmin/labartoist/labrortist";
import './head_lab.css';


export function HeadLab() {
    return (
        <>
            <div className="row">
                <div className="col-2  bgforadminhead">
                    <AdminHead></AdminHead>
                </div>
                <div className="col-10">
                  <Laboratorist></Laboratorist>
                </div>
            </div>
        </>
    )
}