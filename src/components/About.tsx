import { Star } from 'lucide-react';
import "../sass/About.scss"

const About = () => {
    return (
        <section className='about'>
            <div className='about-welcome'>
                <h1>Bienvenue sur <strong>Organa</strong> !</h1>
                <p><Star className='star' /> Organa RP est un serveur en libre accès, nous existons depuis plusieurs années et la version que nous vous proposons aujourd’hui est le résultat d’une multitude d’améliorations pour vous offrir la meilleure expérience de jeu possible.</p>
                <p><Star className='star' /> Notre serveur est basé sur FiveM.</p>
                <p><Star className='star' /> Notre Staffs très actifs porte une attention toute particulière à chaque joueur en vous accompagnant dans les meilleures conditions pour vous aider à accomplir vos projets et surtout à vous épanouir dans notre grande famille.</p>
                <p><Star className='star' /> Pour commencer votre aventure et rejoindre notre grande famille, rendez-vous sur notre Discord : <a href="https://discord.gg/9nKDu7UJug" target="blank">Organa RP</a></p>
            </div>
            <div className='about-why'>
                <h1>Pourquoi nous ?</h1>
                <p><Star className='star' /> Notre serveur est optimisé et sécurisé pour un game play à plus de 100FPS</p>
                <p><Star className='star' /> Notre contenu personalisé & exclusif évolue constamment. Nos développeurs ont la possibilité de créer des scripts de A-Z pour améliorer la qualité du RP. De plus, chaque ajout est optimisé par un développeur spécialisé comme nos +150 tenues moddées, +80 mappings ainsi que l'ensemble de nos scripts.</p>
                <p><Star className='star' /> Notre agence immobilière est capable de créer des propriétés où vous le souhaitez, avec une multitude intérieurs meublés ou non meublés. (Possibilité de décorer comme vous le souhaitez vos appartements, maisons, villas, garages, entrepôts, caravanes, bunkers, Bureaux…)</p>
                <p><Star className='star' /> Nos braquages disponibles: Supérette, Fleeca, Banque, Camion Gruppe6 et plus à venir...</p>
                <p><Star className='star' /> Notre serveur est hébergé sur une machine dédiée puissante, réactive & sécurisée pour garantir la meilleure expérience.</p>
            </div>
            <div className='about-job'>
                <h1>Les métiers sur Organa</h1>
                <p>De nombreuses entreprises sont disponibles en ville, vous pouvez soit en rejoindre une ou créer la votre selon vos désirs.</p>
                <p>L’accès à l’emploi de vos rêves est facilité en postulant depuis votre smartphone !</p>
                <p>Les primos arrivants pourront farmer les différentes ressources disponible partout et les revendre aux entreprises ou au trader.</p>
                <p>Un trader « passif » est présent devant chaque entreprise pour ne pas arrêter l’économie lorsqu’il y a moins de joueurs en jeu et il appartient aux patrons de provisionner les stocks et fixer les prix.</p>
            </div>
            <div className='about-site'>
                <h1>À propos du site</h1>
                <div className='display'>
                    <div className='about-site-card'>
                        <h2>Développeur</h2>
                        <p>CHARLES LANGLOIS</p>
                        <p><a href='mailto: charles.langlois.dev@gmail.com'>Contacter par Mail</a></p>
                        <p><a href='https://vizir-dev.fr/' target='blank'>Vizir-dev.fr</a></p>
                    </div>
                    <div className='about-site-card'>
                        <h2>Hébergeur</h2>
                        <p>HOSTINGER</p>
                        <p>Švitrigailos str. 34, Vilnius 03230 Lithuania</p>
                        <p>+37064503378</p>
                    </div>
                </div>
                <h2>Description du service</h2>
                <p>Ce site est un portail d'information pour le serveur GTA RP, fournissant des détails sur les événements, les règles du serveur, et des actualités pour la communauté de joueurs.</p>
                <h2>Propriété Intellectuelle</h2>
                <p>Tous les contenus présents sur ce site, incluant textes, images, et logos, sont la propriété de Vizir-dev.fr et sont protégés par le droit d'auteur. Toute reproduction sans autorisation est interdite.</p>
                <h2>Collecte d'Informations</h2>
                <p>Les informations personnelles collectées sur ce site sont destinées à Hostinger et ne seront utilisées que pour l'analyse. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données que vous pouvez exercer à tout moment.
                </p>
                <h2>Cookies</h2>
                <p>Ce site utilise des cookies pour améliorer votre expérience utilisateur. Vous pouvez configurer votre navigateur pour refuser les cookies, cependant, cela peut affecter le bon fonctionnement du site.
                </p>
                <h2>Responsabilité</h2>
                <p>Vizir-dev.fr ne peut être tenu responsable des erreurs ou omissions dans les informations diffusées ou des éventuels préjudices, dommage résultant de leur utilisation.
                </p>
                <h2>Liens hypertextes</h2>
                <p>Le site peut contenir des liens vers d'autres sites. Vizir-dev.fr n’exerce aucun contrôle sur le contenu de ces sites et décline toute responsabilité quant à leur contenu.
                </p>
                <h2>Droit applicable et juridiction</h2>
                <p>Les présentes mentions légales sont régies par le droit français. Tout litige relatif à l’utilisation du site sera soumis à la juridiction des tribunaux compétents de Paris.
                </p>
            </div>
        </section>
    )
}

export default About