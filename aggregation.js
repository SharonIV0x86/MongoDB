db.collection.aggregate([
    {
      $match: {
        field: { $gte: 5 } // Filtering documents where 'field' is greater than or equal to 5
      }
    },
    {
      $project: {
        newField: "$existingField", // Including or renaming existing field
        multipliedField: { $multiply: ["$numberField", 2] }, // Computing new field
        _id: 0 // Excluding _id field
      }
    },
    {
      $group: {
        _id: "$category",
        totalQuantity: { $sum: "$quantity" }, // Calculating total quantity per category
        avgPrice: { $avg: "$price" } // Calculating average price per category
      }
    },
    {
      $sort: { field: 1 } // Sorting documents by 'field' in ascending order
    },
    {
      $limit: 10 // Limiting to 10 documents
    },
    {
      $skip: 5 // Skipping first 5 documents
    },
    {
      $unwind: "$tags" // Deconstructing the 'tags' array field
    },
    {
      $lookup: {
        from: "inventory",
        localField: "item",
        foreignField: "sku",
        as: "inventory_docs"
      }
    },
    {
      $addFields: {
        newField: { $concat: ["$field1", "$field2"] } // Adding a new concatenated field
      }
    },
    {
      $facet: {
        categoryStats: [
          { $group: { _id: "$category", total: { $sum: 1 } } }
        ],
        priceStats: [
          { $group: { _id: null, avgPrice: { $avg: "$price" } } }
        ]
      }
    }
  ]);
  