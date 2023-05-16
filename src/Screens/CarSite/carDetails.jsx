import React from 'react';
import './App.css'
import SMNavbar from '../../Component/smNavbar';
 import Cart from './cart';

import { useLocation, useNavigate } from 'react-router-dom';

function CarDetails() {
  const location = useLocation();
  const car = location.state;
  const navigate = useNavigate();

  const handleBookNow = () => {
    // Cart mein car ko store karein
    // ...
    
    // Cart route par redirect karein
    navigate.push('/cart');
  };
  
  return (
    <div>
      <SMNavbar/>
      <div className='home_body mx-auto'>
      <div className="grid1">
      <h1 className='ttt  '>Car Details</h1>
      <div className="card">
      <img className="imgg" src={car.image} alt={car.title} />
      <div className="card-details">
      <h2 >{car.title}</h2>
                <p><b>Color: </b>{car.color}</p>
                  <p><b>Price: </b>{car.price}</p>
                <p><b>Year of Mfg. : </b>{car.car_model_year}</p>
                <p><b>Model:</b>{car.car_model}</p>
                <p><b>Chasis No: </b>{car.car_vin}</p>
                <p>{car.availability}</p>
                </div>
                <button className="btn btn-primary" onClick={handleBookNow}>
  Book Now
</button>

    </div>
    </div></div></div>
  );
}

export default CarDetails;
