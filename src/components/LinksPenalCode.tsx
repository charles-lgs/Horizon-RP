import React from 'react'
import "../sass/LinksPenalCode.scss"


const image = require('../assets/images/Horizon-penal-code.jpg');

const LinksPenalCode = () => {
    return (
        <section>
            <div className='section__penal--code-contairer'>
                <img className='section__penal--code-contairer-img' src={image} alt="image d'un homme" />
                <ul className='section__penal--code-contairer-links'>
                    <li><a className='link' href='#'>1. Introduction</a></li>
                    <li><a className='link' href='#'>2. Infractions Mineures</a></li>
                    <li><a className='link' href='#'>3. Infractions Graves</a></li>
                    <li><a className='link' href='#'>4. Infractions Criminelles</a></li>
                    <li><a className='link' href='#'>5. Sanctions</a></li>
                    <li><a className='link' href='#'>6. Procédures Judiciaires</a></li>
                    <span className="glow-dot"></span>
                </ul>
            </div>
        </section>
    )
}

export default LinksPenalCode