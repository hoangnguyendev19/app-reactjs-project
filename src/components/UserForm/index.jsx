import { Box } from "@mui/material";
import React from "react";
import AccessInfoForm from "./AccessInfo/AccessInfoForm";
import CreateUserForm from "./CreateUser/CreateUserForm";
import TaxInfoForm from "./TaxInfo/TaxInfoForm";

function UserForm() {
  return (
    <Box>
      <CreateUserForm />
      <AccessInfoForm />
      <TaxInfoForm />
    </Box>
  );
}

export default UserForm;
