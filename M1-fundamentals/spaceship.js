

let spaceship = {
    rooms:[
        {
            name:"Living Quarters",
            connections:["Life Support", "Dining Area"]
        },
        {
            name:"Life Support",
            connections:["Living Quarters", "Dining Area"]
        },
        {
            name:"Dining Area",
            connections:["Life Support", "Living Quarters", "Engineering", "Weapons"]
        },
        {
            name:"Weapons",
            connections:["Dining Area", "Bridge"]
        },
        {
            name:"Bridge",
            connections:["Weapons", "Engineering"]
        },
        {
            name:"Engineering",
            connections:["Dining Area", "Bridge"]
        }
    ],
    user:{
        currentLocation:"",
        availableRooms:[]
    }
}
