import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square250/357661741.webp?k=c9ad9f2246b01cdb0c2c08b18c3da27150877bce9c4539bc60a340306a945ac3&o="
          alt="hotel"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>310 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square250/321013130.webp?k=68f39f5916ea0dcaf03125268a1aa47935983f7fe84069a53c78f29e16890497&o="
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>appartments</h1>
          <h2>250 appartments</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square250/484093617.webp?k=136f81e7e94cd0c3013f6440664f7833fc475c0cee61a5d463512ae5faa2aecf&o="
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Hostels</h1>
          <h2>50 hostels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://cf.bstatic.com/xdata/images/xphoto/square300/45450050.webp?k=88c63754ac94ca3faad2a1b7e723f42af646e19d5b2d711d75b0c9045cb5349a&o="
          alt=""
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>villas</h1>
          <h2>100 villas</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
