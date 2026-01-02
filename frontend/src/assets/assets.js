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
    id: "c1",
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
    id: "c2",
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
    id: "c3",
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
    id: "c4",
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
    id: "c5",
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
    id: "t1",
    type: "tuktuk",
    name: "Bajaj RE",
    price: 150,
    location: "Colombo",
    fuel: "Petrol",
    image: bajajre
  },
  {
    id: "t2",
    type: "tuktuk",
    name: "TVS King",
    price: 180,
    location: "Galle",
    fuel: "Petrol",
    image: tvsking
  },
  {
    id: "t3",
    type: "tuktuk",
    name: "Piaggio Ape",
    price: 160,
    location: "Kandy",
    fuel: "Diesel",
    image: piaggioape
  },
  {
    id: "t4",
    type: "tuktuk",
    name: "Mahindra Alfa",
    price: 170,
    location: "Negombo",
    fuel: "Diesel",
    image: mahindraalfa
  },
  {
    id: "t5",
    type: "tuktuk",
    name: "Atul Auto",
    price: 155,
    location: "Jaffna",
    fuel: "Petrol",
    image: atulauto
  },

  // Bikes
  {
    id: "b1",
    type: "bike",
    name: "Yamaha FZ",
    year: 2020,
    price: 80,
    location: "Colombo",
    image: fz
  },
  {
    id: "b2",
    type: "bike",
    name: "Honda CB500",
    year: 2019,
    price: 90,
    location: "Galle",
    image: hondacb500
  },
  {
    id: "b3",
    type: "bike",
    name: "KTM Duke",
    year: 2021,
    price: 100,
    location: "Kandy",
    image: ktm
  },
  {
    id: "b4",
    type: "bike",
    name: "Suzuki Gixxer",
    year: 2022,
    price: 85,
    location: "Negombo",
    image: gixxer
  },
  {
    id: "b5",
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
