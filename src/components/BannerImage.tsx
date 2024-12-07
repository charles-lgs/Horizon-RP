import React from 'react'
import Button from "./Button";
import "../sass/BannerImage.scss"

import image from '../assets/images/organa-rp.webp';

const discord = "https://discord.gg/9nKDu7UJug";

const BannerImage = () => {
  const handleClick = () => {
    window.location.href = discord;
  };

    return (
        <section className="container-image">
            <img className="image" src={image} alt="une voiture roulant vers l'horizon"></img>
            <div className="container-button">
              <p className="container-button--txt">
                Tu cherches un endroit où tout est possible ?
              </p>
              <Button className='button' onClick={handleClick}>
                Rejoins Nous !
              </Button>
            </div>
        </section>
    )
}

export default BannerImage