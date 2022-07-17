import "./App.css";
import ProductForm from "./components/AddProductForm/ProductForm";
import logo from "./logo.svg";
import AddProductForm from "./components/ProductForm/AddProduct/AddProductForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Product Form</p>
        <AddProductForm />
      </header>
      <ProductForm />
    </div>
  );
}

export default App;
