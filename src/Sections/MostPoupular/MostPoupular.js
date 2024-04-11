/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./MostPoupular.css"
import Card from "../../components/Card/Card"
import Deparmint from '../../components/Deparmint/Deparmint'
import SectionWrapper from '../section-wrapper/SectionWrapper'
import MostPoupularItem from '../../Data/MostPopularData'







const MostPoupular = () => {
        const Cardjsx = MostPoupularItem.map((C) => {
            return(
                <Card key={C.id} image={C.image} title={C.title} category={C.category} rate={C.rate} download={C.download} />
            )
        })

    return (
            
                <SectionWrapper>
                    <Deparmint  >MostPoupular<em>right Now</em></Deparmint>
                    <div className='most-poupular-items'>
                        {/* <Card image={popular_01} title="Fortnite" category="Sandbox" rate="3.8" download="2.3M"   />
                        <Card image={popular_02} title="Pubg" category="Staream-x" rate="4.8" download="1.1M" />
                        <Card image={popular_03} title="Dota2" category="Legendary" rate="2.7" download="5.3M" />
                        <Card image={popular_04} title="CS-GO" category="Battle 5" rate="3.9" download="4.3M" />
                        <Card image={popular_05} title="Fortnite" category="Sandbox" rate="3.8" download="2.3M" />
                        <Card image={popular_06} title="Pubg" category="Staream-x" rate="4.8" download="7.7M" />
                        <Card image={popular_07} title="Dota2" category="Legendary" rate="2.7" download="4.4M" />
                        <Card image={popular_08} title="CS-GO" category="Battle 5" rate="3.9" download="2.3M"/> */}
                        {Cardjsx}
                    </div>
                    <button>Discover Populor</button>
                </SectionWrapper>
        
    )
}

export default MostPoupular;
