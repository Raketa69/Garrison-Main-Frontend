import Fancybox from './Fancybox';
import './GalleryBox.scss'
import './AboutGalleryBox.scss'

export default function AboutGalleryBox() {
    return (
        <Fancybox
            options={{
                Carousel: {
                    infinite: false,
                },
            }}
        >
            <div className='gallery_wrapper'>
                <a className='gallery-item' data-fancybox="gallery" href="https://img1.goodfon.ru/wallpaper/nbig/6/cf/bar-guinness-pab-bar-barnaya.jpg">
                    <div className='gallery-item-wrap'>
                        <img className='gallery-item-img round-item'
                            alt=""
                            src="https://img1.goodfon.ru/wallpaper/nbig/6/cf/bar-guinness-pab-bar-barnaya.jpg"
                        />
                        <div className="overlay"></div>
                    </div>
                </a>
                <a className='gallery-item' data-fancybox="gallery" href="https://assets.resto.ru/data/spb/places/106455/fb66.jpg">
                    <img className='gallery-item-img wide-img round-item'
                        alt=""
                        src="https://assets.resto.ru/data/spb/places/106455/fb66.jpg"
                    />
                </a>
                <a className='gallery-item' data-fancybox="gallery" href="https://asset.venuescanner.com/photos/Cl5Tc/main_e7526d698a99ef39598cb631cddd85e2.jpg">
                    <div className='gallery-item-wrap'>
                        <img className='gallery-item-img round-item'
                            alt=""
                            src="https://asset.venuescanner.com/photos/Cl5Tc/main_e7526d698a99ef39598cb631cddd85e2.jpg"
                        />
                        <div className="overlay"></div>
                    </div>
                </a>
                <a className='gallery-item' data-fancybox="gallery" href="https://ilovemanchester.com/wp-content/uploads/2022/02/Peaky-Blinders-6-set-4.jpg.webp">
                    <div className='gallery-item-wrap'>
                        <img className='gallery-item-img round-item wide-img'
                            alt=""
                            src="https://ilovemanchester.com/wp-content/uploads/2022/02/Peaky-Blinders-6-set-4.jpg.webp"
                        />
                        <div className="overlay"></div>
                    </div>
                </a>
                <a className='gallery-item' data-fancybox="gallery" href="https://i.guim.co.uk/img/media/e500cd4536aa5adbc51efd1e02e7b34e35d2226e/0_58_4285_2571/master/4285.jpg?width=1020&quality=85&dpr=1&s=none">
                    <div className='gallery-item-wrap'>
                        <img className='gallery-item-img round-item'
                            alt=""
                            src="https://i.guim.co.uk/img/media/e500cd4536aa5adbc51efd1e02e7b34e35d2226e/0_58_4285_2571/master/4285.jpg?width=1020&quality=85&dpr=1&s=none"
                        />
                        <div className="overlay"></div>
                    </div>
                </a>
                <a className='gallery-item' data-fancybox="gallery" href="https://www.kino-teatr.ru/art/5415/76306.jpg">
                    <div className='gallery-item-wrap'>
                        <img className='gallery-item-img round-item'
                            alt=""
                            src="https://www.kino-teatr.ru/art/5415/76306.jpg"
                        />
                        <div className="overlay"></div>
                    </div>
                </a>
                <a className='gallery-item' data-fancybox="gallery" href="https://img2.goodfon.ru/original/1024x1024/c/63/peaky-blinders-ostrye-831.jpg">
                    <div className='gallery-item-wrap'>
                        <img className='gallery-item-img round-item big-item'
                            alt=""
                            src="https://img2.goodfon.ru/original/1024x1024/c/63/peaky-blinders-ostrye-831.jpg"
                        />
                        <div className="overlay"></div>
                    </div>
                </a>
                <a className='gallery-item' data-fancybox="gallery" href="https://img.the-village.me/the-village.me/post_image-image/LlK_wySksPqrt03LelLdHg.jpg">
                    <div className='gallery-item-wrap'>
                        <img className='gallery-item-img round-item big-item'
                            alt=""
                            src="https://img.the-village.me/the-village.me/post_image-image/LlK_wySksPqrt03LelLdHg.jpg"
                        />
                        <div className="overlay"></div>
                    </div>
                </a>
            </div>
        </Fancybox>

    );
}
