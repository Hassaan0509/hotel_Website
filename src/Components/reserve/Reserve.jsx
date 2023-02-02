import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

import style from "./reserve.module.css";
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Reserve = ({ setOpen, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };


  const isAvailable = (roomNumber) => {
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`/rooms/availability/${roomId}`, {
          });
          return res.data;
        })
      );
      setOpen(false);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  const data = [
    {
      _id: "60f1b0f1b0b2a0a0b4e1b0f1",
      title: "Single Room",
      desc: "Single Room with a single bed",
      maxPeople: 1,
      price: 100,
      roomNumbers: [
        {
          _id: "60f1b0f1b0b2a0a0b4e1b0f2",
          number: 1,
          unavailableDates: [],
        },
        {
          _id: "60f1b0f1b0b2a0a0b4e1b0f3",
          number: 2,
          unavailableDates: [],
        },
      ],
    },
  ];
  return (
    <div className={style.reserve}>
      <div className={style.rContainer}>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className={style.rClose}
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms:</span>
        {data.map((item) => (
          <div className={style.rItem} key={item._id}>
            <div className={style.rItemInfo}>
              <div className={style.rTitle}>{item.title}</div>
              <div className={style.rDesc}>{item.desc}</div>
              <div className={style.rMax}>
                Max people: <b>{item.maxPeople}</b>
              </div>
              <div className={style.rPrice}>{item.price}</div>
            </div>
            <div className={style.rSelectRooms}>
              {item.roomNumbers.map((roomNumber) => (
                <div className={style.room}>
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleClick} className={style.rButton}>
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Reserve;
