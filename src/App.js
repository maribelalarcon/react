import Navbar from './Components/NavBar/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/NavBar/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>Ropa Deportiva</h1>
      <ItemListContainer greetings="Para entrenar, tenes que sentirte comoda. Elegi lo mejor" />
      
    </div>
  );
}

export default App;
