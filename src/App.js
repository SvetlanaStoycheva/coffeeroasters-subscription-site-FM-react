import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Home from './pages/homePage';
import About from './pages/aboutPage';
import Plan from './pages/planPage';

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Sidebar /> */}
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/plan'>
          <Plan />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
