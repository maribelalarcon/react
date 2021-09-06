import Navbar from './Components/NavBar/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/NavBar/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import ItemCount from './Components/ItemCount/ItemCount';

function App() {
  const onAdd =(count)=>{
    console.log(`la cantidad es : ${count}`)
    alert(`la cantidad es : ${count}`)   
  }

  return (
    <div className="App">
      <Navbar/>
      <h1>Ropa Deportiva</h1>
      <ItemListContainer greetings="Para entrenar, tenes que sentirte comoda. Elegi lo mejor" />
      <ItemDetailContainer />
      <br/>
      <ItemCount initial={1} stock={5} onAdd={onAdd} /> 
    </div>
  );
}

export default App;
