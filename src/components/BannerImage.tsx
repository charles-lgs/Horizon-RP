import React from 'react'
import Button from "./Button.tsx";
import "../sass/BannerImage.scss"

import img from "../assets/images/Horizon-rp.jpg";

const BannerImage = () => {
    return (
        <section className="container-image">
            <img className="image" src={img} alt="image d'une voiture roulant vers l'horizon"></img>
            <div className="container-button">
              <p className="container-button--txt">
                Tu cherche un endroit où tout est possible ?
              </p>
              <Button onClick={() => console.log("Button clicked!")}>
                Rejoins Nous !
              </Button>
            </div>
        </section>
    )
}

export default BannerImage