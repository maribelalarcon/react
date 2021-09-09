import Navbar from './Components/NavBar/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemList/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
// import ItemCount from './Components/ItemCount/ItemCount';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {

  // const onAdd = (count) => {
  //   console.log(`la cantidad es : ${count}`)
  //   alert(`la cantidad es : ${count}`)   
  // }

  return (
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
        </Switch>
      
      </Router>
      {/* <br/>
              <ItemCount initial={1} stock={5} onAdd={onAdd} />  */}
    </div>
  );
}

export default App;
