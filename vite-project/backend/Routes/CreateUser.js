const express = require('express');

const router = express.Router();
const user = require('../model/User');


const { body, validationResult } = require('express-validator');
// securing the password

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

const jwtSecret = "qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq";

router.post("/loginuser", [body('email').isEmail(),
body('password').isLength({ min: 5 })
], async (req, res) => {
    let email = req.body.email;
    let userData = await user.findOne({ email});
    
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }
    try {
        if (!userData) {
            return res.status(400).json({ error: "Try  loggin with correct Credintials ." });
        }

        const pwdcompare = await bcrypt.compare(req.body.password, userData.password);
        if (!pwdcompare) {
            return res.status(400).json({ error: "Try loggin dfsd with correct Credintials ." });
        }

        const data = {
            user: {
                id: userData.id,
            }
        }
        const authToken = jwt.sign(data, jwtSecret);
        return res.json({ success: true , authToken:authToken });
    } catch (error) {
        res.json({ success: false });
    }
})

router.post('/createuser', [body('email').isEmail()
    , body('name').isLength({ min: 5 }),
body('password').isLength({ min: 5 })
], async (req, res) => {

    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }

    // password is encrypted.
    const salt = await bcrypt.genSalt(10);
    const secPassword = await bcrypt.hash(req.body.password, salt);

    try {

        console.log(req.body);
        await user.create({
            name: req.body.name,
            email: req.body.email,
            password: secPassword,
            location: req.body.location

            //    "name": "RohitPathade",
            //    "email": "rohitpathade2005@gmail.com",
            //    "password": "23453434",
            //    "location": "Ashta"

        });

        res.json({ success: true })
    } catch (error) {
        res.json({ success: false })

    }

})

module.exports = router;