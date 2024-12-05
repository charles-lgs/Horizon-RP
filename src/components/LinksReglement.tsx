import React from 'react'
import "../sass/LinksReglement.scss"

import image from "../assets/images/organa-reglement.webp"

const LinksReglement = () => {
    return (
        <section>
            <div className='section__reglement-contairer'>
                <img className='section__reglement-contairer-img' src={image} alt="un baron, une tueuse, un patron, une motard" />
                <ul className='section__reglement-contairer-links'>
                    <li><a className='link' href='#intro'>1. Introduction</a></li>
                    <li><a className='link' href='#regles'>2. Règles Générales</a></li>
                    <li><a className='link' href='#services'>3. Services Publics</a></li>
                    <li><a className='link' href='#entreprises'>4. Entreprises Privées</a></li>
                    <li><a className='link' href='#illegal'>5. Illégal</a></li>
                    <li><a className='link' href='#safe'>6. Safe Zones</a></li>
                    <li><a className='link' href='#wipe'>7. Wipe / Mort RP</a></li>
                    <span className="glow-dot"></span>
                </ul>
            </div>
        </section>
    )
}

export default LinksReglement