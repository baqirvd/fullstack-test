const { transactions } = require('../src/store');

describe('seed data', () => {
  it('loads 50 transactions', () => {
    expect(transactions).toHaveLength(50);
  });

  it('each transaction has the expected shape', () => {
    transactions.forEach((tx) => {
      expect(tx.accountId).toBeTruthy();
      expect(typeof tx.amount).toBe('number');
      expect(['pending', 'cleared', 'failed']).toContain(tx.status);
      expect(tx.currency).toBeTruthy();
      expect(tx.date).toBeTruthy();
      expect(tx.createdAt).toBeTruthy();
    });
  });
});
