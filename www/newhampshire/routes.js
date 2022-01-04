const express = require('express');

const router = require('express').Router();
const path = require('path');
const webDataController = require('./controller/webDataController');
const linkDataController = require('./controller/linkDataController');

//mongoose
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_STRING,
    { useNewUrlParser: true,
    useUnifiedTopology: true } )
.then( () => {
    console.log("I'm connected to MongoDB");})
.catch( (err) => {
    console.log("Something went wrong:", err);
});

router.use(express.static(path.join(__dirname, 'public')));


//CRUD

//router.get('/api', (req, res) => {
   // res.send("This is the API under /localhost/newhampshire/api");
//})


router.get('/api/:id', webDataController.findById);
router.get('/api', webDataController.find)
router.post('/api', webDataController.create);
router.delete('/api/:id', webDataController.delete);
router.patch('/api/:id', webDataController.update)

router.get('/link/:id', linkDataController.findByIdL);
router.get('/link', linkDataController.findL)
router.post('/link', linkDataController.createL);
router.delete('/link/:id', linkDataController.deleteL);
router.patch('/link/:id', linkDataController.updateL)



module.exports = router;