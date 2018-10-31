let mongoose = require('./connections')
let team = require('../models/Team')
let Hawks = require('../models/Hawks')


let logo = [

    {

        name: 'Los Angeles Lakers',
        best: 'Lebron James',
        rings: 17,
        img: 'https://i.ebayimg.com/images/g/ylAAAOxyyF5RP7b9/s-l300.jpg',
        coach: 'Luke Walton',
        url: 'https://www.nba.com/lakers/',

    },

    {

        name: 'Atlanta Hawks',
        best: 'Trae Young',
        rings: 1,
        img: 'https://s3.amazonaws.com/s3.wzgcfm.radio.com/altanta_hawks.png',
        coach: 'Lloyd Pierce',
        url: 'https://www.nba.com/hawks/',
    },

    {

        name: 'San Antonio Spurs',
        best: 'Demar Derozan',
        rings: 5,
        img: 'https://pbs.twimg.com/profile_images/991108132876124160/AvXftxBU_400x400.jpg',
        coach: 'Greg Poppivich',
        url: 'https://www.nba.com/spurs/',
    },

    {

        name: 'New York Knicks',
        best: 'Kristaps Porzingis',
        rings: 2,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtoTDfrFjLvcD1Y_AEirnfUa3XxgZT8JPdE6U9NQCPtVywNjRi',
        coach: 'David Fizdale',
        url: 'https://www.nba.com/knicks/',
    },

]

team.create(logo)
    .then(logo => {

        console.log('Team', logo)
    })

    ///////

    //////Hawks model seeds

    let HawksPlayers = [

        {
            name: "Trae Young",
            number: 11,
            team: "Atlanta Hawks",
            img: "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254"
        },

        {
            name: "Taurean Prince",
            number: 12,
            team: "Atlanta Hawks",
            img: "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254"  
        },

        {
            name: "Vince Carter",
            number: 15,
            team: "Atlanta Hawks",
            img: "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254"  
        },
    ]