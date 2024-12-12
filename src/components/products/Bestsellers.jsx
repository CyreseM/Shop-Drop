import { bestsellers } from "../../data";
import Products from "./Products";
function Bestsellers() {
  return <Products items={bestsellers} heading="Bestsellers" />;
}

export default Bestsellers;
