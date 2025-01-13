import React from "react";
import { Navbar } from "./components/layaout/navbar/Navbar";
import { Footer } from "./components/layaout/footer/Footer";
import { ItemListContainer } from "./components/layaout/ItemListContainer/ItemListContainer";
//import "./App.css";

const App = () => {
  return (
    <div>
     <Navbar />
     <ItemListContainer />
     <Footer />
  </div>
  );
};

export default App;
