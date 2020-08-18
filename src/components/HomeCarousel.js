import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';

export class HomeCarousel extends React.Component {
   render() {
      return (
         <Carousel showArrows={false} showStatus={false} showThumbs={false} infiniteLoop autoPlay  stopOnHover swipeable emulateTouch>
               <div>
                  <img src="https://api.arianedes.com/images/5f2cb02808d88205621076.jpg" alt=""/>
               </div>
               <div>
                  <img src="https://api.arianedes.com/images/5f2cb311d2752491750844.jpg" alt=""/>
               </div>
               <div>
                  <img src="https://api.arianedes.com/images/5f2cb032e1540389127975.jpg" alt=""/>
               </div>
         </Carousel>
      );
   }
}
