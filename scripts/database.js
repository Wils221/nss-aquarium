/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            image: "https://i.ytimg.com/vi/UhJteYnoLBI/maxresdefault.jpg" ,
            species: "Pike ",
            size: 1 ,
            name: "Trish ",
            location: "Los Angles" ,
            food: "Kanye",
            
        },
        {
            image: "https://wpclipart.com/dl.php?img=/animals/aquatic/fish/S/snapper/Queen_snapper__Etelis_oculatus.webp" ,
            species: "Australian Queen Snapper",
            size: 3 ,
            name: "Dundee",
            location: "Australia" ,
            food: "Plankton",
            
        },
        {
            image: "https://www.takemefishing.org/tmf/assets/images/fish/pompano-464x170.png" ,
            species: "Pompano",
            size: 2 ,
            name: "Mike",
            location: "Flordia" ,
            food: "Minnows",
            
        },
        {
            image: "http://wiki.fishingplanet.com/images/9/90/Bull_Shark.png " ,
            species: "Bull Shark",
            size: 5 ,
            name: "Bruce",
            location: "Alabama" ,
            food: "Humans",
            
        },
       
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}