import './DataTable.scss'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import {rows, columns} from './test.data'

const DataTable = () => {

    const actionColumn = [{ field: 'action', headerName: "Action", width: 200, renderCell: ()=> {
        return(
            <>
                <div className="cellAction">
                    <div className="view-button">View</div>
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