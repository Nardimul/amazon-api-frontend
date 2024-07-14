import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import {img} from './img/data'
import classes from './carousel.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";

function carouselEffect() {
  return (
    <div>
      <Carousel 
      autoPlay={true}
      infiniteLoop={true}
      showIndicators={true}
      showThumbs={false}
      >
        {
            img.map((imageItemLink)=>{
                return <img src={imageItemLink}/>
            })
        }
      </Carousel>
      <div className={classes.hero_img}>
        <p>hi</p>
      </div>
    </div>
  )
}

export default carouselEffect