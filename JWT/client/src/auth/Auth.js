import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";

export const Auth = (props) => {
  const [redirect, setRedirect] = useState(null);
  let navigate = useNavigate();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    try {
      let response = await axios.get("http:/localhost:3001/token", {
        withCredentials: true,
        headers: {
          Access: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        },
      });
      console.log(response);
      setRedirect(1);
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  }, []);

  return redirect ? props.children : null;
};
