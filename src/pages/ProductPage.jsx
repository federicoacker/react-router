import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import ProductMoreInfo from "../components/ProductMoreInfo";
const API_URL = "https://fakestoreapi.com/products"

function ProductPage() {
    const params = useParams();
    const { data, loadingError, loaded } = useFetch(API_URL);

    const currentProduct = data.find(product => product.id === Number(params.id));
    console.log(currentProduct);
  return (
    (loaded && !loadingError) &&
    <ProductMoreInfo {...currentProduct}/>
  )
}

export default ProductPage