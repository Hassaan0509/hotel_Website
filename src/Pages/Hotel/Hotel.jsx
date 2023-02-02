import style from "./Hotel.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Reserve from "../../Components/reserve/Reserve";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();


  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
  }


  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const handleClick = () => {
    
    setOpenModal(true);
  };

  const data = {
    name: "Deluxe room",
    address: "esdrtfyguhioiuygftdghjklj",
    distance: "5",
    cheapestPrice: "100",
    photos: [
      "data:image/jpeg;base64,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",
      "data:image/jpeg;base64,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",
      "data:image/jpeg;base64,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",
      "data:image/jpeg;base64,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",
      "data:image/jpeg;base64,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",
      "data:image/jpeg;base64,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",
    ],
    title: "uyftgcvb dfcuhshv",
    desc: "sdrftgyhujihgfxdfcgvhbjnkljhgfrthyujijjhugfdxgvbhjnk",
  };
  return (
    <div>
      {loading ? (
        "loading"
      ) : (
        <div className={style.hotelContainer}>
          {open && (
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
                  src={data.photos[slideNumber]}
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
          )}
          <div className={style.hotelWrapper}>
            <button className={style.bookNow}>Reserve or Book Now!</button>
            <h1 className={style.hotelTitle}>{data.name}</h1>
            <div className={style.hotelAddress}>
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className={style.hotelDistance}>
              Excellent location – {data.distance}m from center
            </span>
            <span className={style.hotelPriceHighlight}>
              Book a stay over ${data.cheapestPrice} at this property and get a
              free airport taxi
            </span>
            <div className={style.hotelImages}>
              {data.photos?.map((photo, i) => (
                <div className={style.hotelImgWrapper} key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    className={style.hotelImg}
                  />
                </div>
              ))}
            </div>
            <div className={style.hotelDetails}>
              <div className={style.hotelDetailsTexts}>
                <h1 className={style.hotelTitle}>{data.title}</h1>
                <p className={style.hotelDesc}>{data.desc}</p>
              </div>
              <div className={style.hotelDetailsPrice}>
                <h1>Perfect for a days-night stay!</h1>
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  {/* <b>${days * data.cheapestPrice * options.room}</b> ({days}{" "} */}
                  nights)
                </h2>
                <button onClick={handleClick}>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {openModal && <Reserve setOpen={setOpenModal} />}
    </div>
  );
};

export default Hotel;
