/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
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
