const { response } = require('express');
const express = require('express');
const router = express.Router(); 
const CarouselController = require("../controllers/CarouselController");
const Slide = require('../models/slides');

// get carousel list by slides
router.get("/carousel", CarouselController.getCarouselListBySlides);

// get images 
router.get("/images", express.static('images'));

// save slides information
router.get("/slides", (req, res) => {
    const slide = new Slide({
        slides: 10,
        infinite: false
    });

    slide.save()
        .then((results) => {
            res.send(results)
        }).catch((err) => {
            console.log(err)
        })
});

// get all slides information
router.get("/all-slides", (req, res) => {
    Slide.find()
        .then((result) => {
            res.send(result);
        }).catch((err) => {
            console.log(err);
        })
});

module.exports = router;