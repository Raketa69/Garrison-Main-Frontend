import DataTable from "../../../ui/DataTable/DataTable"
import NavBar from "../../../ui/NavBar/NavBar"
import SideBar from "../../../ui/SideBar/SideBar"
import './ListPage.scss'


const ListPage = () => {
    return(
        <>
        <div className="list">
            <SideBar/>
            <div className="list-content">
                <NavBar/>
                <DataTable/>
            </div>
        </div>
        </>
    )
}

export default ListPage