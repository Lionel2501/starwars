import { EffectFade, Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

const CardTechnologie = () => {

  return (
    <Swiper
      spaceBetween={30}
      effect="fade" // Applique l'effet de fondu
      loop={true}
      direction="vertical" // Active le défilement vertical
      mousewheel={true}
      pagination={{ clickable: true, el: '.blog-slider__pagination' }} // Configuration de la pagination
      modules={[Pagination, EffectFade, Mousewheel]} 
      style={{
        height: '500px', // Définit une hauteur pour le Swiper
        width: '800px',  // Optionnel : largeur du slider
      }}
    >
        <SwiperSlide style={{ display: 'flex' }}>
            <div className="blog-slider__img">
                <img src="../../public/logo/php_logo.png" alt="" />
            </div>
            <div className="blog-slider__content">
                <span className="blog-slider__code">PHP</span>
                <div className="blog-slider__title">Lorem Ipsum Dolor</div>
                <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex' }}>
            <div className="blog-slider__img">
                <img src="../../public/logo/php_logo.png" alt="" />
            </div>
            <div className="blog-slider__content">
                <span className="blog-slider__code">PHP</span>
                <div className="blog-slider__title">Lorem Ipsum Dolor</div>
                <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{ display: 'flex' }}>
            <div className="blog-slider__img">
                <img src="../../public/logo/php_logo.png" alt="" />
            </div>
            <div className="blog-slider__content">
                <span className="blog-slider__code">PHP</span>
                <div className="blog-slider__title">Lorem Ipsum Dolor</div>
                <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
            </div>
        </SwiperSlide>
        <div className="blog-slider__pagination"></div>
    </Swiper>
    );
};

export default CardTechnologie;