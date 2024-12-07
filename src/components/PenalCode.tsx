import React from 'react'
import { BookmarkPlus, Gavel } from 'lucide-react';
import '../sass/PenalCode.scss'

const PenalCode = () => {
    return (
        <section className='penal__code'>
            <div className='penal__code--container-title'>
                <h1>Code Pénal</h1>
            </div>

            <div id='intro' className='display start widht'>
                <div className='penal__code--container-intro'>
                    <h2>1. Introduction</h2>
                    <h3>1.1 Objet du Code pénal</h3>
                    <p>Le présent Code Pénal régit les lois en vigueur sur l'État d'Organa. Toute infraction sera passible des sanctions prévues dans ce texte, en respect des procédures judiciaires établies.</p>
                    <h3>1.2 Définition des Infractions</h3>
                    <p>Les infractions sont classées en trois catégories :</p>
                    <p><strong>Mineures : </strong>Troubles à l'ordre public sans conséquences graves.</p>
                    <p><strong>Graves : </strong>Actes nuisant à autrui ou à l'État.</p>
                    <p><strong>Criminelles : </strong>Crimes majeurs mettant en danger des vies humaines.</p>
                    <span className="glow-dot"></span>
                </div>
            </div>

            <div id='mineures' className='display end widht'>
                <div className='penal__code--container-mineures'>
                    <h2>2. Infractions Mineures</h2>
                    <h3>2.1 Tapage nocturne</h3>
                    <p><BookmarkPlus className='icon' /><strong>Définition : </strong>Bruit excessif entre 22h et 6h.</p>
                    <p><Gavel className='icon' /><strong>Sanction : </strong>Amende de 100 $ à 300 $.</p>
                    <h3>2.2 Stationnement interdit</h3>
                    <p><BookmarkPlus className='icon' /><strong>Définition : </strong>Stationner dans une zone interdite ou gênante.</p>
                    <p><Gavel className='icon' /><strong>Sanction : </strong>Amende de 200 $.</p>
                    <h3>2.3 Non-respect des feux de signalisation</h3>
                    <p><BookmarkPlus className='icon' /><strong>Définition : </strong>Passer un feu rouge ou ignorer les panneaux de priorité.</p>
                    <p><Gavel className='icon' /><strong>Sanction : </strong>Amende de 150 $.</p>
                    <span className="glow-dot"></span>
                </div>
            </div>

            <div id='graves' className='display start widht'>
                <div className='penal__code--container-graves'>
                    <h2>3. Infractions Graves</h2>
                    <h3>3.1 Conduite dangereuse</h3>
                    <p><BookmarkPlus className='icon' /><strong>Définition : </strong>Conduire à une vitesse excessive ou de manière imprudente.</p>
                    <p><Gavel className='icon' /><strong>Sanction : </strong>Amende de 500 $ + confiscation du permis pour 7 jours (RP).</p>
                    <h3>3.2 Agression simple</h3>
                    <p><BookmarkPlus className='icon' /><strong>Définition : </strong>Porter atteinte physique à autrui sans arme.</p>
                    <p><Gavel className='icon' /><strong>Sanction : </strong>Prison de 5 à 10 minutes (RP) + amende de 500 $.</p>
                    <h3>3.3 Fuite face aux forces de l'ordre</h3>
                    <p><BookmarkPlus className='icon' /><strong>Définition : </strong>Refuser d'obtempérer lors d'un contrôle.</p>
                    <p><Gavel className='icon' /><strong>Sanction : </strong>Prison de 10 à 15 minutes (RP) + amende de 1000 $.</p>
                    <span className="glow-dot"></span>
                </div>
            </div>

            <div id='crimi' className='display end widht'>
                <div className='penal__code--container-crimi'>
                    <h2>4. Infractions Criminelles</h2>
                    <h3>4.1 Meurtre avec préméditation</h3>
                    <p><BookmarkPlus className='icon' /><strong>Définition : </strong>Assassiner une personne avec intention délibérée.</p>
                    <p><Gavel className='icon' /><strong>Sanction : </strong>Prison de 60 minutes (RP).</p>
                    <h3>4.2 Braquage</h3>
                    <p><BookmarkPlus className='icon' /><strong>Définition : </strong>Vol avec menace ou violence dans un lieu public ou privé.</p>
                    <p><Gavel className='icon' /><strong>Sanction : </strong>Prison de 30 minutes (RP) + confiscation des gains.</p>
                    <h3>4.3 Corruption</h3>
                    <p><BookmarkPlus className='icon' /><strong>Définition : </strong>Tentative d'influencer un fonctionnaire public (RP) par des moyens illégaux.</p>
                    <p><Gavel className='icon' /><strong>Sanction : </strong>Prison de 20 minutes (RP) + amende de 5000 $.</p>
                    <span className="glow-dot"></span>
                </div>
            </div>

            <div id='sanctions' className='display start widht'>
                <div className='penal__code--container-sanctions'>
                    <h2>5. Sanctions</h2>
                    <h3>5.1 Amendements</h3>
                    <p>Les modifications doivent être réglées auprès du tribunal ou directement via les forces de l'ordre (RP).</p>
                    <h3>5.2 Prison</h3>
                    <p>La peine de prison est appliquée en minutes selon la gravité de l'infraction.</p>
                    <h3>5.3 Confiscations</h3>
                    <p>Les biens illégaux ou acquis par des moyens frauduleux seront saisis.</p>
                    <span className="glow-dot"></span>
                </div>
            </div>

            <div id='process' className='display end widht'>
                <div className='penal__code--container-process'>
                    <h2>6. Procédures Judiciaires</h2>
                    <h3>6.1 Arrestation</h3>
                    <p>Tout citoyen accusé d'une infraction sera arrêté dans le respect des droits civiques (RP).</p>
                    <h3>6.2 Droit à un avocat</h3>
                    <p>Les accusés peuvent demander un avocat (joué par un autre joueur ou PNJ).</p>
                    <h3>6.3 Appel</h3>
                    <p>Les décisions judiciaires peuvent être contestées devant une cour supérieure (RP).</p>
                    <span className="glow-dot"></span>
                </div>
            </div>

            <div className='penal__code--container-info'>
                <p><strong>Remarque : </strong>Ce Code Pénal est évolutif et peut être modifié selon les besoins du serveur et des joueurs.</p>
                <p>Si tu veux lire le code pénal en entier clic : <a href='https://docs.google.com/document/d/1mtk2VZ1VWPwYVMSgV5b71vuTAtnD42dHlL0Mx7_oR_Q/edit?tab=t.0#heading=h.dg3xq4m7924l' target='blank'>ICI</a></p>
            </div>
        </section>
    )
}

export default PenalCode