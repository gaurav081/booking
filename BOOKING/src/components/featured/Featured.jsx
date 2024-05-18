import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/688198.webp?k=4c74414a6ed76b016e62cf8b6000ef785280f98c55fb835d2206d8efdc8ef724&o="
          alt="hotel room"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/686023.webp?k=315b82bac9991c71d6f14f8618e68a9b6d3f45b61b9ceb335523918d0e086dbf&o="
          alt="hotel room"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>america</h1>
          <h2>431 Properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/971346.webp?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o="
          alt="hotel room"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Mumbai</h1>
          <h2>512 Properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
