import React, { useState, useEffect} from "react";
import Carousel from "./components/Carousel";
import './App.css';
import api from "./api/posts";

function App() {
  const [slideData, setSlideData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/api/all-slides`);
        setSlideData(response.data);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      { slideData.map((item) => (
        <Carousel key={item._id} Slides={item.slides} Infinite={item.infinite} />
      ))
      }
    </div>
  );
}

export default App;
