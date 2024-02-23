db.inventory.insertOne(
    { item: "canvas", qty: 100, tags: ["cotton"], size: { h: 28, w: 35.5, uom: "cm" } }
)

// db.inventory.insertMany(

//     { item: "canvas1", qty: 10, tags: ["cotton"], size: { h: 28, w: 32, uom: "cm" } },
    
//         { item: "canvas2", qty: 20, tags: ["gold"], size: { h: 28, w: 12, uom: "cm" } },
    
//         { item: "canvas3", qty: 30, tags: ["zinc"], size: { h: 28, w: 30, uom: "cm" } },
    
//         { item: "canva4", qty: 40, tags: ["aluminium"], size: { h: 28, w: 3.5, uom: "cm" } },
    
//         { item: "canvas5", qty: 50, tags: ["lead"], size: { h: 28, w: 35, uom: "cm" } }
// )

db.inventory.insertMany([
    {
        item: "canvas1",
        qty: 10,
        tags: ["cotton"],
        size: { h: 28, w: 32, uom: "cm" }
    },
    {
        item: "canvas2",
        qty: 20,
        tags: ["gold"],
        size: { h: 28, w: 12, uom: "cm" }
    },
    {
        item: "canvas3",
        qty: 30,
        tags: ["zinc"],
        size: { h: 28, w: 30, uom: "cm" }
    },
    {
        item: "canvas4",
        qty: 40,
        tags: ["aluminium"],
        size: { h: 28, w: 3.5, uom: "cm" }
    },
    {
        item: "canvas5",
        qty: 50,
        tags: ["lead"],
        size: { h: 28, w: 35, uom: "cm" }
    }
])