import { Box } from "@mui/material";
import React from "react";
import AddProductForm from "./AddProduct/AddProductForm";
import MarketingForm from "./Marketing/MarketingForm";
import PricesForm from "./Prices/PricesForm";
import ShippingForm from "./Shipping/ShippingForm";

function ProductForm() {
  return (
    <Box>
      <AddProductForm />
      <PricesForm />
      <ShippingForm />
      <MarketingForm />
    </Box>
  );
}

export default ProductForm;
