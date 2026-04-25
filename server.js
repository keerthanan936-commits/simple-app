const express = require('express');
const cors = require('cors');

const app = express();   // ✅ THIS LINE IS MISSING IN YOUR CODE

app.use(express.json());
app.use(cors());

// test route
app.get('/', (req, res) => {
    res.send("Server working!");
});

// booking route
app.post('/book', (req, res) => {
    const { pickup, drop } = req.body;

    const drivers = ["Ravi", "Kiran", "Arjun", "Suresh"];
    const cars = ["Swift", "Innova", "Auto", "Bike"];

    const driver = drivers[Math.floor(Math.random() * drivers.length)];
    const car = cars[Math.floor(Math.random() * cars.length)];
    const fare = Math.floor(Math.random() * 200) + 50;
    const time = Math.floor(Math.random() * 10) + 1;

    res.json({
        pickup,
        drop,
        driver,
        car,
        fare,
        time
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});