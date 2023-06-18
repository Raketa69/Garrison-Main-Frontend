
import MapBoxGL from '../../../layout/MapBoxGL/MapBoxGL'
import './LocationSection.scss'

export default function LocationSection() {
    return (
        <>
            <section className='location_section'>
                <div className="location_content">
                    <div className='heading_section location_heading'>ГЕОЛОКАЦІЯ <br /> НАШОГО РЕСТОРАНУ</div>
                    <MapBoxGL></MapBoxGL>
                </div>
            </section>
        </>
    )
}