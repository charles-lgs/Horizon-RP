import React from 'react'
import "../sass/LinksPenalCode.scss"

import image from "../assets/images/organa-penal-code.webp"

const LinksPenalCode = () => {
    return (
        <section>
            <div className='section__penal--code-contairer'>
                <img className='section__penal--code-contairer-img' src={image} alt="un homme" />
                <ul className='section__penal--code-contairer-links'>
                    <li><a className='link' href='#intro'>1. Introduction</a></li>
                    <li><a className='link' href='#mineures'>2. Infractions Mineures</a></li>
                    <li><a className='link' href='#graves'>3. Infractions Graves</a></li>
                    <li><a className='link' href='#crimi'>4. Infractions Criminelles</a></li>
                    <li><a className='link' href='#sanctions'>5. Sanctions</a></li>
                    <li><a className='link' href='#process'>6. Procédures Judiciaires</a></li>
                    <span className="glow-dot"></span>
                </ul>
            </div>
        </section>
    )
}

export default LinksPenalCode