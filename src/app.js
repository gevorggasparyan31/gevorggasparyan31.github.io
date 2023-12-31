const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use('/books', require('./routes/bookRoutes'));
app.use('/users', require('./routes/userRoutes'));
require('./config/db');

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});