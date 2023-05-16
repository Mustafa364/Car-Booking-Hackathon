import SMNavbar from '../../Component/smNavbar';
import "./App.css";
import CarDetails from './carDetails';
import { Link, useNavigate } from 'react-router-dom/dist';
import { Route } from 'react-router-dom/dist';

export const carsApi = [
  {
  id : 1,
  image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQA_6X70c3td0r7lsQeltd6jdkQN2m3hUBT9Na8Uh31g&usqp=CAU&ec=48665698",
  title : "Mitsubishi",
  car_model : "Montero",
  color: "Yellow",
  car_model_year: 2002,
  car_vin: "SAJWJ0FF3F8321657",
  price: "$2814.46",
  availability: false
  },
  {
  id: 2,
  image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQA_6X70c3td0r7lsQeltd6jdkQN2m3hUBT9Na8Uh31g&usqp=CAU&ec=48665698",
  title: "Volkswagen",
  car_model: "Passat",
  color: "Maroon",
  car_model_year: 2008,
  car_vin: "WBANV9C51AC203320",
  price: "$1731.98",
  availability: false
  },
  {
  id: 3,
  image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQA_6X70c3td0r7lsQeltd6jdkQN2m3hUBT9Na8Uh31g&usqp=CAU&ec=48665698",
  title: "Saturn",
  car_model: "L-Series",
  color: "Red",
  car_model_year: 2003,
  car_vin: "1HGCR6F34EA246317",
  price: "$2238.35",
  availability: true
  },
  {
  id: 4,
  image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQA_6X70c3td0r7lsQeltd6jdkQN2m3hUBT9Na8Uh31g&usqp=CAU&ec=48665698",
  title: "Jeep",
  car_model: "Compass",
  color: "Violet",
  car_model_year: 2012,
  car_vin: "4USBT33454L511606",
  price: "$2732.99",
  availability: false
  },
  {
  id: 5,
  image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQA_6X70c3td0r7lsQeltd6jdkQN2m3hUBT9Na8Uh31g&usqp=CAU&ec=48665698",
  title: "Mitsubishi",
  car_model: "Lancer Evolution",
  color: "Purple",
  car_model_year: 2002,
  car_vin: "WAU2GBFCXDN339713",
  price: "$3849.47",
  availability: false
  },
  {
  id: 6,
  image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQA_6X70c3td0r7lsQeltd6jdkQN2m3hUBT9Na8Uh31g&usqp=CAU&ec=48665698",
  title: "Chevrolet",
  car_model: "Suburban",
  color: "Indigo",
  car_model_year: 2009,
  car_vin: "WAUSH98E96A592763",
  price: "$1252.30",
  availability: false
  },
  {
  id: 7,
  image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQA_6X70c3td0r7lsQeltd6jdkQN2m3hUBT9Na8Uh31g&usqp=CAU&ec=48665698",
  title: "Dodge",
  car_model: "Ram Van B350",
  color: "Yellow",
  car_model_year: 1994,
  car_vin: "KNADH4A37A6919967",
  price: "$1762.42",
  availability: true
  },
  {
  id: 8,
  image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQA_6X70c3td0r7lsQeltd6jdkQN2m3hUBT9Na8Uh31g&usqp=CAU&ec=48665698",
  title: "Isuzu",
  car_model: "Ascender",
  color: "Teal",
  car_model_year: 2004,
  car_vin: "5GTMNGEE8A8713093",
  price: "$1081.40",
  availability: true
  },
  {
  id: 9,
  image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQA_6X70c3td0r7lsQeltd6jdkQN2m3hUBT9Na8Uh31g&usqp=CAU&ec=48665698",
  title: "BMW",
  car_model: "6 Series",
  color: "Purple",
  car_model_year: 2008,
  car_vin: "5TDBY5G16DS675822",
  price: "$1258.99",
  availability: true
  },
  {
  id: 10,
  image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQA_6X70c3td0r7lsQeltd6jdkQN2m3hUBT9Na8Uh31g&usqp=CAU&ec=48665698",
  title: "Mitsubishi",
  car_model: "GTO",
  color: "Purple",
  car_model_year: 1994,
  car_vin: "JM1NC2PFXE0140518",
 price: "$3822.92",
  availability: false
  },
  {
      id: 10,
      image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQA_6X70c3td0r7lsQeltd6jdkQN2m3hUBT9Na8Uh31g&usqp=CAU&ec=48665698",
      title: "Mitsubishi",
      car_model: "GTO",
      color: "Purple",
      car_model_year: 1994,
      car_vin: "JM1NC2PFXE0140518",
     price: "$3822.92",
      availability: false
      },
      {
          id: 10,
          image :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQA_6X70c3td0r7lsQeltd6jdkQN2m3hUBT9Na8Uh31g&usqp=CAU&ec=48665698",
          title: "Mitsubishi",
          car_model: "GTO",
          color: "Purple",
          car_model_year: 1994,
          car_vin: "JM1NC2PFXE0140518",
         price: "$3822.92",
          availability: false
          },
 

]

function Home() {
  let navigation = useNavigate();

  const handleCarDetails = (car) => {
    navigation('/cardetails', { state: car });
  };

  return (
    <>
      <SMNavbar />
      <div className='home_body mx-auto'>
        
        <div className="grid">
          {carsApi.map((car, i) => {
            return (
              <div className="card" key={i}>
                <img src={car.image} className='imgg' />
                <div className='text-center'>
                  <h2 >{car.title}</h2>
                <p><b>Color: </b>{car.color}</p>
                  <p><b>Price: </b>{car.price}</p>
                <p><b>Year of Mfg. : </b>{car.car_model_year}</p>
                </div>
                
                <button className="btn btn-primary" onClick={() => handleCarDetails(car)}>Car Details</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
