import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRouters } from './routers';
import DefaultLayout from './components/Layouts/DefaultLayout';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          {publicRouters.map((route, index)=> {
            const Layout = route.layout || DefaultLayout
            const Page = route.components;
            return (
              <Route key={index} path={route.path} element={
                <Layout>
                  <Page />
                </Layout>
            }/>
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
