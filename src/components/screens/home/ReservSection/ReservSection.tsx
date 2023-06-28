import './ReservSection.scss'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from '../../../ui/Button/Button';

export default function ReservSection() {
    return (
        <>
            <section className='reserv_section'>
                <div className="reserv_content">
                    <div className='heading_section reserv_heading'>Резервування</div>
                    <div id="reserv" className='heading_section reserv_heading reserv_subheading'>Замовити столик чи банкет</div>
                    <div className='reserv_form-wrap'>
                        <form action="" className='reserv_form'>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="І'мя"
                                className="mb-3 textField"
                            >
                                <Form.Control type="text" placeholder="І'мя" />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Телефон"
                                className="mb-3 textField"
                            >
                                <Form.Control type="phone" placeholder="Телефон" />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Кількість персон"
                                className="mb-3 textField"
                            >
                                <Form.Control type="text" placeholder="Кількість персон" />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Дата"
                                className="mb-3 textField"
                            >
                                <Form.Control type="date" placeholder="Дата" />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Час"
                                className="mb-3 textField"
                            >
                                <Form.Control type="text" placeholder="Час" />
                            </FloatingLabel>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Коментар"
                                className="mb-3 textField"
                            >
                                <Form.Control type="text" placeholder="Коментар" />
                            </FloatingLabel>
                            <div className="btn_submin"> 
                                <Button  text="Замовити"></Button>
                            </div>
                        </form>

                    </div>

                </div>
            </section>
        </>
    )
}