import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/468245684.webp?k=0128809965c07c03fbaf2669558ce9058c93ca74f2ec44c249037e524166bf08&o="
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">free airport taxi</span>
        <span className="siSubtitle">
          studio Apartment with Air Conditioning
        </span>
        <span className="siFeatures">
          Entire studio . 1 bathroom . 21m 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">you can cancel later</span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailsTexts">
          <span className="siPrice">$123</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
