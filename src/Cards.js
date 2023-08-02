import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import f1 from './assets/kolkata2.jpg';
import f2 from './assets/sundarban.jpg';
import f3 from './assets/santiniketan2.jpg';
import f4 from './assets/digha.jpg';
import f5 from './assets/darjeeling.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={f1}
              text='Kolkata is the capital and largest city of the Indian state of West Bengal. It is on the eastern bank of the Hooghly River 80 km (50 mi) west of the border with Bangladesh. It is the primary business, commercial, and financial hub of Eastern India and the main port of communication for North-East India.'
              label='KOLKATA'
              path='/services'
            />
            <CardItem
              src={f2}
              text='Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. Sundarban Reserve Forest (SRF) of Bangladesh is the largest mangrove forest in the world.'
              label='SUNDARBAN'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={f3}
              text='Shantiniketan is a neighbourhood of Bolpur town in the Bolpur subdivision of Birbhum district in West Bengal, India, approximately 152 km north of Kolkata. It was established by Maharshi Devendranath Tagore, and later expanded by his son, Rabindranath Tagore whose vision became what is now a university town with the creation of Visva-Bharati.'
              label='SANTINIKETAN'
              path='/services'
            />
            <CardItem
              src={f4}
              text='Digha is a seaside resort town in the state of West Bengal, India. It lies in Purba Medinipur district and at the northern end of the Bay of Bengal. It has a low gradient with a shallow sand beach. It is a popular sea resort in West Bengal.Digha is a seaside resort town in the state of West Bengal, India. It lies in Purba Medinipur district and at the northern end of the Bay of Bengal.'
              label='DIGHA'
              path='/products'
            />
            <CardItem
              src={f5}
              text='Darjeeling is a charming hill station in West Bengal, India, famous for its tea gardens, Himalayan views, and colonial heritage. You can enjoy a scenic ride on the Darjeeling Himalayan Railway, a UNESCO World Heritage Site, or visit the Himalayan Mountaineering Institute, where you can learn about the history and culture of mountaineering.'
              label='DARJEELING'
              path='/signup'
            />
           
          </ul>
          <div class="col-lg-5 m-auto text-center">
          <button class="btn1"> Explore Now </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;