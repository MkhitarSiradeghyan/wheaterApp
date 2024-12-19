import React from 'react'
import s from './WheaterCard.module.css'

const WheaterCard = ({wheater}) => {
  return (
    <div className={s.card}>
        <h2>{wheater.name}</h2>
        <img src={`https://openwheatermap.org/img/wn/${wheater.wheater[0].icon}@2x.png`} alt="" />
        <p>{wheater.wheater[0].description}&deg</p>
        <p>{wheater.main.temp}</p>
    </div>
  )
}

export default WheaterCard