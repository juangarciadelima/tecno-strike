import React from 'react'
import { Carousel } from 'react-responsive-carousel'


export function News() {
    const noticias = [{
        newsTitle: "MIBR Eliminated from the championship",
        newsDescription: "Bitter Lose, says VSM",
        
    },
    {
        newsTitle: "Cloud 9 Players gets a bonus for their win in the Summer Championship",
        newsDescription: "The players will get $10.000 in this month",
        
    },
    {
        newsTitle: "VSM is presentated as the new player for MIBR",
        newsDescription: "É uma honra estar aqui, says the new player",
        
    }, {
        newsTitle: "Valve announces new loot box for the game",
        newsDescription: "It will be the best, says the creator",
        
    }, {
        newsTitle: "Valorant VS CS, the fight for the best online fps game",
        newsDescription: "The games are too powerful in the esports scenario today",
        
    }
    ]


    return <div>
        {noticias.map((noticia) => (
                <div>
                    <img src={noticia.newsPhoto} alt="News Avatar" />
                    <p>{noticia.newsTitle}</p>
                    <span>{noticia.newsDescription}</span>
                </div>
        ))}
    </div>
}