import React, { useState } from "react";
import "./App.css";
import Store from "./Store";
import { Restaurant, Adress, Menu } from "./model/restaurant";
import BestMenu from "./model/BestMenu";

let data: Restaurant = {
  name: "내 식당",
  category: "oriental",
  adress: {
    city: "Seoul",
    detail: "somewhere",
    zipcode: 123123,
  },
  menu: [
    { name: "Kimchi", price: 1000, category: "Sub" },
    { name: "Rice", price: 1000, category: "Main" },
  ],
};
const App: React.FC = () => {
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data);

  const changeAdress = (adress: Adress) => {
    setMyRestaurant({ ...myRestaurant, adress: adress });
  };

  const showBestMenuName = (name: string) => {
    return name;
  };

  return (
    <div className="App">
      <Store info={myRestaurant} chageAdress={changeAdress} />
      <BestMenu
        name="비빔밥"
        category="밥"
        showBestMenuName={showBestMenuName}
      />
    </div>
  );
};

export default App;
