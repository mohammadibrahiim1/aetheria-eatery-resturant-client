import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [meal, setMeal] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => {
        setMeal(data);
        console.log(data);
      });
  }, []);
  return (
    <div className="App">
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <h1>{meal.categories.length}</h1>
      </div>
    </div>
  );
}

export default App;
