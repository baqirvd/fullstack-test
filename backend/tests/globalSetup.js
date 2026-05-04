const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const path = require('path');

module.exports = async () => {
  const mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();

  // Expose to test workers (they inherit env from this process)
  process.env.MONGO_URI = uri;

  // Keep reference for globalTeardown (same process)
  global.__MONGOD__ = mongod;

  // Seed the transactions collection
  await mongoose.connect(uri);
  const Transaction = require('../src/models/Transaction');
  const transactions = require('../data/transactions.json');
  await Transaction.insertMany(transactions);
  await mongoose.disconnect();
};
