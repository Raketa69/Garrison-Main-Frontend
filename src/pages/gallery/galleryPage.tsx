import { Footer } from '../../components/layout/Footer/Footer'
import { Header } from '../../components/layout/Header/Header'
import AboutGallerySection from '../../components/screens/about/GallerySection/AboutGallerySection'
import GallerySection from '../../components/screens/home/GallerySection/GallerySection'
import LocationSection from '../../components/screens/home/LocationSection/LocationSection'
import './galleryPage.scss'

export default function GalleryPage() {
    return (
        <>
            <Header></Header>
            <section className="heading_section">
                <div className="heading_content gallerypage_content">
                    <div className='heading_text'>
                        Галерея <br />
                        Ресторану Garrison Pub
                    </div>
                </div>
            </section>
            <section>
                <GallerySection />
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