import React, { useState, useEffect } from "react";
import CarouselItem from "../components/CarouselItem";
import CarouselContent from "../components/CarouselContent";
import api from '../api/posts';
import '../App.css';

function Carousel(props) {
  const [carouselData, setCarouselData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/api/carousel?slides=${props.Slides}`);
        setCarouselData(response.data)
      } catch (error) {
        console.log("Error: ", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <CarouselItem Infinite={props.Infinite} SlidesCount={props.Slides!==1 ? true : false} >
        {carouselData.map(item => (
          <CarouselContent key={item.subTitle} carouselLength={carouselData.length} image={item.image} title={item.title} subTitle={item.subTitle} />
        ))}
      </CarouselItem >
    </div>
  );
}

export default Carousel;
