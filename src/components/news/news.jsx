import React from 'react'


export function News() {
    const noticias = [{
        newsTitle: "MIBR Eliminated from the championship",
        newsDescription: "From a 16-15, MIBR gets a bitter lose vs G2 Esports"
    },
    {
        newsTitle: "Cloud 9 Players gets a bonus for their win in the Summer Championship",
        newsDescription: "The players will get $10.000 in this month"
    },
    {
        newsTitle: "VSM is presentated as the new player for MIBR",
        newsDescription: "É uma honra estar aqui, says the new player"
    }
    ]


    return <div>
        {noticias.map((noticia) => (
            <div> <h1>{noticia.newsTitle}</h1>
            <p>{noticia.newsDescription}</p></div>
        ))}
            </div>
}