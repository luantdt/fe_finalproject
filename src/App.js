import './App.css';
import TrangChu from './pages/TrangChu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Switch>

          <Route path='/'>
            <TrangChu />
          </Route>

        </Switch>
      </Router>
    
    </>
  );
}

export default App;
