import { Footer } from '../../components/layout/Footer/Footer'
import { Header } from '../../components/layout/Header/Header'
import LocationSection from '../../components/screens/home/LocationSection/LocationSection'
import './contactsPage.scss'

export default function ContactsPage() {
    return (
        <>
            <Header></Header>
            <section className="heading_section">
                <div className="heading_content contactspage_content">
                    <div className='heading_text'>
                        Контакти <br />
                        Ресторану Garrison Pub
                    </div>
                </div>
            </section>
            <section className='contacts_section'>
                <div className='contacts_content'>
                    <div className='contacts_heading'>
                        ВІТАЄМО <br />
                        Ми знову відкриті для Вас
                    </div>
                    <div className='contacts_info'>
                        <div className='contacts_block'>
                            <br />МИ ПРАЦЮЄМО <br />
                            <br />
                            Щодня з 10.00 до 22.00 <br />
                            <br />
                            вулиця Хатна, 3, Київ,  <br />
                            Київська область, 01001 <br />
                            <br />
                            Вихідні та свята <br />
                            Повідомимо додатково <br />
                        </div>
                        <div className='contacts_block'>
                            <br />НАШІ КОНТАКТИ <br />
                            <br />
                            +38 (068) 118-15-15 <br />
                            Номер адміністратора <br />
                            <br />
                            <a href="#">WhatsApp</a> 
                            <a href="#">Viber</a> <br />
                            Контакт через соціальні мережі <br />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <LocationSection />
            </section>
            <Footer />
        </>
    )

}