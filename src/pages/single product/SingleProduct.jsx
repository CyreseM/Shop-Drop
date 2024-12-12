import { useParams } from "react-router-dom";
import { allProducts } from "../../data";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./SingleProduct.css";
function SingleProduct() {
  const { id } = useParams();
  const product = allProducts.find((product) => product.id === parseInt(id));

  const colors = ["red", "purple", "teal", "green", "black"];
  const sizes = ["xs", "s", "m", "l", "xl"];
  return (
    <div>
      <div className="singleProduct-container">
        <Navbar />
        <div className="singleProduct-wrapper">
          <div className="singleProduct-imageSection">
            <img src={product.img} alt="" className="singleProduct-image" />
          </div>
          <div className="singleProduct-infoSection">
            <h2 className="singleProduct-title">{product.title}</h2>
            <p className="singleProduct-number">{product.price}</p>
            <h4 className="description-title">Description</h4>
            <p className="singleProduct-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              sed quibusdam modi totam impedit quia possimus accusantium velit
              quis hic corporis provident, incidunt eaque tempora eos, id facere
              amet voluptatibus!
            </p>
            <div className="singleProduct-options">
              <div className="colors-section">
                <h4>Colors</h4>
                <div className="colors">
                  {colors.map((color) => {
                    return (
                      <div
                        key={color}
                        className="color-circle"
                        style={{ backgroundColor: color }}
                      ></div>
                    );
                  })}
                </div>
              </div>

              <div className="sizes-section">
                <h4>Size</h4>
                <div className="sizes">
                  {sizes.map((size) => {
                    return <span key={size}>{size}</span>;
                  })}
                </div>
              </div>
            </div>

            <div className="addToCart">
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SingleProduct;
