const express = require("express");

const app = express();
let port = 8000;

const mongoDB = require('./db');
const cors = require('cors');

app.use(cors());

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "localhost:8000/api/createuser");
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin , X-Requested-Width , Content-Type ,Accept"
//     );
//     next();
// })


mongoDB();
app.get('/', (req, res) => {
    res.send("hello ");
})
app.use(express.json());
app.use('/api', require("./Routes/CreateUser"));
app.use('/api', require("./Routes/DisplayData"));
app.use('/api', require("./Routes/OrderData"));

app.listen(port, () => {
    console.log("server is listing .");
})