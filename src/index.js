import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Appee from "./App";
import store from "./component/Redux/Redux-store";
import { BrowserRouter } from "react-router-dom";
import MyContext from "./component/Redux/Contex";

const cont = document.getElementById("root");
const root = ReactDOM.createRoot(cont);

let renderVse = () => {
  root.render(
    <BrowserRouter>
    <MyContext.Provider value={{store}}>
      <Appee/>
    </MyContext.Provider>
    </BrowserRouter>
  );
}

renderVse()
store.subscribe(() => {renderVse()})

























//Хочеться стать таким же маленьким как крупица пыли. Забиться в какой нбудть угол, и чтобы меня никто не трогал. Я УСТАЛ!
