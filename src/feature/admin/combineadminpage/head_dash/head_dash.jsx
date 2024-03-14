import { AdminHead } from "../../adminpage/admin";
import { Dashboard } from "../../leftadmin/dashboard/dshboard";
import './head_dash.css';


export function HeadDashboard() {
    return (
        <>
            <div className="row">
                <div className="col-2  bgforadminhead">
                    <AdminHead></AdminHead>
                </div>
                <div className="col-10">
                    <Dashboard></Dashboard>
                </div>
            </div>
        </>
    )
}