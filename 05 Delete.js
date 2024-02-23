db.inventory.deleteMany({}) //will delete all the documents

db.inventory.deleteOne({"size.h": { $lte: 8.5 }})
//only one in which size.h is less than or equal to 8.5 will be deleted




