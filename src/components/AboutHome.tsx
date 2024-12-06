import Carousel from "./Carousel"
import "../sass/AboutHome.scss"
import {imagesHome} from "../data/imagesHome"

import image from '../assets/images/about-home.webp';

const AboutHome = () => {
    return (
        <section className="about__home">
            <div className="about__home--container-about">
                <div className="about__home--container-about-txt">
                    <p>Venez découvrir Organa RP, où des scripts personnalisés et immersifs vous plongent dans une expérience unique. Rejoignez une communauté dynamique et vivez des aventures palpitantes.</p>
                </div>
            </div>
            <div className="about__home--container-banner">
                <div className="about__home--container-banner-image">
                    <img className="img" src={image} alt="couché de soleil sur une ville et un fleuve" />
                </div>
            </div>
            <p className="title">"De nombreuses sociètés pour satisfaire nos entrepreneurs et une multitude d'activités à faire après le boulot."</p>
            <Carousel items={imagesHome} />
        </section>
    )
}

export default AboutHome