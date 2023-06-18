import GalleryBox from '../../../layout/Fancybox/GalleryBox'
import { Button } from '../../../ui/Button/Button'
import './GallerySection.scss'

export default function GallerySection() {
    return (
        <>
            <section className="gallery_section">
                <div className="gallery_content">
                    <div className='heading_section gallery_heading'>ГАЛЕРЕЯ СТРАВ</div>

                    <GalleryBox></GalleryBox>
                    <div className="gallery_button">
                        <Button  text={"Дивитися галерею"}></Button>
                    </div>
                </div>
            </section>
        </>
    )
}