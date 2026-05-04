import React from 'react';
import { Container, Typography, Box } from '@mui/material';

// TODO: implement these components
// import FilterForm from './components/FilterForm';
// import TransactionsTable from './components/TransactionsTable';

export default function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Transaction Search
        </Typography>

        {/* TODO: render <FilterForm /> here */}

        {/* TODO: render <TransactionsTable /> here — handle loading / empty / error states */}
      </Box>
    </Container>
  );
}
