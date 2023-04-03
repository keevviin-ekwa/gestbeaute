import React from 'react'
import '../components/style.component.css'
import image from '../images/pedicure.jpg'

export default function Soin() {
  return (
    <div >
        <div className="card soin">
        <div className='detail'>Voir</div>
        <img src={image} class="card-img-top" alt="..."/>
        <div class="card-body">
            <p class="card-text">Pédicure</p>
        </div>
        </div>
    </div>
  )
}
