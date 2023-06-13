import React, { useEffect, useState } from "react";

const Home = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        console.log(data);
      });
  }, []);
  return (
    <div>
      <h1>
        {menu.map((item) => (
          <div>{item.category}</div>
        ))}
      </h1>
    </div>
  );
};

export default Home;
