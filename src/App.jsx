import { useState } from 'react'
import './App.css'
import RedRanger from './assets/images/Red_Samurai_Ranger_Profile.webp'
import BlueRanger from './assets/images/Blue_Samurai_Ranger_Profile.webp'
import PinkRanger from './assets/images/Pink_Samurai_Ranger_Profile.webp'
import GreenRanger from './assets/images/Green_Samurai_Ranger_Profile.webp'
import YellowRanger from './assets/images/Yellow_Samurai_Ranger_Profile.webp'
import GoldRanger from './assets/images/Gold_Samurai_Ranger_Profile.webp'
import ImageSlider from './components/ImageSlider'

export default function App() {
  const imageSlides = [
    {url:RedRanger, title:'Red Ranger'},
    {url:BlueRanger, title:'Red Ranger'},
    {url:PinkRanger, title:'Red Ranger'},
    {url:GreenRanger, title:'Red Ranger'},
    {url:YellowRanger, title:'Red Ranger'},
    {url:GoldRanger, title:'Red Ranger'},
  ]
  const caroContainer = {
    width: '500px',
    height: '280px',
    margin: '0 Auto'
  }
  return(
    <>
      <h1>Hello Ayodeji</h1>
      <div style={caroContainer}>
        <ImageSlider img={imageSlides} />
      </div>
    </>
  )
}
