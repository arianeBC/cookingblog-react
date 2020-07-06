import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';

export class HomeCarousel extends React.Component {
   render() {
      return (
         <Carousel showArrows={false} showStatus={false} showThumbs={false} infiniteLoop autoPlay  stopOnHover swipeable emulateTouch>
               <div>
                  <img src="http://sgcuisine/images/5efb1209dc1c8977280240.png" alt=""/>
               </div>
               <div>
                  <img src="http://sgcuisine/images/5efb1209dc1c8977280240.png" alt=""/>
               </div>
               <div>
                  <img src="http://sgcuisine/images/5efbe9a4a1404818118677.jpg" alt=""/>
               </div>
         </Carousel>
      );
   }
}
