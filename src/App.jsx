import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route index/>
      <Route path="about-us"/>
      <Route path="products"/>
    </Routes>
  );
}
export default App;
