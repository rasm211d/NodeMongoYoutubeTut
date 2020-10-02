const express = require('express');
const router = express.Router();


//Login page
router.get('/login', (req, res) => {
    res.render('login');
});

//Register page
router.get('/register', (req, res) => {
    res.render('register');
});

//Register handel
router.post('/register', (req, res) => {
    const {name, email, password, password2} = req.body;
    let errors = [];
    // Check required fields
    if (!name || !email || !password || !password2) {
        errors.push({msg: "Please fill in all fields"});
    }

    // Check if passwords match
    if (password === password2) {
        errors.push({msg: "Passwords do not match"});
    }

    // Chech pass lengths
    if (password.length < 6) {
        errors.push({msg: "Password should be at least 6 characters long"});
    }

    console.log(req.body);
    res.send("hello"); 
})

module.exports = router