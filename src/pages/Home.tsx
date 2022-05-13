import React, { useEffect, useState } from "react";
import axiosInstance from "../apis/axios";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosInstance.get("/v1/users").then(({ data }) => {
      setUsers(data);
      console.log(data);
    });
  }, []);

  return (
    <>
      
    </>
  );
};

export { Home };
