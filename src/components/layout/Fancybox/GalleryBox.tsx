import * as React from 'react';
import Fancybox from './Fancybox';
import './GalleryBox.scss'


export default function GalleryBox() {
    return (
        <Fancybox
            options={{
                Carousel: {
                    infinite: false,
                },
            }}
        >
            <div className='gallery_wrapper'>
                <a className='gallery-item' data-fancybox="gallery" href="https://img.championat.com/s/735x490/news/big/k/y/pravilnoe-pitanie-v-restorane-chto-sest-chtoby-ne-navredit-figure_1526399404953853699.jpg">
                    <div className='gallery-item-wrap'>
                        <img className='gallery-item-img wide-img'
                            alt=""
                            src="https://img.championat.com/s/735x490/news/big/k/y/pravilnoe-pitanie-v-restorane-chto-sest-chtoby-ne-navredit-figure_1526399404953853699.jpg"
                        />
                        <div className="overlay"></div>
                    </div>
                </a>
                <a className='gallery-item' data-fancybox="gallery" href="https://assets.gq.ru/photos/5e74b6ab39ca8300083c86e7/master/w_1600,c_limit/Black%20Thai_Pad%20thai%20s%20fasoluy.jpg">
                    <img className='gallery-item-img'
                        alt=""
                        src="https://assets.gq.ru/photos/5e74b6ab39ca8300083c86e7/master/w_1600,c_limit/Black%20Thai_Pad%20thai%20s%20fasoluy.jpg"
                    />
                </a>
                <a className='gallery-item' data-fancybox="gallery" href="https://img03.rl0.ru/afisha/o/s.afisha.ru/mediastorage/c8/f4/502df3f40abe4d76982009a0f4c8.jpg">
                    <img className='gallery-item-img'
                        alt=""
                        src="https://img03.rl0.ru/afisha/o/s.afisha.ru/mediastorage/c8/f4/502df3f40abe4d76982009a0f4c8.jpg"
                    />
                </a>
                <a className='gallery-item' data-fancybox="gallery" href="https://broniboy.ru/_next/image?url=https%3A%2F%2Fimages.broniboy.ru%2Fp5MFD6y2cVrsFvfcYrfqsAQ5KO0%3D%2F600x0%2Fsmart%2Ffilters%3Asmart_sharpen()%3Aallow_webp(false)%2Fown%2Fdb739fa6-aff6-4176-86ed-d2ff8b9fc3c9%2F8321178793ae72f8c20f1042a453e084.jpg&w=3840&q=90">
                    <img className='gallery-item-img'
                        alt=""
                        src="https://broniboy.ru/_next/image?url=https%3A%2F%2Fimages.broniboy.ru%2Fp5MFD6y2cVrsFvfcYrfqsAQ5KO0%3D%2F600x0%2Fsmart%2Ffilters%3Asmart_sharpen()%3Aallow_webp(false)%2Fown%2Fdb739fa6-aff6-4176-86ed-d2ff8b9fc3c9%2F8321178793ae72f8c20f1042a453e084.jpg&w=3840&q=90"
                    />
                </a>
                <a className='gallery-item' data-fancybox="gallery" href="https://broniboy.ru/_next/image?url=https%3A%2F%2Fimages.broniboy.ru%2Fvx3mcAeuYwS32ZJKy6JyhWlXKSg%3D%2F900x0%2Fsmart%2Ffilters%3Asmart_sharpen()%3Aallow_webp(false)%2Fhttps%3A%2F%2Fcdn.broniboy.ru%2Fown%2F9429a4c9-77ee-4f4e-894e-8d62d9282f7a%2Foriginal.jpg&w=3840&q=90">
                    <img className='gallery-item-img'
                        alt=""
                        src="https://broniboy.ru/_next/image?url=https%3A%2F%2Fimages.broniboy.ru%2Fvx3mcAeuYwS32ZJKy6JyhWlXKSg%3D%2F900x0%2Fsmart%2Ffilters%3Asmart_sharpen()%3Aallow_webp(false)%2Fhttps%3A%2F%2Fcdn.broniboy.ru%2Fown%2F9429a4c9-77ee-4f4e-894e-8d62d9282f7a%2Foriginal.jpg&w=3840&q=90"
                    />
                </a>
                <a className='gallery-item' data-fancybox="gallery" href="https://kiev.informator.ua/wp-content/uploads/2020/01/kafe_bary_kofeyni_restorany.jpg">
                    <img className='gallery-item-img wide-img'
                        alt=""
                        src="https://kiev.informator.ua/wp-content/uploads/2020/01/kafe_bary_kofeyni_restorany.jpg"
                    />
                </a>
                <a className='gallery-item' data-fancybox="gallery" href="https://s1.1zoom.ru/b5050/401/Drinks_Bar_Bottle_468131_1920x1080.jpg">
                    <img className='gallery-item-img wide-img'
                        alt=""
                        src="https://s1.1zoom.ru/b5050/401/Drinks_Bar_Bottle_468131_1920x1080.jpg"
                    />
                </a>
                <a className='gallery-item' data-fancybox="gallery" href="https://png.pngtree.com/background/20230401/original/pngtree-beautiful-small-cramped-cafe-restaurant-serving-local-foods-picture-image_2236122.jpg">
                    <img className='gallery-item-img'
                        alt=""
                        src="https://png.pngtree.com/background/20230401/original/pngtree-beautiful-small-cramped-cafe-restaurant-serving-local-foods-picture-image_2236122.jpg"
                    />
                </a>
                <a className='gallery-item' data-fancybox="gallery" href="https://png.pngtree.com/thumb_back/fw800/background/20230324/pngtree-beautiful-small-cramped-cafe-restaurant-image_2095793.jpg">
                    <img className='gallery-item-img'
                        alt=""
                        src="https://png.pngtree.com/thumb_back/fw800/background/20230324/pngtree-beautiful-small-cramped-cafe-restaurant-image_2095793.jpg"
                    />
                </a>
                <a className='gallery-item' data-fancybox="gallery" href="https://avatars.mds.yandex.net/i?id=7bdbfd1298a6ccd29d90858a556c8b06a251cf63-8427500-images-thumbs&n=13">
                    <img className='gallery-item-img'
                        alt=""
                        src="https://avatars.mds.yandex.net/i?id=7bdbfd1298a6ccd29d90858a556c8b06a251cf63-8427500-images-thumbs&n=13"
                    />
                </a>
                <a className='gallery-item' data-fancybox="gallery" href="https://avatars.mds.yandex.net/get-altay/8128793/2a000001870010cd7bc5471c4b7642f3c43d/M_height">
                    <img className='gallery-item-img'
                        alt=""
                        src="https://avatars.mds.yandex.net/get-altay/8128793/2a000001870010cd7bc5471c4b7642f3c43d/M_height"
                    />
                </a>
                <a className='gallery-item' data-fancybox="gallery" href="https://assets.resto.ru/data/spb/places/106455/fb66.jpg">
                    <img className='gallery-item-img wide-img'
                        alt=""
                        src="https://assets.resto.ru/data/spb/places/106455/fb66.jpg"
                    />
                </a>
            </div>
        </Fancybox>

    );
}
