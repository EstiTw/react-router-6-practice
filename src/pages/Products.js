import { Link } from "react-router-dom";
import { useFetch } from "../store/hooks/useFetch";
import { useGlobalContext } from "../store/context";
const url = "https://course-api.com/javascript-store-products";

const Products = () => {
  const { products, loading } = useGlobalContext();
  useFetch(url);

  if (loading) return <h2>Loading...</h2>;

  return (
    <section className="section">
      <h2>Products</h2>
      <div className="products">
        {products.map((product) => {
          return (
            <article key={product.id}>
              <h5>{product.fields.name}</h5>
              <Link to={`/products/${product.id}`}>more info</Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
