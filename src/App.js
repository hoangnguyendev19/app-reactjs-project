import "./App.css";
import ProductForm from "./components/ProductForm";
import UserForm from "./components/UserForm";
import logo from "./logo.svg";
import ProductList from "./components/ProductList";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Product Form</p>
        <ProductList />
        <div>Wrapping</div>
        <UserList />
      </header>
      <ProductForm />
      <UserForm />
    </div>
  );
}

export default App;
