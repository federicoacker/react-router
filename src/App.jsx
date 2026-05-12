import { Routes, Route } from "react-router";
import PageNotFound from "./components/pages/PageNotFound";

function App() {
  return (
    <Routes>
      <Route index/>
      <Route path="about-us"/>
      <Route path="products"/>
      <Route path="*" Component={PageNotFound}/>
    </Routes>
  );
}
export default App;
