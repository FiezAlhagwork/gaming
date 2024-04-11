/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./GamingLibraaryCard.css"
import {SecondaryButton} from '../button/Button'

const GamingLibraaryCard = (props) => {
    return (
        <div className='gaming-library-cards'>
            <ul className=''>
                <li className='img'><img src={props.image}/></li>
                <li><h4>{props.title}</h4><span>{props.category}</span></li>
                <li><h4> Data Added</h4><span>{props.data_added}</span></li>
                <li><h4> Hours played</h4><span>{props.hours_played}</span></li>
                <li><h4> Currently</h4><span>{props.download}</span></li>
                <li className='buttons'><SecondaryButton >{props.download}</SecondaryButton></li>
            </ul>
        </div>
    )
}

export default GamingLibraaryCard
