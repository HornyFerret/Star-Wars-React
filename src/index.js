import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import Charcters from "./Characters/chracters";
import Header from "./Header/header";
import Footer from "./Footer/footer";

const header = () => {

    return (
        <section className = "header">
            <div className = "header_name">Персонажи Star Wars</div>
        </section>
    )
}


const footer = () => {
    return (
        <section className = "footer">
            
        </section>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Header />
    <Charcters />
    <Footer />
  </React.StrictMode>
);

