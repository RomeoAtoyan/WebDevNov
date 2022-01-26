import React from 'react';
import house_image from "./house.jpg"
import car_image from "./bmw.jpg"
import hobby_image from "./army.jpg"



function component() {
  return <div id="test">hello world
          <p>This is my house</p>
          <img src={house_image}/>
          <p>This is my car</p>
          <img src={car_image}/>
          <p>This is my hobby</p>
          <img src={hobby_image}/>
         </div>   
    
  
}

export default component;
