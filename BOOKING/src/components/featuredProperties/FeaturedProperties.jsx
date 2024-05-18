import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/square250/971353.webp?k=a5b47d2c38469086427837dfe64ab2e6f57ba52f0504359ef4cc02dc4b9b0737&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Aparthotel stare Miasto</span>
        <span className="fpCity">madrid</span>
        <span className="fpPrice">starting from $25</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/square250/977192.webp?k=9b5deb1736f05b131436cd8ee666e23a766e74c39720fce87cec8677238fe207&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Apollo hotel </span>
        <span className="fpCity">london</span>
        <span className="fpPrice">starting from $29</span>
        <div className="fpRating">
          <button>8.0</button>
          <span>noice</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/square250/688180.webp?k=5b71cb1208b710974408f28f1cdef1c391efcd5fa488aa8dce4e79c177220360&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">jinghala</span>
        <span className="fpCity">pakistan</span>
        <span className="fpPrice">starting from $0.2</span>
        <div className="fpRating">
          <button>0.2</button>
          <span>terror</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/square250/977262.webp?k=2b852648c76ccaff8be05333057712eda873343dfaa79cd23e55534a1a55aecc&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">china meghoi chin chu chi</span>
        <span className="fpCity">chuii chan</span>
        <span className="fpPrice">starting from $200</span>
        <div className="fpRating">
          <button>6.9</button>
          <span>good</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
