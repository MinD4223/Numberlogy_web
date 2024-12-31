
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
<<<<<<< HEAD
  <BrowserRouter >
=======
  <BrowserRouter basename="/">
>>>>>>> 21348b48895d2466503d4a0818adac0a00e27cba
    <App />
  </BrowserRouter>
);
