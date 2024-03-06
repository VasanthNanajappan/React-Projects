// import { AiFillStar } from "react-icons/ai";
import { IoBagAdd } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Card({
  img,
  title,
  star,
  reviews,
  newPrice,
  prevprice,
}) {
  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>

          <section className="card-reviews">
            {star}
            {star}
            {star}
            {star}
            <span className="total-reviews">{reviews}</span>
          </section>

          <section className="card-price">
            <div className="price">
              <del>{prevprice}</del>
              {newPrice}
            </div>

            <div className="bag">
              <IoBagAdd className="bag-icon" />
            </div>
          </section>
          <div className="product-det">
            <Link to="/productdet">View Product Details..</Link>
          </div>
        </div>
      </section>
    </>
  );
}
