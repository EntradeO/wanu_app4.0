import React from 'react';
import './App.scss';
import Footer from './components/Footer';
import './scss/main.css';
import { BrowserRouter, Route } from "react-router-dom";
import HomeView from "./pages/Home.js";
import MenuView from "./pages/Menu.js";
import CategoriesView from "./pages/Categories.js";
import NewsView from "./pages/News.js";
import OrdersView from "./pages/Orders.js";

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Footer/>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={HomeView}/>
            <Route exact path="/Menu" component={MenuView}/>
            <Route exact path="/Categories/:id" component={CategoriesView}/>
            <Route exact path="/News" component={NewsView}/>
            <Route exact path="/Orders" component={OrdersView}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
