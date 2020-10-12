import React, { useEffect, useState } from "react";
import style from "../styles/slider.module.scss";

const array = [
  "https://psv4.userapi.com/c856416/u543422417/docs/d17/3e260a66c5dc/eli-defaria-oV4PktGcXCs-unsplash.png?extra=lLDXvecPaI_4kQ3o8EkwDpVWxsRs9rhaOBikQmoa2OXw3VTpjw6vdPfd8T-91mTV_sSS8jxAW17aTnkmn7qv8QYTwrgXWtuuzZPDlNSCZeEosNFPwmVw2Lbn1SH1Nfn1LO6acGucQPA3L5Y2Zvi-jo6m_KvM",
  "https://psv4.userapi.com/c856416/u543422417/docs/d13/d9050e40ed45/Bez_imeni-3.png?extra=sTy1ZyctT_gLUIrH45ue6bv5kM68FjArxBWl6uf5qrRGRusY3MV47sPDfEJTMqm8Cq4odvFnYUKBT3r1eEc8N2mgjUqOHMUau0NsejZPfj1-15ISCW7uf88bxUUlA6XEbVei1S0Vng_x0eJvcm3JGqkmoyH3",
];
export default function Slider() {
  const [slide, setSlide] = useState(0);
  const [toch, setToch] = useState(null);

  const handlePrevSlide = () => {
    console.log(slide);
    if (slide > 0) {
      setSlide((prev) => prev - 1);
    }
  };
  const handleNextSlide = () => {
    if (slide < array.length - 1) {
      setSlide(slide + 1);
    }
  };
  const tochStartHandler = (e) => {
    setToch(e.touches[0].screenX);
    console.log(e.touches[0].screenX);
  };
  const tochEndHandler = (e) => {
    const tochEnd = e.changedTouches[0].screenX;
    if (toch < tochEnd) {
      handlePrevSlide();
    } else if (toch > tochEnd) {
      handleNextSlide();
    }
  };
  return (
    <div onTouchStart={tochStartHandler} onTouchEnd={tochEndHandler}>
      <div className={style.slider}>
        <div className="slider__wrapper">
          {array.map((elem, index) => (
            <div
              key={index}
              className={style["slider--item"]}
              style={{ background: `url('${elem}') center / cover no-repeat` }}
            >
              <div className={style["slider__banner"]}>
                <h1 className={style["slider__title"]}>tomato soup</h1>
                <span className={style["slider__text"]}>красный свитшот</span>
                <a className={style["slider__link"]} href="">
                  купить
                </a>
              </div>
            </div>
          ))}
        </div>
        <style jsx>
          {`
            .slider__wrapper {
              display: flex;
              align-items: center;
              transition: 0.5s;
              transform: translate(${-slide * 100}%, 0);
            }
            @media (max-width: 567px) {
              .slider__wrapper {
                transform: translate(${-slide * 50}%, 0);
              }
            }
          `}
        </style>
      </div>
      <div className={style.control}>
        <button
          className={style["control__prev-button"]}
          onClick={handlePrevSlide}
        ></button>
        <div className={style["control__pagination"]}>
          <div className={style["control__pagination-wrapper"]}>
            {array.map((elem, index) => (
              <div
                key={index}
                className={
                  index === slide
                    ? style["control__pagination--item--active"]
                    : style["control__pagination--item"]
                }
              ></div>
            ))}
          </div>
        </div>
        <button
          className={style["control__next-button"]}
          onClick={handleNextSlide}
        ></button>
      </div>
    </div>
  );
}
