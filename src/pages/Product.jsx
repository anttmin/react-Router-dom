import { Link, json, useLoaderData } from "react-router-dom";
import User from "../components/User";

const Products = () => {
  const products = useLoaderData();

  return (
    <>
      {products.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <div className="card">
            <p>{product.title}</p>
            <User userID={product.userId} />
          </div>
        </Link>
      ))}
    </>
  );
};

export default Products;

export const loader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(response)
  if (!response.ok) {
    throw json({ message: "Can't get posts now." }, { status: 200 });
  } else {
    const products = await response.json();
    // console.log(products)
    return products;
  }
};