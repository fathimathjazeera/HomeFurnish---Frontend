import { Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth.jsx';
import Home from './pages/Home.jsx';
import Details from './pages/Details.jsx';
import Cart from './pages/Cart.jsx';
import Address from './pages/Address.jsx';
import Payment from './pages/Payment.jsx';
import MyAccount from './pages/MyAccount.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth" Component={Auth} />
        <Route path="/" Component={Home} />
        <Route path="/detail" Component={Details} />
        <Route path="/cart" Component={Cart} />
        <Route path="/address" Component={Address} />
        <Route path="/payment" Component={Payment} />
        <Route path="/account" Component={MyAccount} />
      </Routes>
    </>
  );
}




export default App;