db.inventory.find() //query to fetch all documents.
db.inventory.find({qty:90}); //select data with quantity 90 


db.inventory.find({tags: {$in: ["cotton", "aluminium"]}}) //document with tags such as cotton and aluminium will be pulled

 
db.inventory.insertMany([
    { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
    { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
    { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
    { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
    { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
 ]);

// FIND ONE
db.inventory.findOne( {status: {$in: ["A", "D"]}})
// This will return only one

// AND
db.inventory.find( { status: "A", qty: { $lt: 30 } } )
//where $lt = less than 30 --> where qty is less than 30
db.inventory.find( { status: "A", qty: { $lt: 30 } } )
//here it is less than equal to 30

// either arrays or lists will be pulled.

// OR
db.inventory.find( { $or: [ { status: "A" }, { qty: { $lt: 30 } } ] } )
// either status A or qty less than or equal to 30 will be pulled


