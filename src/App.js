import React, {Component} from 'react';
import './App.css';

import Header from './Components/Header';
import ProductsContainer from './containers/ProductsContainer';

import Footer from './Components/Footer';
import CartContainer from './containers/CartContainer';
import MessageContainer from './containers/MessageContainer';
class App extends Component {
  render(){
  return (
    <div>
        
        <Header></Header>
        <main id="mainContainer">
            <div className="container">
               
                <ProductsContainer></ProductsContainer>
                <MessageContainer></MessageContainer>
               
                <CartContainer></CartContainer>
            </div>
        </main>
       <Footer></Footer>
        
    </div>
  );
  }
}

export default App;
