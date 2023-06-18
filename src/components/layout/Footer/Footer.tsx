import './Footer.scss';
import { Link } from 'react-router-dom';


export const Footer = (props: any) => {

    return (
        <>
            <div className='footer'>
                <div className='footer_heading'>
                    © 2023 ресторан Garrison Pub
                </div>
                <div className='footer_links'>
                    <div className='link'>
                        <Link className='nav-link-h' to="#">Умови сайту</Link>
                    </div>
                    <div className='link'>
                        <Link className='nav-link-h' to="#">Конфіденційність</Link>
                    </div>
                </div>
            </div>
        </>
    )
}