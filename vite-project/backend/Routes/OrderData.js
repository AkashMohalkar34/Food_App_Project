const express = require('express');
const router = express.Router();
const Order = require("../model/Orders");

router.post("/orderData", async (req, res) => {
    let data = req.body.order_data;
    await data.splice(0, 0, { Order_date: req.body.order_date });
    console.log("skdjfhskdjfskdjf")

    //if email is not existing in the db then create : else :InsertMany()
    let eId = await Order.findOne({ 'email': req.body.email });
    if (eId == null) {
        try {
           await Order.create({
                email: req.body.email,
                order_data: [data]
            }).then(() => {
                res.json({ success: true })
            })
        } catch (e) {
            console.log(e.message);
            res.send("server error", e.message)
        }

    }

    else {
        try {
           await Order.findOneAndUpdate({
                'email': req.body.email
            }, { $push: { order_data: data } }).then(() => {
                res.json({ success: true })
            })
        } catch (error) {
            console.log(error.message);
            res.send("server error",error.message  )
        }
        
    
}

})

router.post("/myorderData", async (req, res) => {
    try {
        let myData = await Order.findOne({ email: req.body.email });
        res.json({orderData : myData})
    } catch (error) {
        res.send("server erroe",error.message)
    }
})


module.exports = router;