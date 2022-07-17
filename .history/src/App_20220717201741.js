import "./App.css";
import logo from "./logo.svg";
import AddProductForm from "./components/ProductForm/AddProduct/AddProductForm";
import ProductListTable from "./components/ProductList/ProductListTable";
import PricesForm from "./components/ProductForm/Prices/PricesForm";
import ShippingForm from "./components/ProductForm/Shipping/ShippingForm";
import MarketingForm from "./components/ProductForm/Marketing/MarketingForm";
import UserListTable from "./components/UserList/UserListTable";
import CreateUserForm from "./components/UserForm/CreateUser/CreateUserForm";
import AccessInfoForm from "./components/UserForm/AccessInfo/AccessInfoForm";

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
      <AddProductForm />
      <PricesForm />
      <ShippingForm />
      <MarketingForm />
      <CreateUserForm />
      <AccessInfoForm />
    </div>
  );
}

export default App;
