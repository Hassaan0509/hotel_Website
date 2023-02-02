import React from "react";
import style from "./List.module.css";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../Components/Cards/Card";
import { DateRange } from "react-date-range";
import format from "date-fns/format";

const List = () => {
  const { openDate } = useSelector((state) => state.openDate);
  const { min } = useSelector((state) => state.min);
  const { max } = useSelector((state) => state.max);
  const { searchOption } = useSelector((state) => state.searchOption);
  const { date } = useSelector((state) => state.date);
  console.log(date);
  //options set ni hOay abi koi bhi value set ni hOay abi
  const dispatch = useDispatch();

  const handleClick = () => {};
  return (
    <div>
      <div className={style.listContainer}>
        <div className={style.listWrapper}>
          <div className={style.listSearch}>
            <h1 className={style.lsTitle}>Search</h1>
            <div className={style.lsItem}>
              <label>Destination</label>
              <input placeholder="destination" type="text" />
            </div>
            <div className={style.lsItem}>
              <label>Check-in Date</label>
              <span
                onClick={() =>
                  dispatch({ type: "changeDate", payload: !openDate })
                }
              >
                {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) =>
                    dispatch({ type: "changeDates", payload: [item.selection] })
                  }
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className={style.lsItem}>
              <label>Options</label>
              <div className={style.lsOptions}>
                <div className={style.lsOptionItem}>
                  <span className={style.lsOptionText}>
                    Min price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) =>
                      dispatch({
                        type: "SET_MIN_PRICE",
                        payload: e.target.value,
                      })
                    }
                    className={style.lsOptionInput}
                  />
                </div>
                <div className={style.lsOptionItem}>
                  <span className={style.lsOptionText}>
                    Max price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) =>
                      dispatch({
                        type: "SET_MAX_PRICE",
                        payload: e.target.value,
                      })
                    }
                    className={style.lsOptionInput}
                  />
                </div>
                <div className={style.lsOptionItem}>
                  <span className={style.lsOptionText}>Adult</span>
                  <input
                    type="number"
                    min={1}
                    className={style.lsOptionInput}
                    placeholder={searchOption.adult}
                  />
                </div>
                <div className={style.lsOptionItem}>
                  <span className={style.lsOptionText}>Children</span>
                  <input
                    type="number"
                    min={0}
                    className={style.lsOptionInput}
                    placeholder={searchOption.children}
                  />
                </div>
                <div className={style.lsOptionItem}>
                  <span className={style.lsOptionText}>Room</span>
                  <input
                    type="number"
                    min={1}
                    className={style.lsOptionInput}
                    placeholder={searchOption.room}
                  />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>
          <div className={style.listResult}>
            {false ? (
              "Loading please wait"
            ) : (
              <>
                <Card />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
