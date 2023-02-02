import React, { useState } from "react";
import style from "./Card.module.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCircleArrowLeft,
//   faCircleArrowRight,
//   faCircleXmark,
//   faLocationDot,
// } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Card = () => {
  // const [slideNumber, setSlideNumber] = useState(0);
  // const [open, setOpen] = useState(false);

  // const handleOpen = (i) => {
  //   setSlideNumber(i);
  //   setOpen(true);
  // };

  // const handleMove = (direction) => {
  //   let newSlideNumber;

  //   if (direction === "l") {
  //     newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
  //   } else {
  //     newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
  //   }

  //   setSlideNumber(newSlideNumber);
  // };
  const data = [
    {
      id: 1,
      photos: [
        "data:image/jpeg;base64,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",
        "data:image/jpeg;base64,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",
        "data:image/jpeg;base64,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",
      ],
      name: "Deluxe rooma",
      distance: "5m from center",
      taxiOp: "Free airport taxi",
      subtitle: "Studio Apartment with Air conditioning",
      features: "qwertdfyguhjkhgfdxfxg",
      cancelOp: "Free cancellation",
      cancelOpSubtitle:
        "You can cancel later, so lock in this great price today!",
      rating: 5,
      price: 43655,
      taxOp: "Includes taxes and fees",
    },
  ];
  return data.map((item) => {
    return (
      <>
        {/* {open && (
          <div className={style.slider}>
            <FontAwesomeIcon
              icon={faCircleXmark}
              className={style.close}
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className={style.arrow}
              onClick={() => handleMove("l")}
            />
            <div className={style.sliderWrapper}>
              <img
                src={data[0].photos[slideNumber]}
                alt=""
                className={style.sliderImg}
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className={style.arrow}
              onClick={() => handleMove("r")}
            />
          </div>
        )} */}
        <div className={style.searchItem} key={item.id}>
          <img
            // onClick={() => handleOpen(1)}
            src={item.photos[0]}
            alt=""
            className={style.siImg}
          />
          <div className={style.siDesc}>
            <h1 className={style.siTitle}>{item.name}</h1>
            <span className={style.siDistance}>
              {item.distance}m from center
            </span>
            <span className={style.siTaxiOp}>{item.taxiOp}</span>
            <span className={style.siSubtitle}>{item.subtitle}</span>
            <span className={style.siFeatures}>{item.features}</span>
            <span className={style.siCancelOp}>{item.cancelOp}</span>
            <span className={style.siCancelOpSubtitle}>
              {item.cancelOpSubtitle}
            </span>
          </div>
          <div className={style.siDetails}>
            {item.rating && (
              <div className={style.siRating}>
                <span>Excellent</span>
                <button>{item.rating}</button>
              </div>
            )}
            <div className={style.siDetailTexts}>
              <span className={style.siPrice}>${item.price}</span>
              <span className={style.siTaxOp}>{item.taxOp}</span>
              <Link to="/">
                <button className={style.siCheckButton}>
                  See availability
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  });
};

export default Card;
