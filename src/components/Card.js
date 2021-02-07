import React from 'react'
import {Link} from 'react-router-dom'
import img from '../img/product-1-lg.png'
export const Card = () => (
    <div className="card">
        <img src={img} alt="cart"/>
       <div className="card-body">
           <h5 className="card-title">React js</h5>
           <Link to={'/profile/'} className="btn btn-primary">Открыть</Link>
       </div>
    </div>
    )
