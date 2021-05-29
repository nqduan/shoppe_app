import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route,useLocation, withRouter } from 'react-router-dom';
import { checkUserSession } from './redux/User/user.actions';

//pages
import Header from './components/Header';
import './defaults.scss';
import Home from './pages/Homepage/Home';
import Signin from './components/Signin';
import Signup from './components/signup';
import CreateProduct from './components/CRUDPRODUCTS/CreateProduct';
import ResetPassword from './components/ResetPassword';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import FetchYourOwnProducts from './components/CRUDPRODUCTS/FetchYourOwnProducts';
import EditYourProduct from './components/CRUDPRODUCTS/EditYourProduct';


function _ScrollToTop(props) {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)


const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [])

  return (
    <Router>
    <ScrollToTop>
      <div className="app">
        <Header />

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/login'
            render={() => <Signin />} />

          <Route path='/registration'
            render={() => <Signup />}>
          </Route>

          <Route path='/products/new'
            render={() => <CreateProduct />} />

          <Route exact path='/products' render={() => <FetchYourOwnProducts />} />

          <Route path='/products/edit/:id' exact component={EditYourProduct} />

          <Route path='/recovery'
            render={() => <ResetPassword />} />

          <Route path='/checkout'
            render={() => <Checkout />} />

        </Switch>
        <Footer />
      </div>
      </ScrollToTop>
    </Router >
  );
}

export default App;