import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <Stack spacing={2} direction="row">
        <Button component={Link} to="/">
          Home
        </Button>
        <Button component={Link} to="/about">
          About
        </Button>
        <Button component={Link} to="/register">
          Register
        </Button>
        <Button component={Link} to="/login">
          Login
        </Button>
        <Button component={Link} to="/login">
          Logout
        </Button>
      </Stack>
    </>
  );
};

export default Nav;
