import { categories } from "../../data";
import "./Categories.css";
function Categories() {
  return (
    <div className="categories-container">
      {categories.map((item) => {
        return (
          <div key={item.id} className="category-container">
            <img src={item.img} alt="" />
            <div className="category-info">
              <h1>{item.title}</h1>
              <button>Shop Now</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
