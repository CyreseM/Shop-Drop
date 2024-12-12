import Announcement from "../../components/announcement/Announcement";
import Navbar from "../../components/navbar/Navbar";
import Categories from "../../components/categories/Categories";
import Slider from "../../components/slider/Slider";
import NewArrivals from "../../components/products/NewArrivals";
import Bestsellers from "../../components/products/Bestsellers";
function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <NewArrivals />
      <Bestsellers />
    </div>
  );
}

export default Home;
