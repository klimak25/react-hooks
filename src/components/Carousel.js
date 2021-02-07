import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img from  '../img/product-1-lg.png'
import img1 from '../img/product-2.png'
import img2 from '../img/logo.svg'
import classes from '../index.scss'

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div className={classes.carousel} >
                    <img src={img} alt={'kort'}/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img1}  alt={'kort'}/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img2} alt={'kort'}/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
}
export default DemoCarousel
