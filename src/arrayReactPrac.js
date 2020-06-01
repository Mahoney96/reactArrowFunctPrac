import React from 'react';



const items = [
    { name: 'Bike',     price: 100 },
    { name: 'Tv',       price: 200 },
    { name: 'Album',    price: 10 },
    { name: 'Book',     price: 5 },
    { name: 'Phone',     price: 500 },
    { name: 'Computer',     price: 1000 },
    { name: 'Keyboard',     price: 25 },
    { name: 'Airpods',     price: 250 }
]

// const itemsFiltered = items.filter((item) =>{
//     return item.price <= 100
// })

// console.log(itemsFiltered)

const itemsNames = items.map((title, rp)=> {
    return title.name rp.price
})

console.log(itemsNames)




