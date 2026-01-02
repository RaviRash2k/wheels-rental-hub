// car images
import toyotacorolla from './toyotacorolla.jpg'
import hondacivic from './hondacivic.jpg'
import fordmustang from './fordmustang.jpg'
import chevroletspark from './chevroletspark.jpg'
import nissanaltima from './nissanaltima.jpg'

// tuktuk images
import bajajre from './Bajajre.jpg'
import tvsking from './tvsking.jpg'
import piaggioape from './piaggioape.jpg'
import atulauto from './atulauto.jpg'
import mahindraalfa from './mahindraalfa.jpg'

// bike images
import fz from './fz.jpg'
import hondacb500 from './hondacb500.jpg'
import ktm from './ktm.jpg'
import gixxer from './gixxer.jpg'
import pulzer from './pulzer.jpg'

export const vehicles = [
  // Cars
  {
    type: "car",
    name: "Toyota Corolla",
    vehicleType: "Sedan",
    year: 2021,
    price: 300,
    location: "Galle",
    seats: 4,
    fuel: "Diesel",
    image: toyotacorolla
  },
  {
    type: "car",
    name: "Honda Civic",
    vehicleType: "Sedan",
    year: 2020,
    price: 350,
    location: "Colombo",
    seats: 4,
    fuel: "Petrol",
    image: hondacivic
  },
  {
    type: "car",
    name: "Ford Mustang",
    vehicleType: "Coupe",
    year: 2019,
    price: 500,
    location: "Kandy",
    seats: 4,
    fuel: "Petrol",
    image: fordmustang
  },
  {
    type: "car",
    name: "Chevrolet Spark",
    vehicleType: "Hatchback",
    year: 2022,
    price: 250,
    location: "Negombo",
    seats: 4,
    fuel: "Diesel",
    image: chevroletspark
  },
  {
    type: "car",
    name: "Nissan Altima",
    vehicleType: "Sedan",
    year: 2021,
    price: 320,
    location: "Jaffna",
    seats: 4,
    fuel: "Petrol",
    image: nissanaltima
  },

  // Tuk Tuks
  {
    type: "tuktuk",
    name: "Bajaj RE",
    price: 150,
    location: "Colombo",
    fuel: "Petrol",
    image: bajajre
  },
  {
    type: "tuktuk",
    name: "TVS King",
    price: 180,
    location: "Galle",
    fuel: "Petrol",
    image: tvsking
  },
  {
    type: "tuktuk",
    name: "Piaggio Ape",
    price: 160,
    location: "Kandy",
    fuel: "Diesel",
    image: piaggioape
  },
  {
    type: "tuktuk",
    name: "Mahindra Alfa",
    price: 170,
    location: "Negombo",
    fuel: "Diesel",
    image: mahindraalfa
  },
  {
    type: "tuktuk",
    name: "Atul Auto",
    price: 155,
    location: "Jaffna",
    fuel: "Petrol",
    image: atulauto
  },

  // Bikes
  {
    type: "bike",
    name: "Yamaha FZ",
    year: 2020,
    price: 80,
    location: "Colombo",
    image: fz
  },
  {
    type: "bike",
    name: "Honda CB500",
    year: 2019,
    price: 90,
    location: "Galle",
    image: hondacb500
  },
  {
    type: "bike",
    name: "KTM Duke",
    year: 2021,
    price: 100,
    location: "Kandy",
    image: ktm
  },
  {
    type: "bike",
    name: "Suzuki Gixxer",
    year: 2022,
    price: 85,
    location: "Negombo",
    image: gixxer
  },
  {
    type: "bike",
    name: "Bajaj Pulsar",
    year: 2018,
    price: 75,
    location: "Jaffna",
    image: pulzer
  }
]

export const options = [
    "Cars", "Bikes", "Tuktuks"
]

export const fuels = [
    "Fuel", "Petrol", "Diesel"
]

export const locations = [
    "Location", "loc 1", "loc 2", "Galle"
]
