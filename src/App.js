import './App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Checkout } from './components/Checkout';
import { Login } from './components/Login';
import { auth, Auth } from './firebase';
import { useStateValue } from './components/stateProvider';
import { Checkoutproducts } from './components/CheckoutProducts';
import { Paymentpage } from './components/paymentPage';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { Orders } from './components/Orders';

function App() {
  const promise = loadStripe('pk_test_51IJJrPJH18aSWiQwtPVXqSZGWsJucwUxUi4uWCQhlWYIPgRo8iAn0ivNcbzJALaYWiNXmutndfirmuf5luxh1yku00P7p1dLhC');


  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('the user is', authUser);
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/' exact>

            
            <Header />
            <Home />
          </Route>
          <Route exact path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route exact path='/orders'>
            <Header />
           <Orders/>
          </Route>
          
          <Route exact path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Paymentpage />
            </Elements>
           
          </Route>
        </Switch>

      </div>
    </Router>

  );
}

export default App;
