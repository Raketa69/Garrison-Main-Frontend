import { Link } from 'react-router-dom'
import './Login.scss'
import { AiOutlineMail, AiFillLock } from 'react-icons/ai'

export default function Login() {
    return (
        <>
            <section className='form-box_section'>
                <div className='form-box'>
                    <div className="form-value">
                        <form action=''>
                            <h2 className='form-heading'>Увійти</h2>
                            <div className='inputbox'>
                                <AiOutlineMail className='inputbox_img' />
                                <input type="email" required />
                                <label form=''>Пошта</label>
                            </div>
                            <div className='inputbox'>
                                <AiFillLock className='inputbox_img' />
                                <input type="password" required />
                                <label form=''>Пароль</label>
                            </div>
                            <div className='forget'>
                                <label form=''><input className='forget-input' type="checkbox"></input>Запам'ятати</label>
                                <a className='forget-link' href="">Забув пароль</a>
                            </div>
                            <button className='form-btn'>Увійти</button>
                            <div className="register">
                                <p className='register-text'>Ще не в картузах? <Link className='register-link' to="/reg">Зареєструватися</Link> </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )

}