import { Link } from 'react-router-dom'
import './Registration.scss'
import { AiOutlineUser, AiOutlineMail, AiOutlinePhone, AiFillLock } from 'react-icons/ai'

export default function Registration() {
    return (
        <>
            <section className='form-box_section reg-box_section'>
                <div className='form-box reg-box'>
                    <div className="form-value">
                        <form action=''>
                            <h2 className='form-heading'>Реєстрація</h2>
                            <div className='inputbox'>
                                <AiOutlineMail className='inputbox_img' />
                                <input type="email" required />
                                <label form=''>Пошта</label>
                            </div>
                            <div className='inputbox'>
                                <AiOutlineUser className='inputbox_img' />
                                <input type="text" required />
                                <label form=''>Ім'я</label>
                            </div>
                            <div className='inputbox'>
                                <AiOutlinePhone className='inputbox_img' />
                                <input type="phone" required />
                                <label form=''>Телефон</label>
                            </div>
                            <div className='inputbox'>
                                <AiFillLock className='inputbox_img' />
                                <input type="password" required />
                                <label form=''>Пароль</label>
                            </div>
                            <button className='form-btn'>Зареєструватися</button>
                            <div className="register">
                                <p className='register-text'>Вже в картузах? <Link className='register-link' to="/login">Увійти</Link> </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}