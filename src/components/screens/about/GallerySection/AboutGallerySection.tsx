import './AboutGallerySection.scss'
import '../../home/GallerySection/GallerySection.scss'
import { Button } from '../../../ui/Button/Button'
import AboutGalleryBox from '../../../layout/Fancybox/AboutGalleryBox'

export default function AboutGallerySection() {
    return (
        <>
            <section className="gallery_section">
                <div className="gallery_content">
                    <div className='heading_section gallery_heading'>ІНТЕР'ЄР НАШОГО РЕСТОРАНУ</div>
                    <AboutGalleryBox></AboutGalleryBox>
                    <div className="gallery_button">
                        <Button  text={"Дивитися галерею"}></Button>
                    </div>
                </div>
            </section>
        </>
    )
}