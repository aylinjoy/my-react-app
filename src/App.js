import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Design from "./pages/Design";
import Design1 from "./pages/Design1";
import { GiNestedHearts } from 'react-icons/fa';

function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break
    case "/about":
      Component = About
      break
    case "/design":
      Component = Design
      break
    case "/design1":
      Component = Design1
      break
  
    
  }
  return ( 
  
    <div className='page-container'>
      <div className='content-wrap'>
    
     <Nav />
    <Component />
    </div>
    <Footer />
  
  
    </div>
  );
}

export default App;
