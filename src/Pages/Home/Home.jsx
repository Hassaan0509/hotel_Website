import React from "react";
import style from "./home.module.css";
import Slider from "../../Components/Slider/Slider";
import pic1 from "./images/pic1.jpg";

const Home = () => {
  return (
    <>
      <div className="container-flid">
        <Slider />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h1 className="">Welcome to our Hotel</h1>
              <form action="reservation.php" method="post">
                <div className={style.elem_group}>
                  <label for="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="visitor_name"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className={style.elem_group}>
                  <label for="email">Your E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="visitor_email"
                    placeholder="john.doe@email.com"
                    required
                  />
                </div>
                <div className={style.elem_group}>
                  <label for="phone">Your Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="visitor_phone"
                    placeholder="498-348-3872"
                    required
                  />
                </div>
                <hr />
                <div className={`${style.elem_group} ${style.inlined}`}>
                  <label for="adult">Adults</label>
                  <input
                    type="number"
                    id="adult"
                    name="total_adults"
                    placeholder="2"
                    min="1"
                    required
                  />
                </div>
                <div className={`${style.elem_group} ${style.inlined}`}>
                  <label for="child">Children</label>
                  <input
                    type="number"
                    id="child"
                    name="total_children"
                    placeholder="2"
                    min="0"
                    required
                  />
                </div>
                <div className={`${style.elem_group} ${style.inlined}`}>
                  <label for="checkin-date">Check-in Date</label>
                  <input
                    type="date"
                    id="checkin-date"
                    name="checkin"
                    required
                  />
                </div>
                <div className={`${style.elem_group} ${style.inlined}`}>
                  <label for="checkout-date">Check-out Date</label>
                  <input
                    type="date"
                    id="checkout-date"
                    name="checkout"
                    required
                  />
                </div>

                <button className="my-4" type="submit">
                  Book The Rooms
                </button>
              </form>
            </div>
            <div className="col-md-8">
              <div
                className="d-flex flex-row align-items-center"
                style={{ heigth: "100%" }}
              >
                <div className="text-center">
                  <h3 className="mx-auto" style={{ maxWidth: "300px" }}>WELCOME TO PEARL-CONTINENTAL HOTEL LAHORE</h3>
                  <p className="mx-auto" style={{ maxWidth: "350px" }}>
                    Surround yourself with serenity in the heart of the bustling
                    city as we welcome you to Pearl-Continental Hotel Lahore.
                    Experience the comforts of home by staying in our modern
                    rooms and suites. Enjoy delicious food at our signature
                    restaurants serving both international and local cuisines.
                    Relax in the fitness centre, spa or swimming pool. With our
                    round-the-clock services, we ensure making your stay
                    pleasant and comfortable, each time you vist :
                  </p>
                </div>
                <div className="">
                  <img src={pic1} height="277px" width="370px" alt="pic1" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-center">Facilities</h3>
        <div className="container-fluid">
          <div className="row my-4 bg-light">
            <div className="col-md-6 my-5">
              <div className="d-flex flex-column">
                <div className="text-center">
                  <h6 className="border-bottom border-info pb-1 d-inline">
                    Business Center
                  </h6>
                  <h3 className="my-2">Impeccable Service</h3>
                  <p className="mx-auto" style={{ maxWidth: "200px" }}>
                    Explore our meeting venues with a wide variety of
                    well-equipped conference halls and meeting rooms, perfect
                    for all your events.
                  </p>
                  <button className="btn btn-info">View More</button>
                </div>
                <div className="mx-auto">
                  <img
                    src={pic1}
                    className="mt-5"
                    height="377px"
                    width="470px"
                    alt="pic1"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 my-5">
              <div className="d-flex flex-column">
                <div className="mx-auto">
                  <img
                    src={pic1}
                    className="mb-5"
                    height="377px"
                    width="470px"
                    alt="pic1"
                  />
                </div>
                <div className="text-center">
                  <h6 className="border-bottom border-info pb-1 d-inline">
                    Spa and wellness
                  </h6>

                  <h3 className="my-2">Relax & Recover</h3>
                  <p className="mx-auto" style={{ maxWidth: "170px" }}>
                    Embark on a soul-soothing journey in our Spa with a variety
                    of treatments and massages.
                  </p>
                  <button className="btn btn-info ">View More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
