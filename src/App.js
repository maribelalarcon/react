import Navbar from './Components/NavBar/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemList/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Cart from './Components/Cart/cart'
import { CartProvider } from './Context/CartContext';

function App() {

  return (
    <CartProvider>

      <div className="App">
        <Router>

          <Navbar/>
          <h1>Ropa Deportiva</h1>

          <Switch>
              <Route exact path="/">
                <ItemListContainer />
              </Route>

              <Route path="/category/:id">
                <ItemListContainer />
              </Route>
              
              <Route path="/item/:id">
                <ItemDetailContainer />
              </Route>

              <Route exact path='/cart'>
                <Cart />
              </Route>
            
          </Switch>
        
        </Router>
      
      </div>
    </CartProvider>
  );
}

export default App;
