import logo from "./logo.svg";
import "./App.css";
import ProductForm from "./components/ProductForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Product Form</p>
      </header>
      <ProductForm />
    </div>
  );
}

export default App;
