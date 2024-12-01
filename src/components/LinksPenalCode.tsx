import React from 'react'
import "../sass/LinksPenalCode.scss"

import image from "../assets/images/Horizon-penal-code.jpg";

const LinksPenalCode = () => {
    return (
        <section>
            <div className='section__penal--code-contairer'>
                <img className='section__penal--code-contairer-img' src={image} alt="image d'un homme" />
                <ul className='section__penal--code-contairer-links'>
                    <li><a className='link' href='#'>1. Introduction</a></li>
                    <li><a className='link' href='#'>2. Règles Générales</a></li>
                    <li><a className='link' href='#'>3. Services Publics</a></li>
                    <li><a className='link' href='#'>4. Entreprises Privées</a></li>
                    <li><a className='link' href='#'>5. Illégal</a></li>
                    <li><a className='link' href='#'>6. Safe Zones</a></li>
                    <li><a className='link' href='#'>7. Mort Rp</a></li>
                    <span className="glow-dot"></span>
                </ul>
            </div>
        </section>
    )
}

export default LinksPenalCode