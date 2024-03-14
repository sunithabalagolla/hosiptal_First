import { PencilSquare, Trash } from 'react-bootstrap-icons'

import './grid.component.css'

export function GridComponent(props) {











    //create a fn for edit item
    function editItem(item) {
        props.editItemFromGrid(item)
    }

    //create a fn fro delete item
    function deleteItem(item) {
        props.deleteRecord(item)
    }



    return (
        <>
            <table className='table table-bordered table-hover   arrangement'>

                <thead className='table-primary '>
                    <tr>
                        {
                            props.headers.map((item) => <th>{item}</th>)
                        }
                    </tr>
                </thead>

                <tbody>
                    {
                        props.body.map((item) =>
                            <tr>
                                {
                                    Object.values(item).map((item) => <td>{item}</td>)
                                }

                                <td>
                                    <div className='row container'>
                                    <div className="action-container col-4">
                                        <PencilSquare className="edit-icon"  onClick={() => { editItem(item) }}></PencilSquare>&nbsp;&nbsp;
                                        <span className="action-text">&nbsp;&nbsp;Edit</span>
                                    </div>
&nbsp;&nbsp;&nbsp;
                                    <div className="action-containers col-4">
                                        <Trash className='delete-icon' onClick={() => { deleteItem(item) }}></Trash>&nbsp;&nbsp;
                                        <span className="action-text">Delete</span>
                                    </div>
                                    </div>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}