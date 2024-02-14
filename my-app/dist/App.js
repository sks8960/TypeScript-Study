import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import "./App.css";
import Store from "./Store";
import BestMenu from "./model/BestMenu";
let data = {
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
const App = () => {
    const [myRestaurant, setMyRestaurant] = useState(data);
    const changeAdress = (adress) => {
        setMyRestaurant({ ...myRestaurant, adress: adress });
    };
    const showBestMenuName = (name) => {
        return name;
    };
    return (_jsxs("div", { className: "App", children: [_jsx(Store, { info: myRestaurant, chageAdress: changeAdress }), _jsx(BestMenu, { name: "\uBE44\uBE54\uBC25", category: "\uBC25", showBestMenuName: showBestMenuName })] }));
};
export default App;
