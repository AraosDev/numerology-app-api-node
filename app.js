const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.use('/calculator', require('./routes'));
app.listen(PORT);
