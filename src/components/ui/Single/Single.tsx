import Chart from '../Chart/Chart'
import DataTable from '../DataTable/DataTable'
import NavBar from '../NavBar/NavBar'
import SideBar from '../SideBar/SideBar'
import './Single.scss'

const Single = () => {
    return (
        <>
            <div className="single-wrap">
                <SideBar />
                <div className="single-content">
                    <NavBar />
                    <div className="top-content">
                        <div className="left-content">
                            <div className="edit-button">Edit</div>
                            <h1 className='title'>Information</h1>
                            <div className="item">
                                <img
                                    src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png"
                                    alt="profile-picture"
                                    className='item-img'
                                />

                                <div className="details">
                                    <h1 className='item-title'>Danila Risoviy</h1>
                                    <div className="detail-item">
                                        <span className='item-key'>Email:</span>
                                        <span className='item-value'>risoviy@gmail.com</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className='item-key'>Phone:</span>
                                        <span className='item-value'>380661234455</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className='item-key'>Role:</span>
                                        <span className='item-value'>ADMIN</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right-content">
                            <Chart/>
                        </div>
                    </div>
                    <div className="bottom-content">
                        <h1 className='title'>Last Transactions</h1>
                        <DataTable/>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Single