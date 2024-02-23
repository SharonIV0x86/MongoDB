db.inventory.insertMany( [
    { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
    { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "P" },
    { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
    { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
    { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" },
 ] );

db.inventory.find().limit(1) //limits the number of documents to putput 1 only
db.inventory.find().skip(n) //will skip first n documents

db.inventory.find().skip(db.inventory.count() - 1).limit(1)
//skips to the last document


db.inventory.find().sort({qty: 1}) //sorting in ascending order of qty
db.inventory.find().sort({qty: -1})//sorting in descending order of qty


