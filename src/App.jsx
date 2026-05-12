import { Routes, Route } from "react-router";
import PageNotFound from "./components/pages/PageNotFound";
import Ad from "./components/Ad";
import PageLayout from "./components/layout/PageLayout";

function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route index />
        <Route path="about-us" />
        <Route path="products" Component={Ad} />
        <Route path="*" Component={PageNotFound} />
      </Route>
    </Routes>
  );
}
export default App;
