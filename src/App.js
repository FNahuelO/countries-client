import { Route } from 'react-router-dom';
import style from './App.module.css';
import About from './Component/About/About';
import Actividad from './Component/ActividadTuristica/Actividad';
import Countrydetail from './Component/CrountryDetail/CountryDetail';
import Home from './Component/Home/Home';
import LadingPage from './Component/LadingPage/LadingPage.jsx';

function App() {
  return (
    <div className={style.App}>
      <Route exact path='/'>
        <LadingPage />
      </Route>
      <Route exact path='/countries'>
        <Home />
      </Route>
      <Route path='/countries/:id' render={({ match }) => <Countrydetail match={match}/>}>
      </Route>
      <Route path='/activity'>
        <Actividad />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
    </div>
  );
}

export default App;
