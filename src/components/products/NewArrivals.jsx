import Products from "./Products.jsx";
import { newArrivals } from "../../data";
function NewArrivals() {
  return <Products items={newArrivals} heading="New Arrivals" />;
}

export default NewArrivals;
