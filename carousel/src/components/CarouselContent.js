import React from 'react';
import "../Carousel.css";

const CarouselContent = (props) => {
    
    return (
        <div className='carousel-item' style={{ width: '100%'}}>
            <img
                src={props.image}
                alt="My Image"
                style={{width:'100%',height:'800px'}}
            />
            <h1 style={{position: 'absolute',justifyContent:'center',top:'60%'}}>{props.title}</h1>
            <h4 style={{position: 'absolute',justifyContent:'center',top:'70%'}}>{props.subTitle}</h4>
        </div>
    );
};

export default CarouselContent