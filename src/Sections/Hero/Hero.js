import React from 'react'
import "./Hero.css"
import PrimaryButton from '../../components/button/Button'

const Hero = () => {
    return (
        <div className='hero-main'>
            <div className='hero-text'>
                <h6 className='hero-subtitle'>welcom to cyborg</h6>
                <h4 className='hero-titel'><em>Browse</em> Our popular Games Hero</h4>
                <PrimaryButton>Browse Now</PrimaryButton>
            </div>
        </div>
    )
}

export default Hero
