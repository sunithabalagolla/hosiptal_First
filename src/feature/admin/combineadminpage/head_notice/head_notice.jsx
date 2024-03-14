import { AdminHead } from "../../adminpage/admin";
import { NoticeBoard } from "../../leftadmin/noticeboard/noticeboard";




export function HeadNotice() {
    return (
        <>
            <div className="row">
                <div className="col-2  bgforadminhead">
                    <AdminHead></AdminHead>
                </div>
                <div className="col-10">
               <NoticeBoard></NoticeBoard>
                </div>
            </div>
        </>
    )
}