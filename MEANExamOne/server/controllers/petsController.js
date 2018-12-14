// get the model instance we are using
// getter
const mongoose = require('mongoose');
const Pet = mongoose.model('Pet');

module.exports = {
    index: (req, res)=>{
        Pet.find({}, function(err, pets){
            res.json({pets})
        })
    },
    create: (req, res)=>{
        console.log("Got Data:"+req)
        let task = new Pet({name: req.body["name"], type: req.body["type"], description: req.body["description"], skills: {skill1: req.body["skills"]["skill1"], skill2: req.body["skills"]["skill2"], skill3: req.body["skills"]["skill3"]}})
        task.save()
        .then((success)=>{
            res.json({task})
        })
        .catch((err)=>{
            if(!err["errors"]){
                res.json({UErr:"Name must be unique"})
            }
            else{res.json({err})}
        })
    },
    show: (req, res)=>{
        Pet.findOne({_id:req.params.id}, function(err, pet){
            res.json({pet})
        })
    },
    update: (req, res)=>{
        Pet.findOne({_id:req.params.id}, function(err, pets){
            if(req.body.name){
                pets.name = req.body.name
            }
            if(req.body.description){
                pets.description = req.body.description
            }
            if(req.body.type){
                pets.type = req.body.type
            }
            if(req.body.skills["skill1"]){
                pets.skills["skill1"] = req.body.skills["skill1"]
            }
            if(req.body.skills["skill2"]){
                pets.skills["skill2"] = req.body.skills["skill2"]
            }
            if(req.body.skills["skill3"]){
                pets.skills["skill3"] = req.body.skills["skill3"]
            }
            pets.save()
            .then((success)=>{
                console.log(true)
                res.json({pets})
            })
            .catch((err)=>{
                console.log(false)
                res.json({err})
            })
        })
    },
    upvote: (req, res)=>{
        Pet.findOne({ _id : req.params.id}, function(err, pet){
            pet["likes"]++
            pet.save()
            .then((success)=>{
                console.log(true)
                res.json({pet})
            })
            .catch((err)=>{
                console.log(false)
                res.json({err})
            })
        })
    },
    downvote: (req, res)=>{
        Pet.findOne({ _id : req.params.id}, function(err, pet){
            pet["likes"]--
            pet.save()
            .then((success)=>{
                console.log(true)
                res.json({pet})
            })
            .catch((err)=>{
                console.log(false)
                res.json({err})
            })
        })
    },
    delete: (req, res)=>{
        Pet.remove({ _id : req.params.id}, function(err, tasks){
            console.log(true)
            if(!err){
            res.json({"completed":true})
            }
            else{
                res.json({"error":err})
            }
        })
    }
}