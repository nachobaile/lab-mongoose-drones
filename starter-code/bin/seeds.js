// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone');
mongoose.connect('mongodb://localhost/drones-dev');


const drones =[
 {
     name:"drone1",
     propellers:6,
     maxSpeed:25,
 },
 {
    name:"drone2",
    propellers:4,
    maxSpeed:20,
},
{
    name:"drone3",
    propellers:10,
    maxSpeed:50,
}
]
Drone.collection.drop();

drones.forEach( p => {
    let pr = new Drone(p);
    pr.save((err, prod) =>{
        if(err) {
            throw err;
        }
        console.log(`Producto guardado ${prod.name}`);
    })
 });
//  mongoose.disconnect();