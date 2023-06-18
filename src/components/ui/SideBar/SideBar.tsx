import './SideBar.scss'
import { ImStatsBars } from 'react-icons/im'
import { IoIosNotifications } from 'react-icons/io'
import { BsFillGearFill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { RiDashboardFill, RiUserSearchLine, RiBillLine, RiTableFill } from 'react-icons/ri'
import { MdPsychology, MdLogout } from 'react-icons/md'
import { Link } from 'react-router-dom'


const SideBar = () => {
    return (
        <>
            <div className="sidebar">
                <div className="sidebar-top">
                    <span className='sidebar-top_logo'>GARRISON ADMIN</span>
                </div>
                <div className="sidebar-center">
                    <ul>
                        <p className='sidebar-title'>MAIN</p>
                        <li>
                            <Link className='sidebar-link' to="/admin">
                                <RiDashboardFill className='sidebar-icon' />
                                <span className='sidebar-text'>Dashboard</span>
                            </Link>
                        </li>
                        <p className='sidebar-title'>LISTS</p>
                        <li>
                            <Link className='sidebar-link' to="/users">
                                <RiUserSearchLine className='sidebar-icon' />
                                <span className='sidebar-text'>Users</span>
                            </Link>
                        </li>
                        <li>
                            <RiBillLine />
                            <span>Orders</span>
                        </li>
                        <li>
                            <RiTableFill />
                            <span>Reservs</span>
                        </li>
                        <p className='sidebar-title'>USEFUL</p>
                        <li>
                            <ImStatsBars />
                            <span>Stats</span>
                        </li>
                        <li>
                            <IoIosNotifications />
                            <span>Notifications</span>
                        </li>
                        <p className='sidebar-title'>SERVICE</p>
                        <li>
                            <MdPsychology />
                            <span>Logs</span>
                        </li>
                        <li>
                            <BsFillGearFill />
                            <span>Settings</span>
                        </li>
                        <p className='sidebar-title'>USER</p>
                        <li>
                            <CgProfile />
                            <span>Profile</span>
                        </li>
                        <li>
                            <MdLogout />
                            <span>Logout</span>
                        </li>
                    </ul>
                </div>
                <div className="sidebar-bottom">
                    <div className="color-option"></div>
                    <div className="color-option"></div>
                </div>
            </div>
        </>
    )
}

export default SideBar