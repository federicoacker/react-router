import { Routes, Route } from "react-router";
import PageNotFound from "./pages/PageNotFound";
import PageLayout from "./layout/PageLayout";
import Products from "./pages/Products";
import AboutUs from "./pages/AboutUs";
import Index from "./pages/Index";
import ProductPage from "./pages/ProductPage";
import useFetch from "./hooks/useFetch";
const API_URL = "https://fakestoreapi.com/products"
function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route index Component={Index}/>
        <Route path="about-us" Component={AboutUs} />
        <Route path="products" Component={Products} />
        <Route path="products/:id/:previous/:next/:max/:min" Component={ProductPage} />
        <Route path="*" Component={PageNotFound} />
      </Route>
    </Routes>
  );
}
export default App;
