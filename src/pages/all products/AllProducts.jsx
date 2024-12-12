import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Products from "../../components/products/Products";
import { allProducts } from "../../data";

function AllProducts() {
  return (
    <div>
      <Navbar />
      <Products heading="Products" items={allProducts} />
      <Footer />
    </div>
  );
}

export default AllProducts;
