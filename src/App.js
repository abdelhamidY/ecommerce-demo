import ProductList from "./components/ProductsList";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import OrderDetails from "./components/OrderDetails";
import Form from "./components/Form";
const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/order-details" element={<OrderDetails />} />
        <Route path="/fill-details" element={<Form />} />
      </Routes>
    </>
  );
};
export default App;
