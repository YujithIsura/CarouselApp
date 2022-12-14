const carousel = require('./dummyData.json');

// Get Carousel List By Slides
const getCarouselListBySlides = async (req, res) => {
  let noOfSlides = req.query.slides;
  const slicedArray = carousel.slides.slice(0, noOfSlides);
  res.status(200).send(slicedArray)
}

module.exports = {
  getCarouselListBySlides
}