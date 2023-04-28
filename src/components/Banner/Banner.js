import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {

  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  }

  return (
    <div className='container-promo swiper'>
      <div className='swiper-wrapper'>
        
        <Slider {...settings}>
          <section className='swiper-slide promo pizza'>
            <h2 className='promo-title'>Онлайн-сервіс <br/> доставки їжї додому</h2>
            <p className='promo-text'>
              Страви з улюбленого ресторану привезе кур'єр в шкарпетках, масці і антисептиком
            </p>
          </section>

          <section className='swiper-slide promo kebab'>
            <h2 className='promo-title'>Шашлики <br/> зі скидкою в 30%</h2>
            <p className='promo-text'>
              Замовляйте шашлики в будь-якому ресторані до 10 травня і отримайте знижку по промокоду OMAGAD
            </p>
          </section>

          <section className='swiper-slide promo vegetables'>
            <h2 className='promo-title'>Знижка 20% на всю їжу <br /> по промокоду LOVE.JS</h2>
            <p className='promo-text'>
              Страви з ресторану привезуть разом з двомаподарунковимикнижками по фронтенду
            </p>
          </section>

          <section className='swiper-slide promo sushi'>
            <h2 className='promo-title'>Сети зі знижкою до 30% <br /> в ресторанах</h2>
            <p className='promo-text'>
              Знжки на сети до 30 травня по промокоду DADADA
            </p>
          </section>
        </Slider>
      </div>
    </div>
  )
}

export default Banner;