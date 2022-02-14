import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginRegisterForm = ({ title }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    setMsg("");
  }, []);

  const handleClick = async (id) => {
    if (id === "Register") {
      try {
        let response = await axios.post(
          "http://localhost:3001/register",
          {
            email,
            password,
          },
          {
            withCredentials: true,
            headers: {
              Access: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
              },
            },
          }
        );
        console.log("Register response", response);
        navigate("/login");
      } catch (error) {
        setMsg(error.response.data.msg);
      }
    } else if (id === "Login") {
      try {
        let response = await axios.post(
          "http://localhost:3001/login",
          {
            email,
            password,
          },
          {
            withCredentials: true,
            headers: {
              Access: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
              },
            },
          }
        );
        console.log("Login response", response);
        navigate("/home");
      } catch (error) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <>
      <div>
        <div>
          <h3>{title}</h3>
        </div>
        <Box component="form" sx={{ m: 1 }} noValidate autoComplete="off">
          <TextField
            sx={{ m: 1 }}
            id="email"
            label="Enter email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            sx={{ m: 1 }}
            id="password"
            label="Enter password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Button variant="contained" onClick={() => handleClick(title)}>
          {title}
        </Button>
      </div>
      <div>{msg}</div>
      <div>
        {title === "Register" ? (
          <Link to="/login">Already have an account? Login here</Link>
        ) : (
          <Link to="/register">Don't have an account? Register here</Link>
        )}
      </div>
    </>
  );
};

export default LoginRegisterForm;
