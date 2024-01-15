import React from "react";
import Carousel, { CarouselItem } from "./Carousel";
import img1 from './assets/1.png'
import img2 from './assets/2.png'
import img3 from './assets/3.png'
import './Landing.css'

const img= [img1, img2, img3]

const Slide = ({ number }) => (
  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', margin:'auto'}}>
    <img className="imgC" src={img[number-1]} />
  </div>
);

export default function Landing() {
    const gotowa = () => {
        window.location.href = 'https://wa.me/918851852716'
    }
  return (
  <>  <Carousel >
      <CarouselItem>
        <Slide number={1} />
      </CarouselItem>
      <CarouselItem>
        <Slide number={2} />
      </CarouselItem>
      <CarouselItem>
        <Slide number={3} />
      </CarouselItem>
     
    </Carousel>
    <button style={{position: 'fixed', right: '10px', bottom: '20px', color: 'white'}} onClick={gotowa}>
        Book now
    </button>
    </>
  );
}
