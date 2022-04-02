
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Grandpa from './Compnents/Grandpa/Grandpa';
import Header from './Compnents/Header/Header';
import Home from './Compnents/Home/Home';
import OrderReview from './Compnents/OrderReview/OrderReview';


function App() {
  return (
    <div className="App">
    <Header></Header>
    

    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/grandpa' element={<Grandpa></Grandpa>}></Route>
      <Route path='/orderreview' element={<OrderReview></OrderReview>}></Route>
    </Routes>
    </div>
  );
}

export default App;
