/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

let transactions = [
  {
    itemName: "shampoo",
    category: "grocery",
    price: 45.0,
    timestammp: "2023-11-04",
  },
  {
    itemName: "fruits",
    category: "grocery",
    price: 55.0,
    timestammp: "2023-11-07",
  },
  {
    itemName: "Headphones",
    category: "electronics",
    price: 450.0,
    timestammp: "2023-11-09",
  },
  {
    itemName: "Phone",
    category: "electronics",
    price: 4500.0,
    timestammp: "2023-11-08",
  },
  {
    itemName: "tab",
    category: "electronics",
    price: 4200.0,
    timestammp: "2023-11-06",
  }
]


function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  for (const transaction of transactions) {
    const { category, price } = transaction;

    
    if (!categoryTotals.hasOwnProperty(category)) {
      categoryTotals[category] = price;
    } else {
      
      categoryTotals[category] += price;
    }
  }

  
  const finalList = Object.keys(categoryTotals).map((category) => {
    return { category: category, totalSpent: categoryTotals[category] };
  });

  return finalList;
}

let finalList = calculateTotalSpentByCategory(transactions);
console.log(finalList);

module.exports = calculateTotalSpentByCategory;
