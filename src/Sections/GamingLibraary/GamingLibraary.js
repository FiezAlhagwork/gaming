/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import SectionWrapper from '../section-wrapper/SectionWrapper'
import Deparmint from '../../components/Deparmint/Deparmint'
import GamingLibraaryData from "../../Data/GamingLibraary"
import GamingLibraaryCard from '../../components/GamingLibraaryCard/GamingLibraaryCard'
import "./GamingLibraary.css"

const GamingLibraary = () => {
    const GamingLibraaryCardS  = GamingLibraaryData.map((g) => {
        return(
            <GamingLibraaryCard key={g.id} image={g.image} title={g.title} category={g.category} data_added={g.data_added} hours_played={g.hours_played} download={g.download} />
        )
    })
    return (
        <SectionWrapper>
            <Deparmint>
                Your Gaming <em> Library</em>
            </Deparmint>
            <div className='gaming-library-cardss'>
                {GamingLibraaryCardS}
            </div>
        </SectionWrapper>
)
}

export default GamingLibraary
