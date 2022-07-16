import "./App.css";
import ProductForm from "./components/AddProductForm/ProductForm";
import ProductList from "./components/ProductList";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Product Form</p>
        <ProductList />
      </header>
      <ProductForm />
    </div>
  );
}

export default App;
