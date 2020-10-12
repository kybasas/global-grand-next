import { useState } from "react";
import style from "../styles/mobile-menu.module.scss";

export function Header() {
  const [open, setOpen] = useState(false);
  const [female, setFemale] = useState(false);
  const [man, setMan] = useState(false);

  console.log(open);
  const cross = () => {
    return (
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8.5 16V1" stroke="black" />
        <path d="M16 8.5H1" stroke="black" />
      </svg>
    );
  };
  return (
    <>
      <button onClick={() => setOpen(true)}>asdasd</button>
      <div className="mobile-menu-wrapper">
        <ul className={style["mobile-menu"]}>
          <li
            className={style["mobile-menu--item-close"]}
            onClick={() => setOpen(false)}
          >
            <span>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M21 1L1 21" stroke="black" strokeWidth="2" />
                <path d="M21 21L1 0.999999" stroke="black" strokeWidth="2" />
              </svg>
            </span>
          </li>
          <li className={style["mobile-menu--item"]}>cкидки</li>
          <li className={style["mobile-menu--item"]}>новые поступления</li>
          <li
            className={
              (style["mobile-menu--item-sex"], style["mobile-menu--item"])
            }
          >
            <span
              className={style["mobile-menu--item-wrapper"]}
              onClick={() => setMan((prev) => !prev)}
            >
              Мужское
              <span
                className="cross"
                style={{ transform: `rotate(${man ? 45 : 0}deg)` }}
              >
                {cross()}
              </span>
            </span>

            <ul
              className={style["sub-mobile-menu"]}
              style={{ display: `${man ? "block" : "none"}` }}
            >
              <li className={style["sub-mobile-menu--item"]}>Штаны</li>
              <li className={style["sub-mobile-menu--item"]}>Шорты</li>
              <li className={style["sub-mobile-menu--item"]}>Футболки</li>
            </ul>
          </li>
          <li
            className={
              (style["mobile-menu--item-sex"], style["mobile-menu--item"])
            }
          >
            <span
              className={style["mobile-menu--item-wrapper"]}
              onClick={() => setFemale((prev) => !prev)}
            >
              Женское
              <span
                className="cross"
                style={{ transform: `rotate(${female ? 45 : 0}deg)` }}
              >
                {cross()}
              </span>
            </span>
            <ul
              className={style["sub-mobile-menu"]}
              style={{ display: `${female ? "block" : "none"}` }}
            >
              <li className={style["sub-mobile-menu--item"]}>Штаны</li>
              <li className={style["sub-mobile-menu--item"]}>Шорты</li>
              <li className={style["sub-mobile-menu--item"]}>Футболки</li>
            </ul>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .mobile-menu-wrapper {
          position: absolute;
          left: -530px;
          width: 500px;
          top: 0;
          z-index: 120;
          background: #fff;
          transition: 0.5s;
        }
        .cross {
          transition: 0.4s;
        }

        @media (max-width: 768px) {
          .mobile-menu-wrapper {
            left: ${open ? 0 : -530}px;
          }
        }
        @media (max-width: 501px) {
          .mobile-menu-wrapper {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
