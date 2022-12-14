import React, { useState } from 'react';
import "../Carousel.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const CarouselItem = ({ children, Infinite, SlidesCount }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newindex) => {
        if (newindex < 0) {
            newindex = 0;
        } else if (newindex >= React.Children.count(children)) {
            if (children.length == newindex) {
                if (Infinite === true) {
                    newindex = 0;
                } else {
                    newindex = React.Children.count(children) - 1;
                }
            } else {
                newindex = React.Children.count(children) - 1;
            }
        }
        setActiveIndex(newindex);
    }

    return (
        <div className='carousel'>
            <div className='inner' style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>
            {SlidesCount ?
                <div className='indicators'>
                    <span
                        style={{ position: 'absolute', left: 40, top: '48%', color: 'white' }}
                        onClick={() => {
                            updateIndex(activeIndex - 1);
                        }}
                    >
                        <FaAngleLeft />
                    </span>
                    <span
                        style={{ position: 'absolute', right: 40, top: '48%', color: 'white' }}
                        onClick={() => {
                            updateIndex(activeIndex + 1);
                        }}
                    >
                        <FaAngleRight />
                    </span>
                </div> : <></>
            }
        </div>
    );
};

export default CarouselItem