import React, { useEffect } from 'react'
import { BrowserRouter as Router, } from 'react-router-dom';
import Alert from './components/Alert'
import { useDispatch } from 'react-redux';
import './styles/global.scss';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "ALERT", payload: {} })
    }, 2000);
  }, [dispatch])

  return (
    <div className="App ">
      <Router>
        <Alert />
        <Header />
        <Slider />

        <div className={"d"} style={{ height: "500px", background: "black", width: "100%", color: 'white', textTransform: 'capitalize', display: 'flex', alignItems: "center", justifyContent: 'center' }}>

          <h1 style={{ color: 'white' }}>yakinda hizmetinizdeyiz</h1>
        </div>
        {/* biz burani checked unchecked olunmasini dropdowndaki dark light mor ile degisirik Hansiki burdaki id="theme" ile ordaki label htmlFor "theme" eynidi Fuckk ! */}
        <div className={`App `}>
          <h1 className="text_white">
            Yakinda Hizmeyinizdeyizdsada
          </h1>

          {/* <Route exact path="/" component={auth?.token ? Home : Login} /> */}
          {/* <PrivateRouter exact path="/:page/:id" component={PageRender} /> */}
          {/*
          <Route exact path="/register" component={Register} />

*/}
        </div>
      </Router>
    </div>
  );
}

export default App;
