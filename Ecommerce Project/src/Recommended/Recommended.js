import Button from "../components/Button";
import "./Recommended.css";

export default function Recommended({ handleClick }) {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickhandler={handleClick} value="" title="All Products" />
          <Button onClickhandler={handleClick} value="Nike" title="Nike" />
          <Button onClickhandler={handleClick} value="Adidas" title="Adidas" />
          <Button onClickhandler={handleClick} value="Puma" title="Puma" />
          <Button onClickhandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
}
