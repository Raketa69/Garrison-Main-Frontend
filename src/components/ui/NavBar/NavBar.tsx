import { BsSearch } from 'react-icons/bs'
import { GrLanguage } from 'react-icons/gr'
import { BsFillMoonFill, BsFillChatFill } from 'react-icons/bs'
import { IoIosNotifications } from 'react-icons/io'
import { GoListUnordered } from 'react-icons/go'
import { MdWindow } from 'react-icons/md'
import './NavBar.scss'

const NavBar = () => {
    return (
        <>
            <div className="navbar">
                <div className="navbar-wrap">
                    <div className="navbar-search">
                        <input type="text" placeholder="Search..." />
                        <BsSearch className='item-icon' />
                    </div>
                    <div className="navbar-items">
                        <div className="navbar-item">
                            <GrLanguage className='item-icon' />
                            English
                        </div>
                        <div className="navbar-item">
                            <BsFillMoonFill className='item-icon' />
                        </div>
                        <div className="navbar-item">
                            <IoIosNotifications className='item-icon' />
                            <div className='counter'>1</div>
                        </div>
                        <div className="navbar-item">
                            <BsFillChatFill className='item-icon' />
                            <div className='counter'>2</div>
                        </div>
                        <div className="navbar-item">
                            <GoListUnordered className='item-icon' />
                        </div>
                        <div className="navbar-item">
                            <MdWindow className='item-icon' />
                        </div>
                        <div className="navbar-item">
                            <img src="https://thumbs.dreamstime.com/z/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D1%8B-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-%D0%B1%D0%B8%D0%B7%D0%BD%D0%B5%D1%81%D0%BC%D0%B5%D0%BD%D0%B0-%D0%BC%D1%83%D0%B6%D1%87%D0%B8%D0%BD%D0%B0-%D0%B2-%D0%BE%D1%87%D0%BA%D0%B0%D1%85-179728610.jpg"
                                alt=""
                                className='avatar'

                            />
                        </div>
                    </div>
                </div>
            </div>
        </>)
}

export default NavBar