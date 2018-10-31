let mongoose = require('./connections')
let team = require('../models/Team')
let Hawks = require('../models/Hawks')
let Lakers = require('../models/Lakers')
let Spurs = require('../models/Spurs')
let Knicks = require('../models/Knicks')


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
            img: "https://bloximages.chicago2.vip.townnews.com/normantranscript.com/content/tncms/assets/v3/editorial/5/39/5393cc28-ccd9-58d7-bcc2-a34ed7aaff11/5aa1f3a359a6c.image.jpg?resize=400%2C283"
        },

        {
            name: "Taurean Prince",
            number: 12,
            team: "Atlanta Hawks",
            img: "https://ballershoesdb.com/wp-content/uploads/2017/01/taurean-Cropped-500x667.jpg"  
        },

        {
            name: "Vince Carter",
            number: 15,
            team: "Atlanta Hawks",
            img: "https://www.sportstalkatl.com/wp-content/uploads/2018/07/2350540187_30db0efe08.jpg"  
        },
    ]

    Hawks.create(HawksPlayers)
    .then(hawks => {

        console.log('New Player', hawks)
    })

    ///////

    ///////lakers seeds
    let LakersPlayers = [

        {
            name: "Lebron James",
            number: 23,
            team: "Los Angeles Lakers",
            img: "http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png&w=350&h=254"
        },
    
        {
            name: "Rajon Rondo",
            number: 9,
            team: "Los Angeles Lakers",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFcHyr7GLsvdvBBgpAGjiH3IIlFZgRr37aoXU07gbncocj3d4w",
        },
    
        {
            name: "Kyle Kuzma",
            number: 10,
            team: "Los Angeles Lakers",
            img: "https://pbs.twimg.com/profile_images/976113578666323968/ZNm7T-pI_400x400.jpg"
        }
    ]
    
    Lakers.create(LakersPlayers)
        .then(lakers => {
    
            console.log('New Player', lakers)
        })


    /////Seeds for Spurs model
    let SpursPlayers = [

        {
            name: "Demar Derozan",
            number: 10,
            team: "San Antonio Spurs",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/DeMar_DeRozan_Nov_2016_cropped.jpg/220px-DeMar_DeRozan_Nov_2016_cropped.jpg"
        },


        {
            name: "Pau Gasol",
            number: 16,
            team: "San Antonio Spurs",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Lakers_vs_Nuggets_2013-01-06_%2822%29.JPG/220px-Lakers_vs_Nuggets_2013-01-06_%2822%29.JPG"
        },


        {
            name: "Lamarcus Aldridge",
            number: 12,
            team: "San Antonio Spurs",
            img: "https://s.hdnux.com/photos/37/47/52/8288941/7/920x920.jpg"
        },
    ]

    Spurs.create(SpursPlayers)
    .then(spurs => {

        console.log('New Player', spurs)
    })

    ////Seeds for the Knicks model
    let KnicksPlayers = [

        {
            name: "Kristaps Porzingis",
            number: 6,
            team: "New York Knicks",
            img: "https://nbcprobasketballtalk.files.wordpress.com/2018/01/896860592-e1515183111260.jpg?w=610&h=343&crop=1"
        },


        {
            name: "Kevin Knox",
            number: 20,
            team: "New York Knicks",
            img: "https://thenypost.files.wordpress.com/2018/10/kevin-knox1.jpg?quality=90&strip=all&w=618&h=410&crop=1"
        },


        {
            name: "Enes Kanter",
            number: 23,
            team: "New York Knicks",
            img: "https://pbs.twimg.com/profile_images/1032552460630536192/A8eN3SGh_400x400.jpg"
        },
    ]

    Knicks.create(KnicksPlayers)
    .then(knicks => {

        console.log('New Player', knicks)
    })