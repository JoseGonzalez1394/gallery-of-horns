import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import './custom.scss';



function App() {
  return (
    <div className="App" >
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
