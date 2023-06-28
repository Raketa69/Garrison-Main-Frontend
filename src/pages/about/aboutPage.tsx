import { Footer } from '../../components/layout/Footer/Footer'
import { Header } from '../../components/layout/Header/Header'
import AboutIntroSection from '../../components/screens/about/IntroSection/AboutIntroSection'
import AboutGallerySection from '../../components/screens/about/GallerySection/AboutGallerySection'
import './aboutPage.scss'
import LocationSection from '../../components/screens/home/LocationSection/LocationSection'

export default function AboutPage() {
    return (
        <>
            <Header></Header>
            <section className="heading_section">
                <div className="heading_content">
                    <div className='heading_text'>
                        Про заклад <br />
                        Ресторан Garrison Pub
                    </div>
                </div>
            </section>
            <section>
                <AboutIntroSection />
            </section>
            <section>
                <AboutGallerySection />
            </section>
            <section>
                <LocationSection />
            </section>
            <Footer />
        </>
    )

}