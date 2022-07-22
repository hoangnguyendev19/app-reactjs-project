import "./App.css";
import ProductForm from "./components/ProductForm";
import UserForm from "./components/UserForm";
import ProductListTable from "./components/ProductList";
import UserListTable from "./components/UserList";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Product Form</p>
        <ProductListTable />
        <div>Wrapping</div>
        <UserListTable />
      </header>
      <ProductForm />
      <UserForm />
    </div>
  );
}

export default App;
