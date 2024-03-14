import { GridCell } from "../gridcell/gridcell.component";


 export function GridRow(props){
    return(
        
        <tr>
            {
                <GridCell values={props.rowData}></GridCell>
            }
        </tr>
    )
 }

