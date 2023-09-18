import React, { useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom';
import Alert from './components/Alert'
import { useDispatch } from 'react-redux';
import './styles/global.scss';
import Header from './components/Header/Header';
import PageRender from './customRouter/PageRender'
import Home from './pages/home';
import Footer from './components/Footer';
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "ALERT", payload: {} })
    }, 1100);
  }, [dispatch])

  return (
    <div className="App ">
      <Router>
        <Alert />
        <Header />
        <div className={`App `}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:page" element={<PageRender />} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
