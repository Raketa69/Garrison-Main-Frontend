import { Link } from 'react-router-dom'
import './Login.scss'
import { AiOutlineMail, AiFillLock } from 'react-icons/ai'
import { useState } from 'react'

export default function Login() {

    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');

    return (
        <>
            <section className='form-box_section'>
                <div className='form-box'>
                    <div className="form-value">
                        <form action=''>
                            <h2 className='form-heading'>Увійти</h2>
                            <div className='inputbox'>
                                <AiOutlineMail className='inputbox_img' />
                                <input type="email"
                                    value={login}
                                    onChange={(event) => setLogin(event.target.value)} required />
                                <label form=''>Пошта</label>
                            </div>
                            <div className='inputbox'>
                                <AiFillLock className='inputbox_img' />
                                <input type="password"
                                    value={pass}
                                    onChange={(event) => setPass(event.target.value)} required />
                                <label form=''>Пароль</label>
                            </div>
                            <div className='forget'>
                                <label form=''><input className='forget-input' type="checkbox"></input>Запам'ятати</label>
                                <a className='forget-link' href="">Забув пароль</a>
                            </div>
                            <button onClick={() => {
                                //if(login == 'admin@mail.ua' && pass == '111')
                                {
                                    window.location.assign('http://localhost:3000/admin');
                                }
                            }} className='form-btn'>Увійти</button>
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