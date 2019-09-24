import React, {Component} from 'react';
import './App.css';

import Header from './Components/Header';
import ProductsContainer from './containers/ProductsContainer';
import Message from './Components/Message';

import Footer from './Components/Footer';
import CartContainer from './containers/CartContainer';
class App extends Component {
  render(){
  return (
    <div>
        
        <Header></Header>
        <main id="mainContainer">
            <div className="container">
               
                <ProductsContainer></ProductsContainer>
                <Message></Message>
               
                <CartContainer></CartContainer>
            </div>
        </main>
       <Footer></Footer>
        
    </div>
  );
  }
}

export default App;
