import { useNavigate, useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import ProductMoreInfo from "../components/ProductMoreInfo";
const API_URL = "https://fakestoreapi.com/products"


function ProductPage() {
  const navigate = useNavigate();
  const params = useParams();

  const { data, loadingError, loaded } = useFetch(`${API_URL}/${Number(params.id)}`);

  const changeProduct = (direction) => {
    if(direction === "forward"){
      navigate(`/products/${Number(params.next)}/${Number(params.id)}/${(Number(params.next)+1) > Number(params.max) ? Number(params.min) : Number(params.next)+1}/${Number(params.max)}/${Number(params.min)}`)
    }
    else if(direction === "backward"){
      navigate(`/products/${Number(params.previous)}/${(Number(params.previous)-1) < Number(params.min) ? Number(params.max) : Number(params.previous) - 1}/${Number(params.id)}/${Number(params.max)}/${Number(params.min)}`)
    }
  }

  
  if (!data) {
    navigate("/404");
  }

  

  return (
    (loaded && !loadingError) &&
    (
      <div className="d-flex align-items-center h-100">
        <button className="btn btn-primary" onClick={() => { changeProduct("backward") }} ><i className="bi bi-arrow-bar-left arrow text-white"></i></button>
        <div className="text-center d-flex flex-column flex-grow-1 h-100 align-items-center row-gap-5">
          <button className="btn btn-primary" onClick={() => { navigate("/products") }}>
            Ritorna agli altri prodotti!</button>
          <ProductMoreInfo {...data} />
        </div>
        <button className="btn btn-primary" onClick={() => { changeProduct("forward") }} ><i className="bi bi-arrow-bar-right arrow text-white"></i></button>
      </div>
    )
  )
}

export default ProductPage