import React from 'react';
import './Cards.css' 
import dp from './dp.jpg'
import download from './download.jpg'
import df from './df.jpg'
function Cards() {
  return (
    <div className='card-container'>
      <div className="card">
        <img className="card-img-top" src={dp} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">BBQ</h5>
          <p className="card-text">
          
Barbecue, commonly known as BBQ, is a cooking method that involves grilling meat, fish, or vegetables over an open flame or hot coals. This culinary technique has a rich history and cultural significance, 
with various styles and traditions around the world. Here are some interesting facts about BBQ food
          </p>
          <a href="#" className="btn btn-primary">
            BBQ
          </a>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src={download}alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">SEA FOOD</h5>
          <p className="card-text">
          Seafood is a diverse and nutritious category of food that encompasses a wide array of marine life consumed by humans. Rich in essential nutrients, seafood is a valuable source of protein, omega-3 fatty acids, vitamins, and minerals.
          </p>
          <a href="#" className="btn btn-primary">
            Oceanioca
          </a>
        </div>
      </div>
      <div className="card">
        <img className="card-img-top" src={df} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">VEGAN FOOD</h5>
          <p className="card-text">
          
Vegetarian food encompasses a wide range of delicious and nutritious options, reflecting a dietary choice that excludes meat, poultry, fish, and other animal-derived ingredient
          </p>
          <a href="#" className="btn btn-primary">
           VEGIUA
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
