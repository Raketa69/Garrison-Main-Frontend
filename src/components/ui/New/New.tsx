import NavBar from '../NavBar/NavBar'
import SideBar from '../SideBar/SideBar'
import './New.scss'

const New = () => {
    return (
        <>
            <div className="new-content">
                <SideBar />
                <div className="new-container">
                    <NavBar />
                    <div className="top-content">
                        <h1>Add New User</h1>
                    </div>
                    <div className="bottom-content">
                        <div className="left-content"></div>
                        <div className="right-content">
                            <form action="" className='new-form'>
                                <div className='form-input-cont'>
                                    <label className='form-label'>Username</label>
                                    <input className='form-input' type="text" placeholder='ilya risoviy' />
                                </div>
                                <div className='form-input-cont'>
                                    <label className='form-label'>Email</label>
                                    <input className='form-input' type="email" placeholder='risoviy@gmail.com' />
                                </div>
                                <div className='form-input-cont'>
                                    <label className='form-label'>Phone</label>
                                    <input className='form-input' type="phone" placeholder='380661234455' />
                                </div>
                                <div className='form-input-cont'>
                                    <label className='form-label'>Role</label>
                                    <input className='form-input' type="text" placeholder='USER' />
                                </div>
                                <div className='form-input-cont'>
                                    <label className='form-label'>Password</label>
                                    <input className='form-input' type="password" placeholder='' />
                                </div>
                                <div className='form-input-cont'>
                                    <label className='form-label'>Repeat password</label>
                                    <input className='form-input' type="password" placeholder='' />
                                </div>
                                <button className='form-button' type='submit'>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default New