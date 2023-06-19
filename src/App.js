import { useEffect, useState } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import { Toaster } from "react-hot-toast";
// import { Toaster } from "react-hot-toast";

function App() {
  // const [meal, setMeal] = useState([]);
  // useEffect(() => {
  //   fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMeal(data);
  //       console.log(data);
  //     });
  // }, []);
  return (
    <div>
      <div>
        <RouterProvider router={router}></RouterProvider>
        {/* <Toaster /> */}
        <Toaster></Toaster>
      </div>
    </div>
  );
}

export default App;
