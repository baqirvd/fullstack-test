/**
 * Development entry point.
 * Starts an in-memory MongoDB, seeds transactions, then boots the Express server.
 * Run with: npm run dev
 */
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

async function main() {
  const mongod = await MongoMemoryServer.create();
  process.env.MONGO_URI = mongod.getUri();

  await mongoose.connect(process.env.MONGO_URI);
  const Transaction = require('../src/models/Transaction');
  const transactions = require('../data/transactions.json');
  await Transaction.insertMany(transactions);
  await mongoose.disconnect();

  console.log(`Seeded ${transactions.length} transactions`);

  // Hand off to the real server (it will re-connect via connectDB)
  require('../src/server');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
