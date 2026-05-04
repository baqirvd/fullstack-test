const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema(
  {
    accountId: { type: String, required: true, index: true },
    date: { type: Date, required: true, index: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'cleared', 'failed'], required: true, index: true },
    description: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Transaction', transactionSchema);
