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

function calculateTotalSpentByCategory(transactions) {
  let expenditure = transactions.reduce((acc, transaction) => {
    if (!acc.hasOwnProperty(transaction.category)) {
      acc[transaction.category] = { category: transaction.category, totalSpent: transaction.price };
    } else {
      acc[transaction.category] = { ...acc[transaction.category], totalSpent: acc[transaction.category]['totalSpent'] + transaction.price };
    }
    return acc;
  }, {});
  return Object.values(expenditure);
}

module.exports = calculateTotalSpentByCategory;
