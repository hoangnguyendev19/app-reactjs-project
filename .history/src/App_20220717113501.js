import "./App.css";
import logo from "./logo.svg";
import AddProductForm from "./components/ProductForm/AddProduct/AddProductForm";
import ProductListTable from "./components/ProductList/ProductListTable";
import PricesForm from "./components/ProductForm/Prices/PricesForm";
import ShippingForm from "./components/ProductForm/Shipping/ShippingForm";
import MarketingForm from "./components/ProductForm/Marketing/MarketingForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Product Form</p>
        <ProductListTable />
      </header>
      <AddProductForm />
      <PricesForm />
      <ShippingForm />
      <MarketingForm />
    </div>
  );
}

export default App;
