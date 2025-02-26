const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())

let cars = [
    { id: 1, carModel: "Toyota AE86", ratings: "4.8", carType: "Hatchback", fuelType: "Gasoline", engineType: "1.6L 4A-GE Inline-4" },
    { id: 2, carModel: "Honda Civic Type R", ratings: "4.9", carType: "Sedan", fuelType: "Gasoline", engineType: "2.0L VTEC Turbo Inline-4" },
    { id: 3, carModel: "Nissan Skyline GT-R", ratings: "4.7", carType: "Coupe", fuelType: "Gasoline", engineType: "2.6L RB26DETT Inline-6" },
    { id: 4, carModel: "Ford Mustang", ratings: "5", carType: "Muscle", fuelType: "Gasoline", engineType: "5.0L Coyote V8" },
    { id: 5, carModel: "Porsche 911", ratings: "4.9", carType: "Sports", fuelType: "Gasoline", engineType: "3.0L Twin-Turbo Flat-6" },
    { id: 6, carModel: "Subaru WRX STI", ratings: "4.8", carType: "Sedan", fuelType: "Gasoline", engineType: "2.5L Turbocharged Boxer-4" }
];

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)

app.get('/Car', (req, res) => {
    res.status(200).send({
        carModel:'Toyota AE86',
        ratings: '4/5',
        carType:'Hatchback',
        fuelType:'Gasoline (Petrol)',
        engineType:'1.6L 4A-GE Inline-4 (DOHC, 16-valve, Naturally Aspirated)',
    })
});

app.post('/Car/:id', (req, res) => {
    const { id } = req.params;
    const { carModel, ratings, carType, fuelType, engineType } = req.body;

    if (carIndex === -1) {
        return res.status(418).send({ message: 'Car not found!' });
    }
    cars[carIndex] = { ...cars[carIndex], ...updatedCar };

    res.send({ message: "Car updated successfully", car: cars[carIndex] });
    
    });
    
    app.put('/Car/:id', (req, res) => { 
        const { id } = req.params; 
        const { carModel, ratings, carType, fuelType, engineType } = req.body; 
    
        let car = cars.find(c => c.id === parseInt(id)); 
    
        if (!car) { 
            return res.status(404).send({ message: 'Car not found!' }); 
        } 
    
        if (carModel) car.carModel = carModel; 
        if (ratings) car.ratings = ratings; 
        if (carType) car.carType = carType; 
        if (fuelType) car.fuelType = fuelType; 
        if (engineType) car.engineType = engineType; 
    
        res.send({ 
            message: 'Car updated successfully!', 
            car: car 
        }); 
    });

    app.delete('/Car/:id', (req, res) => { 
        const { id } = req.params; 
    
        const carIndex = cars.findIndex(c => c.id === parseInt(id)); 
    
        if (carIndex === -1) { 
            return res.status(404).send({ message: 'Car not found!' }); 
        } 
    
        const deletedCar = cars.splice(carIndex, 1); 
    
        res.send({ 
            message: 'Car deleted successfully!', 
            deletedCar: deletedCar[0] 
        }); 
    });
    