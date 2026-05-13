import { useNavigate, useParams, Link } from "react-router";
import useFetch from "../hooks/useFetch";
import ProductMoreInfo from "../components/ProductMoreInfo";
const API_URL = "https://fakestoreapi.com/products"

function ProductPage() {
  const navigate = useNavigate();
  const params = useParams();
  const { data, loadingError, loaded } = useFetch(API_URL);

  const currentProduct = data.find(product => product.id === Number(params.id));

  if(!currentProduct){
    navigate("/404");
  }

  const changeProduct = (direction) => {
    let navigateValue;
    if (direction === "forward") {
      navigateValue = Number(params.id) + 1;
      if (Number(params.id) === data[data.length - 1].id) {
        navigateValue = data[0].id;
      }
    }
    else if (direction === "backward") {
      navigateValue = Number(params.id) - 1;
      if (Number(params.id) === data[0].id) {
        navigateValue = data[data.length - 1].id;
      }
    }
    navigate(`/products/${navigateValue}`);
  }

  return (
    (loaded && !loadingError) &&
    (
      <div className="d-flex align-items-center h-100">
        <button className="btn btn-primary" onClick={() => { changeProduct("backward") }}><i className="bi bi-arrow-bar-left arrow text-white"></i></button>
        <div className="text-center d-flex flex-column flex-grow-1 h-100 align-items-center">
          <Link className="text-decoration-none text-danger bg-warning px-4 py-2 rounded text-center d-inline-block "
            to="/products">
            Ritorna agli altri prodotti!</Link>
          <ProductMoreInfo {...currentProduct} />
        </div>
        <button className="btn btn-primary" onClick={() => { changeProduct("forward") }}><i className="bi bi-arrow-bar-right arrow text-white"></i></button>
      </div>
    )
  )
}

export default ProductPage