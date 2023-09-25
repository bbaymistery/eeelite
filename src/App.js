import React, { useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom';
import Alert from './components/Alert'
import { useDispatch } from 'react-redux';
import './styles/global.scss';
import Header from './components/Header/Header';
import PageRender from './customRouter/PageRender'
import Home from './pages/home';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTop/ScrollToTop';
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "ALERT", payload: {} })
      if (!localStorage?.getItem("languageKey")) {
        localStorage?.setItem("languageKey", "en");
        localStorage?.setItem("languageIndex", 0);
      }
    }, 250);
  }, [dispatch])
  //if user close browser initialize localstorage


  return (
    <div className="App ">
      <Router>
        <Alert />
        <Header />
        <ScrollToTopButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:page" element={<PageRender />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
