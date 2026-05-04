const transactions = require('../seed/transactions.json');

console.log(`Store ready: ${transactions.length} transactions loaded`);

module.exports = { transactions };
