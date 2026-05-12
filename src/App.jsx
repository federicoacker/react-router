import { Routes, Route } from "react-router";
import PageNotFound from "./components/pages/PageNotFound";
import PageLayout from "./components/layout/PageLayout";
import Products from "./components/pages/Products";
import AboutUs from "./components/pages/AboutUs";
import Index from "./components/pages/Index";

function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route index Component={Index}/>
        <Route path="about-us" Component={AboutUs} />
        <Route path="products" Component={Products} />
        <Route path="*" Component={PageNotFound} />
      </Route>
    </Routes>
  );
}
export default App;
