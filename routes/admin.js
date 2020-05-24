const express = require("express");
const router = express.Router();
const getDb = require('../util/database').getDb;
const adminController = require("../controller/adminController");
const validateLoginInput = require("../validation/login");
// router.post("/login",adminController.postLogin);
// router.post("/logout",adminController.postLogout);

router.post("/login",(req, res) => {
    const {errors, isValid} = validateLoginInput(req.body);

    console.log(isValid);
    if(!isValid){
        res.send(errors);
    }

    const username = req.body.userData.username;
    const password = req.body.userData.password;
    console.log(username);
    console.log(password);

    const db = getDb();
    db.collection('admin').findOne({username: username })
    .then(user => {
        // Check if user exists
        if (!user) {
          res.send({
              Status: "Username or password invalid.",
              isLoggedIn: false
            });
        }
    // Check password
        if(user.password === password){
            req.session.isLoggedIn = true;
            req.session.save()
            .then(() => console.log('success'))
            .catch(err => console.log(err));
            res.send({
                Status:"success",
                isLoggedIn:"true"
            });
        } else {
            res.send({
                Status:"Username or password invalid.",
                isLoggedIn: false
            });
        }
    })
    .catch(err => console.log(err));
});

module.exports = router;