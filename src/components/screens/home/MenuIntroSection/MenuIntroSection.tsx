import { Button } from '../../../ui/Button/Button'
import './MenuIntroSection.scss'

export default function MenuIntroSection() {
    return (
        <>
            <section className="menuIntro_section">
                <div className="menuIntro_content">
                    <div className='heading_section menuIntro_heading'>Меню</div>
                    <div className="menuIntro_text">
                        <p className='text_section'>
                            Компанія Sadler's Brewing Co була заснована у 1861 році Натаніелем Садлером,
                            а потім розширена Томасом Александром Садлером. Спочатку компанія спеціалізувалася
                            на виробництві пива, яке постачала у свої 12 пабів. Один із впливових членів банди
                            був далеким родичем родини Садлер, тому не дивно, що «Гострі картузи» були постійними
                            відвідувачами закладів Садлерів. Пізніше, натхненна романтизмом тих часів, компанія
                            Sadler's посвятила «Гострим картузам» кілька різновидів пива та лінійку міцного
                            алкоголю під однойменним брендом Peaky Blinder.
                        </p>
                    </div>
                    <div className="menuIntro_btn">
                        <Button  text={"Дивитися меню"}></Button>
                    </div>

                </div>
            </section>


        </>
    )
}