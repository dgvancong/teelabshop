import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRouters } from './routers';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          {publicRouters.map((route, index)=> {
            const Page = route.components;
            return (
              <Route key={index} path={route.path} element={<Page />}/>
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
