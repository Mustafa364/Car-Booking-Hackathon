import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../Component/LoginSignup/Login'
import Signup from '../Component/LoginSignup/signup';
import ErrorMEssage from '../Component/ErrorMessage';
import Dashboard from '../CompoNeNTS/dashBoard';
import ProtectedRoute from './firebase/ProtectedRoutes';
import Home from '../Screens/CarSite/Home';
import CarDetails from '../Screens/CarSite/carDetails';
import Cart from '../Screens/CarSite/cart';

function Approuter() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>         
           
          {/* <Route path='login' element={<Login />}></Route> */}
          <Route path='/' element={<Login />}></Route>
          <Route path='signup' element={<Signup />}></Route>
          {/* <Route path='dashboard/*' element={<ProtectedRoute Component={Dashboard}/>}></Route> */}
          <Route path='dashboard/*' element={<Dashboard/>}></Route>
          <Route path='*' element={<ErrorMEssage />}></Route>
          
          <Route path='/home' element={<Home/>}></Route>
          <Route path='cardetails/*' element={<CarDetails/>}></Route>
          <Route path='/cart/*' element={<Cart/>}></Route>

         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Approuter;
 