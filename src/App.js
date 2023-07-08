import React, { useEffect } from 'react'
import { BrowserRouter as Router, } from 'react-router-dom';
import Alert from './components/Alert'
import { useDispatch } from 'react-redux';
import './styles/global.scss';
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "ALERT", payload: {} })
    }, 2000);
  }, [dispatch])

  return (
    <div className="App bg">
      <Router>
        {/* <Alert /> */}

        {/* biz burani checked unchecked olunmasini dropdowndaki dark light mor ile degisirik Hansiki burdaki id="theme" ile ordaki label htmlFor "theme" eynidi Fuckk ! */}
        <div className={`App `}>
          <h1 className="text_white">
            Yakinda Hizmeyinizdeyizdsada
          </h1>

          <Alert />
          {/* <Route exact path="/" component={auth?.token ? Home : Login} /> */}

        </div>
      </Router>
    </div>
  );
}

export default App;
