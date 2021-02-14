import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:4500",
  headers: {
    "Content-type": "application/json"
  }
});

