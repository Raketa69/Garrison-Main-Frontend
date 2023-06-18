import { BsThreeDotsVertical } from 'react-icons/bs'
import './Featured.scss'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { IoIosArrowDown } from 'react-icons/io'
import { MdKeyboardArrowUp } from 'react-icons/md'

const Featured = () => {
    return (
        <div className='featured-content'>
            <div className="featured-header">
                <h1 className='title'>Total Revenue</h1>
                <BsThreeDotsVertical className='title-icon' />
            </div>
            <div className="featured-content">
                <div className="featured-chart">
                    <CircularProgressbar value={70} text='70%' strokeWidth={5}/>
                </div>
                <p className='title'>Total sales made today</p>
                <p className='amount'>$420</p>
                <p className='desc'>Previous transactions processing. Last payments may not be included.</p>
                <div className="featured-summary">
                    <div className='item'>
                        <div className="item-title">Target</div>
                        <div className="item-result positive">
                            <MdKeyboardArrowUp/>
                            <div className="item-resultAmount">$12.4k</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="item-title">Target</div>
                        <div className="item-result positive">
                            <MdKeyboardArrowUp/>
                            <div className="item-resultAmount">$12.4k</div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className="item-title">Target</div>
                        <div className="item-result negative">
                            <IoIosArrowDown/>
                            <div className="item-resultAmount">$12.4k</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured