import Chart from '../../../ui/Chart/Chart'
import Featured from '../../../ui/Featured/Featured'
import NavBar from '../../../ui/NavBar/NavBar'
import SideBar from '../../../ui/SideBar/SideBar'
import Widgets from '../../../ui/Widgets/Widgets'
import { newUsers, orders, reservs, users } from './AdminPanel.data'
import './AdminPanel.scss'


const AdminPanel = () => {

    return (
        <>
            <div className="home-panel">
                <SideBar></SideBar>
                <div className="home-container">
                    <NavBar/>
                    <div className="home-widgets">
                        <Widgets {...users}/>
                        <Widgets {...orders}/>
                        <Widgets {...reservs}/>
                        <Widgets {...newUsers}/>
                    </div>
                    <div className='home-charts'>
                        <Featured/>
                        <Chart/>
                    </div>
                </div>
            </div>


        </>
    )
}

export default AdminPanel