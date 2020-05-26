const express = require("express");
const router = express.Router();
const getDb = require('../util/database').getDb;
const validateLoginInput = require("../validation/login");
const validateRegisterInput = require("../validation/register");
const Profile = require("../models/profile");


//when the admin fills the credentials and click login.
router.post("/login",(req, res) => {
    const {errors, isValid} = validateLoginInput(req.body);

    if(!isValid){
        res.send(errors);
    }

    const username = req.body.userData.username;
    const password = req.body.userData.password;
    // console.log(username);
    // console.log(password);

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
            req.session.save();
            
            res.send({
                Status:"success",
                isLoggedIn:true
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



//when the admin click logout
router.post("/logout", (req,res)=> {
    req.session.destroy();
    res.send({
        Status: "Successfully logged out",
        isLoggedIn: false
    });
});




//this route is executed when the admin fills the form and submit to save the profiles.
router.post("/createProfile",(req, res) => {

    const name = req.body.userInfo.name;
    const des = req.body.userInfo.des;
    const lin = req.body.userInfo.lin;
    const exp = req.body.userInfo.exp;
    const ts = req.body.userInfo.ts;
    const hby = req.body.userInfo.hby;
    const lng = req.body.userInfo.lng;
    const frnt = req.body.userInfo.frnt;
    const back = req.body.userInfo.back;
    const dta = req.body.userInfo.dta;
    const mob = req.body.userInfo.mob;
    const ss = req.body.userInfo.ss;
    const smot = req.body.userInfo.smot;
    const tt = req.body.userInfo.tt;
    const tm = req.body.userInfo.tm;
    const comm = req.body.userInfo.comm;
    const perf = req.body.userInfo.perf;
    const conf = req.body.userInfo.conf;

    const profile = new Profile(name,des,lin,exp,
        ts,hby,lng,frnt,back,dta,mob,ss,smot,tt,
        tm,comm,perf,conf);
    
    let tiles; 
        
    profile.save()
    .then(res => {
        console.log("created a profile!!!");
        return Profile.fetchAll()
    })
    .then(profiles => {
        console.log(profiles);
        res.send(profiles);
    })
    .catch(err => {
        console.log(err);
    });
    // Profile.fetchAll()
    //     .then(profiles => {
    //         console.log(profiles);
    //         res.send(profiles);
    //     })
    //     .catch(err => console.log(err));
});



// after login this route is to be visited to view all profiles.
router.get("/profiles",(req,res)=>{
    Profile.fetchAll()
    .then(profiles => {
        console.log("fetched");
        res.send(profiles);
    })
    .catch(err => console.log(err));
});


// this route is to view the individual profile
router.get("/profile/:id",(req,res)=>{
    const profileId = req.params.id;
    Profile.findById(profileId)
    .then(profile => {
        console.log("fetched single profile");
        res.send(profile);
    }).catch(err => console.log(err));
})


//same function as view client can also make a call to the above fucntion 
//by the /profile/:id link for edit button to get the data or below link
//to run edit
//this route is to get information of the profile which is to be edited
router.get("/editProfile/:id",(req,res)=> {
    const profileId = req.params.id;
    Profile.findById(profileId)
    .then(profile => {
        console.log("fetched single profile to edit");
        res.send(profile);
    }).catch(err => console.log(err));
});

router.post("/editProfile/:id",(req,res)=>{
    const profId = req.params.id;
    const name = req.body.userInfo.name;
    const des = req.body.userInfo.des;
    const lin = req.body.userInfo.lin;
    const exp = req.body.userInfo.exp;
    const ts = req.body.userInfo.ts;
    const hby = req.body.userInfo.hby;
    const lng = req.body.userInfo.lng;
    const frnt = req.body.userInfo.frnt;
    const back = req.body.userInfo.back;
    const dta = req.body.userInfo.dta;
    const mob = req.body.userInfo.mob;
    const ss = req.body.userInfo.ss;
    const smot = req.body.userInfo.smot;
    const tt = req.body.userInfo.tt;
    const tm = req.body.userInfo.tm;
    const comm = req.body.userInfo.comm;
    const perf = req.body.userInfo.perf;

    const profile = new Profile(name,des,lin,exp,
        ts,hby,lng,frnt,back,dta,mob,ss,smot,tt,
        tm,comm,perf,profId);

    profile.save()
    .then(res => {
        console.log("updated a profile!!!");
        return Profile.fetchAll()
    })
    .then(profiles => {
        console.log(profiles);
        res.send(profiles);
    })
    .catch(err => {
        console.log(err);
    });
    //after postEdit u redirect the page to profiles .(suggestion)
    //if u want to get the array of all profiles
    // uncomment the below part

    // let profiles;
    // profiles = Profile.fetchAll()
    // .then(res => {
    //     console.log(res);
    //     console.log("fetched");
    //     res.send(profiles);
    // })
    // .catch(err => console.log(err));
})

module.exports = router;