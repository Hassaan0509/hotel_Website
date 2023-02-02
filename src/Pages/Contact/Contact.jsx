import React from "react";
import style from "./contact.module.css";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className={`${style.contact_sec} ${style.sec_pad}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className={style.contact_detail}>
              <h1 className={style.section_title}>Contact us</h1>

              <ul className={style.contact_ul}>
                <li>
                  <i className="fa fa-location-dot"></i> 91, Ram Nagar, Ram Mandir,
                  Delhi
                </li>

                <li>
                  <i className="fa fa-phone"></i>
                  <Link to="tel:08510004495">
                    <b>0255000XXXX</b>
                  </Link>
                  ,
                  <Link to="tel:08510005495">
                    <b>0251600XXXX</b>
                  </Link>
                </li>

                <li>
                  <i className="fa-solid fa-envelope"></i>
                  <Link to="mailto:pardeepkumar4bjp@gmail.com">
                    <b> demounknown@gmail.com</b>
                  </Link>
                </li>
              </ul>

              <span>
                <Link to="#" className={style.fb}>
                  <i className="fa-brands fa-facebook"></i>
                </Link>
                <Link to="#" className={style.insta}>
                  <i className="fa-brands fa-instagram"></i>
                </Link>
                <Link to="#" className={style.twitter}>
                  <i className="fa-brands fa-twitter"></i>
                </Link>
              </span>
            </div>
          </div>

          <div className="col-md-6">
            <form action="#" className={style.contFrm} method="POST">
              <div className="row">
                <div className="col-sm-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className={style.inptFld}
                    required
                  />
                </div>

                <div className="col-sm-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className={style.inptFld}
                    required
                  />
                </div>

                <div className="col-sm-6">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className={style.inptFld}
                    required
                  />
                </div>

                <div className="col-sm-6">
                  <input
                    type="text"
                    name="sub"
                    placeholder="Subject"
                    className={style.inptFld}
                    required
                  />
                </div>

                <div className="col-12">
                  <textarea
                    className={style.inptFld}
                    rows=""
                    cols=""
                    placeholder="Your Message..."
                    required
                  ></textarea>
                </div>

                <div className="col-12">
                  <input
                    type="submit"
                    name="submit"
                    value="SUBMIT"
                    className={style.inptBtn}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div style={{textAlign: "center", marginTop: "20px"}}>
          <p>
            Copyright &copy;
            <script>document.write(new Date().getFullYear());</script>
            All rights reserved | Ajeet
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
