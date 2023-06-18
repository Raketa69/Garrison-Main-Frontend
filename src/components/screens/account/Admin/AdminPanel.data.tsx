import { FiUsers } from "react-icons/fi"
import { IWidget } from "../../../../Interfaces/IWidget"
import { WidgetStatus } from "../../../../enums/WidgetStatus"
import { RiBillLine, RiTableFill, RiUserSearchLine } from "react-icons/ri"

export let users: IWidget = {
    type: 'users',
    data: {
        icon: <FiUsers className='icon' style={{
            backgroundColor: "rgba(255, 62, 62, 0.4)",
            color: "red"
        }}/>,
        isMoney: false,
        link: 'See all users',
        title: 'Users',
        counter: 2023,
        status: WidgetStatus.POSITIVE
    }
}

export let orders: IWidget = {
    type: 'orders',
    data: { 
        icon: <RiBillLine className='icon' style={{
            backgroundColor: "rgba(62, 255, 68, 0.4)",
            color: "green"
        }}/>,
        isMoney: false,
        link: 'See all orders',
        title: 'Orders',
        counter: 1000,
        status: WidgetStatus.POSITIVE
    }
}

export let reservs: IWidget = {
    type: 'reservs',
    data: {
        icon: <RiTableFill className='icon' style={{
            backgroundColor: "rgba(72, 62, 255, 0.4)",
            color: "blue"
        }}/>,
        isMoney: false,
        link: 'See all reservs',
        title: 'Reservs',
        counter: 228,
        status: WidgetStatus.NEGATIVE
    }
}

export let newUsers: IWidget = {
    type: 'newUsers',
    data: {
        icon: <RiUserSearchLine className='icon' style={{
            backgroundColor: "rgba(62, 197, 255, 0.4)",
            color: "rgba(62, 197, 255, 1)"
        }}/>,
        isMoney: false,
        link: 'See all new users',
        title: 'New users',
        counter: 10,
        status: WidgetStatus.NEGATIVE
    }
}