import './DataTable.scss'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import {rows, columns} from './test.data'
import { Link } from 'react-router-dom';

const DataTable = () => {

    const actionColumn = [{ field: 'action', headerName: "Action", width: 200, renderCell: ()=> {
        return(
            <>
                <div className="cellAction">
                    <Link to="/users/single" ><div className="view-button">View</div></Link>
                    <div className="delete-button">Delete</div>
                </div>
            </>
        )
    }}]

    return (
        <>
            <div className="datatable-content">
                <DataGrid 
                rows={rows} 
                columns={columns.concat(actionColumn)}
                
                />
            </div>
        </>
    )
}

export default DataTable