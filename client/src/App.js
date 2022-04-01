import './App.css';
import { Route } from 'react-router-dom';
import Inicio from './Components/Inicio';
import Countries from './Components/Countries.jsx';
import Actividad from './Components/Actividad';
function App() {
  return (
    <div className="App">
    <Route exact path='/' component={Inicio}/>
    <Route exact path='/countries' component={Countries}/>
    <Route path={'/countries/actividad'} component={Actividad}/>
    </div>
  );
}

export default App;
