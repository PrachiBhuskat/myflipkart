
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Cart from './components/cart/Cart';
import { TemplateProvider } from './templates/TemplateProvider';
import UserContext from './context/UserContext';



function App() {
  return (
    <TemplateProvider >
      <UserContext>
    <BrowserRouter className="App">
    <Header/>
      <Switch>
        <Route exact path ='/' component={Home}></Route>
        <Route exact path ='/cart' component={Cart}></Route>
      </Switch>
    </BrowserRouter>
    </UserContext>
    </TemplateProvider>
  );
}

export default App;
