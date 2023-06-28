import { Footer } from '../../components/layout/Footer/Footer'
import { Header } from '../../components/layout/Header/Header'
import './barPage.scss'

export default function BarPage() {
    return (
        <>
            <Header></Header>
            <section className="heading_section">
                <div className="heading_content barpage_content">
                    <div className='heading_text'>
                        Барна карта <br />
                        Ресторану Garrison Pub
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )

}