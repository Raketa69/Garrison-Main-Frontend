import './IntroSection.scss'

export default function IntroSection() {
    return (
        <>
            <section className="intro_section">
                <div className="intro_content">
                    <div className='heading_section intro_heading'>За наказом <br />
                        гострих картузів!</div>
                    <div className='into_card'>
                        <div className="card_text">
                            <h2 className='subheading'>ВІТАЄМО</h2> <br />
                            <p className='text_section'>
                                Вас у ресторані Garrison Pub, штаб квартирі компанії "Shelby Limited". <br />
                                <br />
                                Це улюблене місце для випивки у Гострих кашкетів. У перекладі з англійської він відомий
                                як «Гарнізонний паб» та «Гарнізонний шинок».<br />
                                <br />
                                «Гарнізон» — це вишуканий паб, де вся латунь відполірована до сліпучого блиску. Усі дзеркала позолочені.
                                У дверях вікна з матового скла. У той час як зовні паб занедбаний, всередині надлишок кольорів та декору. Є маленька окрема кімната з перепусткою-
                                через вікно до бару, який використовує Томас Шелбі для ведення бізнесу Peaky Blinder. У глибині головної кімнати також є піаніно.
                            </p>
                        </div>
                        <div className="card_img"></div>

                    </div>
                </div>
            </section>
        </>
    )

}