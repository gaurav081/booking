import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/504181194.jpg?k=5e5d46f83bad51e774a3c09b5823fd6f273db22068ce254d8f674edc51589a59&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/21653274.jpg?k=583e7636b5aba372497137c5d04ac4d700d57b4c9f0dc680b8d4f3ec22404b86&o=&hp=1 ",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/504181297.jpg?k=cc3b8bb3213b647010a2db3f2e660b5c95c7ba2f77ca8bb14a0fe59722fce32a&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/417727369.jpg?k=ded81a63b68a986f7897405ecce857d72a2430f0944b2bee4fe0636f10a7b76c&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/504152304.jpg?k=9c43d86daf6d01a94e397c790bca14ca73e9e157f0028695bbba2827be0fd22d&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/338269588.jpg?k=e0687921da1f1e0ce1341d2ec69c0e1a7b92317a25c5be05aee997d142d936db&o=&hp=1",
    },
  ];

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
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelwrapper">
          <button className="bookNow">Reserve or book now!</button>
          <h1 className="hotelTitle">Grand hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>elton St 125 New delhi</span>
          </div>

          <span className="hotelDistance">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighLight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgwrapper">
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  className="hotelImg"
                ></img>
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">stay in the heart of krakow</h1>
              <p className="hotelDesc">
                You're eligible for a Genius discount at Hostal Abami II! To
                save at this property, all you have to do is sign in. All rooms
                at the Hostal Abami II have a 32-inch (32 in) flat-screen TV and
                free Wi-Fi. The guest house is in central Madrid, between Gran
                Vía and the Puerta del Sol.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>perfect for a 2-night stay</h1>
              <span>
                Located in the real heart of Madrid, this property has an
                excellent location score of 9.5!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book now!</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
