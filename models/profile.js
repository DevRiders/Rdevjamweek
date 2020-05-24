const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;

class Profile{
    constructor(name,des,lin,exp,ts,hby,lng,frnt,back,dta,mob,ss,smot,tt,tm,comm,perf){
        this.name = name;
        this.des = des;
        this.lin=lin;
        this.exp = exp;
        this.ts = ts;
        this.hby = hby;
        this.lng = lng;
        this.frnt = frnt;
        this.back = back;
        this.dta = dta;
        this.mob = mob;
        this.ss = ss;
        this.smot = smot;
        this.tt = tt;
        this.tm = tm;
        this.comm = comm;
        this.perf = perf;
    }
    save(){
        const db = getDb();
        let dbOp;
        dbOp = db.collection('profile').insertOne(this);
        return dbOp
        .then(result => {
        console.log(result);
        })
        .catch(err => {
        console.log(err);
        });
    }

    fetchAll(){
        const db = getDb();
        return db.collection('profile').find().toArray()
        .then(profiles => {
            console.log(profiles);
        })
        .catch(err => console.log(err));
    }

    findById(profileId){
        const db = getDb();
        return db.collection('profile')
        .find({_id: new mongodb.ObjectId(profileId)})
        .next()
        .then(profile => {
            console.log("found");
            console.log(profile);
        })
        .catch(err => console.log(err));
    }
}