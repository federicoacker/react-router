import { useNavigate, useParams, Link } from "react-router";
import useFetch from "../hooks/useFetch";
import ProductMoreInfo from "../components/ProductMoreInfo";
const API_URL = "https://fakestoreapi.com/products"

function ProductPage() {
  const navigate = useNavigate();
  const params = useParams();
  const { data, loadingError, loaded } = useFetch(API_URL);

  const currentProduct = data.find(product => product.id === Number(params.id));


  const changeProduct = (direction) => {
    let navigateValue;
    if (direction === "forward") {
      navigateValue = Number(params.id) + 1;
      if (Number(params.id) === data[data.length - 1].id) {
        navigateValue = data[0].id;
      }
    }
    else if (direction === "backward") {
      Number(params.id) + 1
      if (Number(params.id) === data[0].id) {
        navigateValue = data[data.length - 1].id;
      }
    }
    navigate(`/products/product/${navigateValue}`);
  }

  return (
    (loaded && !loadingError) &&
    (
      <div className="d-flex align-items-center">
        <button className="btn btn-primary" onClick={() => { changeProduct("backward") }}><i className="bi bi-arrow-bar-left arrow text-white"></i></button>
        <div className="text-center">
          <Link className="text-decoration-none text-danger bg-warning px-4 py-2 rounded text-center d-inline-block "
            to="/products">
            Ritorna agli altri prodotti!</Link>
          <ProductMoreInfo {...currentProduct} />
        </div>
        <button className="btn btn-primary" onClick={() => { changeProduct("forward") }}><i class="bi bi-arrow-bar-right arrow text-white"></i></button>
      </div>
    )
  )
}

export default ProductPage