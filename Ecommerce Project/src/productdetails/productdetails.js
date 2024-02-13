import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { IoBagAdd } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbFileDescription } from "react-icons/tb";
import Nav from "../Navigation/Nav";
import "./productdetails.css";

export default function App({ data }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <button
        className="close"
        onClick={() => setIsOpen((curIsOpen) => !curIsOpen)}
      >
        &times;
      </button>
      {isOpen && (
        <>
          <Nav />
          <section className="overall-container">
            <div className="product-wrapper">
              <div className="product-main">
                <img
                  src="https://blackberrys.com/cdn/shop/files/textured-leather-sneakers-in-white-qwhite-blackberrys-clothing-1.jpg?v=1685955622"
                  alt="heyy"
                  className="product-img"
                />
                <img
                  src="https://m.media-amazon.com/images/I/610rzm7Z9gL._SY395_.jpg"
                  alt="heyy"
                  className="product-img"
                />
              </div>
              <div className="product-main2">
                <img
                  src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23869882/2023/7/4/a9932a37-04af-4caf-8434-3c236cb4541f1688469529773RedTapeMenWhiteWovenDesignSneakers4.jpg"
                  alt="heyy"
                  className="product-img"
                />
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY03QN433Z_N-A_3hUxvKBNhVUmF5UO57xDkt-jDrIb9HkqqgvQseKbu5etT9kah29ZQU&usqp=CAU"
                  alt="heyy"
                  className="product-img"
                />
              </div>
              <div className="product-main2">
                <img
                  src="https://m.economictimes.com/thumb/msid-103070960,width-1200,height-1200,resizemode-4,imgsize-18652/classic-sneakers-for-men-under.jpg"
                  alt="heyy"
                  className="product-img"
                />
                <img
                  src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23869882/2023/7/4/1ea4ab38-9087-4dea-811e-784cbb45d49c1688469529815RedTapeMenWhiteWovenDesignSneakers5.jpg"
                  alt="heyy"
                  className="product-img"
                />
              </div>
              <div className="product-main2">
                <img
                  src="https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/23869882/2023/7/4/99d1a751-e925-41df-970b-eadde22dd86a1688469529759RedTapeMenWhiteWovenDesignSneakers6.jpg"
                  alt="heyy"
                  className="product-img"
                />
              </div>
            </div>
            <div className="product-detailer">
              <div className="subhead">
                <h1 className="subheader">Nike Air MAX</h1>
                <h3 className="subdetail">
                  Men Perforated Slip Resistant Lace-Up Sneakers
                </h3>
              </div>
              <div className="section2">
                <span className="mrp">MRP</span>
                <span className="mrp total">$250</span>
                <span className="mrp discounted">$149</span>
                <span className="discount">(25% Discount)</span>
                <br />
                <span className="tax">INCLUSIVE OF ALL TAXES</span>
                <h3 className="sizer">Select Size (UK SIZE)</h3>
                <button className="btn-size">6</button>
                <button className="btn-size">7</button>
                <button className="btn-size">8</button>
                <button className="btn-size">9</button>
                <button className="btn-size">10</button>
                <div className="sub-btn">
                  <button className="btn-addcart">
                    <IoBagAdd /> Add To Cart
                  </button>
                  <button className="btn-wishlist">
                    <CiHeart />
                    WishList
                  </button>
                </div>
              </div>
              <div className="address-details">
                <h3 className="add-h">
                  DELIVERY OPTIONS <CiDeliveryTruck />
                </h3>
                <form className="formup">
                  <label>
                    <input
                      type="text"
                      name="fname"
                      textholder="Enter Your Pincode"
                      className="pincode"
                    />
                    <button className="btn-pincode">check</button>
                  </label>
                </form>
                <p className="form-p">
                  Please enter PIN code to check delivery time & Pay on Delivery
                  Availability
                </p>
                <p className="form-h">100% Original Products</p>
                <p className="form-h">Pay on delivery might be available</p>
                <p className="form-h">Easy 14 days returns and exchanges</p>
                <p className="form-h">Try & Buy might be available</p>
              </div>
              <section className="product-description">
                <div className="product-description-top">
                  <h3 className="product-p">
                    PRODUCT DETAILS <TbFileDescription />
                  </h3>
                  <p className="product-description-p">
                    A pair of round toe white sneakers ,has regular styling
                    Lace-ups detail
                    <br />
                    PUupper <br /> Cushioned footbed <br />
                    Textured and patterned outsole <br />
                    Warranty: 45 days <br />
                    Warranty provided by brand/manufacturer
                  </p>
                </div>
                <div className="Features">
                  <h3 className="Features-h">Features:</h3>
                  <p>
                    Performance with comfort
                    <br />
                    Slip resistant
                    <br />
                    Durability
                    <br />
                    On ground traction
                  </p>
                </div>
                <div className="materials">
                  <h3 className="materials-h">Material & Care</h3>
                  <p>
                    PU
                    <br />
                    Wipe with a clean and dry cloth to remove dust
                  </p>
                </div>
                <h3>Specifications</h3>
                <div className="Specifications">
                  <div className="col-1">
                    <div className="inner-col">
                      <p>Type</p>
                      <p className="inner-col-details">Sneakers</p>
                    </div>
                    <div className="inner-col">
                      <p>Pattern</p>
                      <p className="inner-col-details">Perforations</p>
                    </div>
                    <div className="inner-col">
                      <p>Shoe Width</p>
                      <p className="inner-col-details">Regular</p>
                    </div>
                    <div className="inner-col">
                      <p>Insole</p>
                      <p className="inner-col-details">EVA or Rubber</p>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="inner-col">
                      <p>Toe Shape</p>
                      <p className="inner-col-details">Round Toe</p>
                    </div>
                    <div className="inner-col">
                      <p>Fastening</p>
                      <p className="inner-col-details">Lace-Ups</p>
                    </div>
                    <div className="inner-col">
                      <p>Ankle-Height</p>
                      <p className="inner-col-details">Regular</p>
                    </div>
                    <div className="inner-col">
                      <p>Sole Material</p>
                      <p className="inner-col-details">TPR</p>
                    </div>
                  </div>
                </div>
              </section>
              <section className="ratings">
                <div className="review">
                  <h3>Reviews</h3>
                  <p className="strong">
                    4 {<AiFillStar className="ratings-star" />}
                    {<AiFillStar className="ratings-star" />}
                    {<AiFillStar className="ratings-star" />}
                    {<AiFillStar className="ratings-star" />}
                  </p>
                </div>

                <div className="customer-review">
                  <h3>What Customers Said?</h3>
                  <p>
                    Sneakers exceeded my expectations in both style and comfort.
                    The attention to detail in design is evident, and the
                    quality of materials used ensures durability.
                  </p>
                </div>
              </section>
            </div>
          </section>
        </>
      )}
    </>
  );
}
