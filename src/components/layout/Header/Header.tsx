import { Button } from '../../ui/Button/Button';
import { NavLang } from '../../ui/NavLang/NavLang';
import './Header.scss';
import { Link } from 'react-router-dom';


export const Header = (props: any) => {

    const st: string = "РЕЗЕРВ"

    return (
        <>
            <div className='header'>
                <Link to="/"><div className='header_logo'></div></Link>
                <div className='header_menu'>
                    <nav className="navbar-h">
                        <ul>
                            <li><Link className='nav-link-h' to="/about">Про нас</Link></li>
                            <li><Link className='nav-link-h' to="/menu">Меню</Link></li>
                            <li><Link className='nav-link-h' to="/bar">Бар</Link></li>
                            <li><Link className='nav-link-h' to="/gallery">Галерея</Link></li>
                            <li><Link className='nav-link-h' to="/contacts">Контакти</Link></li>
                            <li><Link className='nav-link-h' to="/login">Особистий кабінет</Link></li>
                        </ul>
                    </nav>
                </div>
                <Button text={st}></Button>
                <NavLang></NavLang>
            </div>
        </>
    )
}