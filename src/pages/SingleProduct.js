import { Link, useParams, Navigate } from "react-router-dom";
import { useGlobalContext } from "../store/context";

const SingleProduct = () => {
  const { products } = useGlobalContext();
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  if (!product) return <Navigate to="/" />;
  const { image, name, price } = product.fields;
  const url = image[0] && image[0].url;

  return (
    <section className="section product">
      <img src={url} alt={name} />
      <h5>{name}</h5>
      <p>${price}</p>

      <Link to="/products" className="btn">
        Back to products
      </Link>
    </section>
  );
};

export default SingleProduct;
