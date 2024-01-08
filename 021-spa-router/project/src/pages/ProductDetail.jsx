import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return (
    <div>
      <h1>ProductDetails</h1>
      <p>{params.productId}</p>
    </div>
  );
};

export default ProductDetail;
