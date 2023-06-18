import './Widgets.scss'
import { MdKeyboardArrowUp } from 'react-icons/md'
import { FiUsers } from 'react-icons/fi'
import { FC } from 'react'
import { IWidget } from '../../../Interfaces/IWidget'

const Widgets: FC<IWidget> = ({type, data}) => {


    return (
        <>
            <div className='widget-content'>
                <div className="left">
                    <span className='title'>{data.title}</span>
                    <span className='counter'>{data.counter}</span>
                    <span className='link'>{data.link}</span>
                </div>
                <div className="right">
                    <div className={"percentage " + data.status}>
                        <MdKeyboardArrowUp />
                        20%
                    </div>
                    {data.icon}
                </div>
            </div>
        </>
    )
}

export default Widgets