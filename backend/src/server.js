const app = require('./app');
const connectDB = require('./db');

const PORT = process.env.PORT || 3001;

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error('Failed to connect to DB:', err);
    process.exit(1);
  });
