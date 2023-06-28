import GalleryBox from '../../components/layout/Fancybox/GalleryBox'
import { Footer } from '../../components/layout/Footer/Footer'
import { Header } from '../../components/layout/Header/Header'
import GallerySection from '../../components/screens/home/GallerySection/GallerySection'
import './menuPage.scss'

export default function MenuPage() {
    return (
        <>
            <Header></Header>
            <section className="heading_section">
                <div className="heading_content menupage_content">
                    <div className='heading_text'>
                        Основне меню <br />
                        Ресторану Garrison Pub
                    </div>
                </div>
                <div className='menu_content'>
                    <div className='menu_navbar'>
                        <div className='menu_tabs'>
                            <nav className='tabs__items'>
                                <a className='tabs__heading' href="#salat">Салати</a>
                                <a className='tabs__heading' href="#cold">Холодні закуски</a>
                                <a className='tabs__heading' href="#hot">Гарячі закуски</a>
                                <a className='tabs__heading' href="#soup">Супи</a>
                                <a className='tabs__heading' href="#garnir">Гарніри</a>
                                <a className='tabs__heading' href="#meat">М'ясні страви</a>
                                <a className='tabs__heading' href="#desert">Десерти</a>
                            </nav>
                        </div>
                        <div>
                            <div id="salat" className='tabs__block'>
                                <div className='dish_item'>
                                    <div className='item_content'>
                                        <div className='item_img item_img_salat'></div>
                                        <div className='item_text'>
                                            <p className='item_text_heading'>
                                                Салат «Цезар» з куркою ......................  210 грн. <br />
                                                240гр <br /> <br />
                                            </p>
                                            <p className='item_text_content'>
                                                Склад: <br />
                                                Салат Айсберг, Куряче філе, Помідори "Чері", сухарі, Сир "Пармезан".
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='dish_item'>
                                    <div className='item_content'>
                                        <div className='item_img item_img_salat2'></div>
                                        <div className='item_text'>
                                            <p className='item_text_heading'>
                                                Салат з морським коктелем
                                                і цитрусовою заправкою ......................  320 грн. <br />
                                                260гр <br /> <br />
                                            </p>
                                            <p className='item_text_content'>
                                                Склад: <br />
                                                Салат Айсберг, Апельсин, Креветки, Кальмари, Сир "Пармезан".
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='dish_item'>
                                    <div className='item_content'>
                                        <div className='item_img item_img_salat3'></div>
                                        <div className='item_text'>
                                            <p className='item_text_heading'>
                                                Салат «Панцанелла» з анчоусом ......................  220 грн. <br />
                                                240гр <br /> <br />
                                            </p>
                                            <p className='item_text_content'>
                                                Склад: <br />
                                                Салат Айсберг, Анчоуси, Помідори "Чері", Сир "Пармезан".
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="cold" className='tabs__block'>
                                <div className='dish_item'>
                                    <div className='item_content'>
                                        <div className='item_img item_img_cold'></div>
                                        <div className='item_text'>
                                            <p className='item_text_heading'>
                                                Карпаччо із яловичини
                                                з крем-сиром та трюфелем ......................  320 грн. <br />
                                                240гр <br /> <br />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='dish_item'>
                                    <div className='item_content'>
                                        <div className='item_img item_img_cold2'></div>
                                        <div className='item_text'>
                                            <p className='item_text_heading'>
                                                Тартар із лосося
                                                з крем-сиром ......................  360 грн. <br />
                                                260гр <br /> <br />
                                            </p>

                                        </div>
                                    </div>
                                </div>
                                <div className='dish_item'>
                                    <div className='item_content'>
                                        <div className='item_img item_img_cold3'></div>
                                        <div className='item_text'>
                                            <p className='item_text_heading'>
                                                Чері пате
                                                у вишневій глазурі ......................  150 грн. <br />
                                                200гр <br /> <br />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="hot" className='tabs__block'>
                                <div className='dish_item'>
                                    <div className='item_content'>
                                        <div className='item_img item_img_hot'></div>
                                        <div className='item_text'>
                                            <p className='item_text_heading'>
                                                Дюжина креветок в
                                                часниково-розмариновому
                                                соусі ......................  379 грн. <br />
                                                250гр <br /> <br />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='dish_item'>
                                    <div className='item_content'>
                                        <div className='item_img item_img_hot2'></div>
                                        <div className='item_text'>
                                            <p className='item_text_heading'>
                                                Тигрові креветки
                                                з соусом «Унагі» ......................  379 грн. <br />
                                                250гр <br /> <br />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='dish_item'>
                                    <div className='item_content'>
                                        <div className='item_img item_img_hot3'></div>
                                        <div className='item_text'>
                                            <p className='item_text_heading'>
                                                Печериці фаршировані
                                                сулугуні ......................  158 грн. <br />
                                                200гр <br /> <br />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="soup" className='tabs__block'>
                                <div className='dish_item'>
                                    <div className='item_content'>
                                        <div className='item_img item_img_soup'></div>
                                        <div className='item_text'>
                                            <p className='item_text_heading'>
                                                Борщ з яловичиною
                                                ......................  160 грн. <br />
                                                350гр <br /> <br />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='dish_item'>
                                    <div className='item_content'>
                                        <div className='item_img item_img_soup2'></div>
                                        <div className='item_text'>
                                            <p className='item_text_heading'>
                                                Бульйон з локшиною та чері
                                                ......................  130 грн. <br />
                                                300гр <br /> <br />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='dish_item'>
                                    <div className='item_content'>
                                        <div className='item_img item_img_soup3'></div>
                                        <div className='item_text'>
                                            <p className='item_text_heading'>
                                                Юшка грибна «Закарпатська»
                                                ......................  150 грн. <br />
                                                350гр <br /> <br />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="garnir" className='tabs__block'>
                                <div className='dish_item'>
                                    <div className='item_content'>
                                        <div className='item_img item_img_garnir'></div>
                                        <div className='item_text'>
                                            <p className='item_text_heading'>
                                                Дольки картоплі
                                                з соусом «Світ Чилі»
                                                ......................  90 грн. <br />
                                                150гр <br /> <br />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='dish_item'>
                                    <div className='item_content'>
                                        <div className='item_img item_img_garnir2'></div>
                                        <div className='item_text'>
                                            <p className='item_text_heading'>
                                                Аспарагус з соусом «Голандез»
                                                ......................  170 грн. <br />
                                                220гр <br /> <br />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='dish_item'>
                                    <div className='item_content'>
                                        <div className='item_img item_img_garnir3'></div>
                                        <div className='item_text'>
                                            <p className='item_text_heading'>
                                                Броколі під
                                                сметанно-сирним соусом
                                                ......................  79 грн. <br />
                                                200гр <br /> <br />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="meat" className='tabs__block'>
                                <div className='dish_item'>
                                    <div className='item_content'>
                                        <div className='item_img item_img_meat'></div>
                                        <div className='item_text'>
                                            <p className='item_text_heading'>
                                                Медальйони із телятини
                                                з білими грибами
                                                ......................  424 грн. <br />
                                                180гр <br /> <br />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='dish_item'>
                                    <div className='item_content'>
                                        <div className='item_img item_img_meat2'></div>
                                        <div className='item_text'>
                                            <p className='item_text_heading'>
                                                М'ятний стейк з вишнею
                                                та соусом «Какао Чилі»
                                                ......................  251 грн. <br />
                                                320гр <br /> <br />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='dish_item'>
                                    <div className='item_content'>
                                        <div className='item_img item_img_meat3'></div>
                                        <div className='item_text'>
                                            <p className='item_text_heading'>
                                                М'ятний стейк з вишнею
                                                та соусом «Какао Чилі»
                                                ......................  224 грн. <br />
                                                250гр <br /> <br />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="desert" className='tabs__block'>
                                <div className='dish_item'>
                                    <div className='item_content'>
                                        <div className='item_img item_img_desert'></div>
                                        <div className='item_text'>
                                            <p className='item_text_heading'>
                                                Морозиво з фруктами
                                                ......................  123 грн. <br />
                                                280гр <br /> <br />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='dish_item'>
                                    <div className='item_content'>
                                        <div className='item_img item_img_desert2'></div>
                                        <div className='item_text'>
                                            <p className='item_text_heading'>
                                                Чізкейк «Нью Йорк»
                                                ......................  130 грн. <br />
                                                150гр <br /> <br />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='dish_item'>
                                    <div className='item_content'>
                                        <div className='item_img item_img_desert3'></div>
                                        <div className='item_text'>
                                            <p className='item_text_heading'>
                                                Штрудель маково-вишневий
                                                ......................  129 грн. <br />
                                                170гр <br /> <br />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='GalleryBox_wrap'>
                <GallerySection />
            </section>
            <Footer></Footer>
        </>
    )

}