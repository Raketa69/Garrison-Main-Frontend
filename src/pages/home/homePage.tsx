import { Footer } from "../../components/layout/Footer/Footer";
import { Header } from "../../components/layout/Header/Header";
import GallerySection from "../../components/screens/home/GallerySection/GallerySection";
import IntroSection from "../../components/screens/home/IntroSection/IntroSection";
import LocationSection from "../../components/screens/home/LocationSection/LocationSection";
import MenuIntroSection from "../../components/screens/home/MenuIntroSection/MenuIntroSection";
import ReservSection from "../../components/screens/home/ReservSection/ReservSection";
import './homePage.scss'
import backgroundH from './bg.gif'
import bglogo from './title-logo.png'

export default function HomePage() {
    return (
        <>
            <Header></Header>
            <section className="heading_section">
                <div className="heading_content">
                    <video src={backgroundH} autoPlay loop muted></video>
                    <img src={bglogo} alt="" />
                </div>
            </section>
            <IntroSection></IntroSection>
            <MenuIntroSection></MenuIntroSection>
            <GallerySection></GallerySection>
            <ReservSection></ReservSection>
            <LocationSection></LocationSection>
            <Footer />
        </>
    )

}