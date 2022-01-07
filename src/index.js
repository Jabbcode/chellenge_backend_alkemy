const express = require('express');
require('dotenv').config();

const app = express();



app.use('/api/characters', require('./routers/characters'));

// app.use('/api/movies');

// app.use('/auth/login');

// app.use('/auth/register');

app.use('/', (req, res) => {
    res.send('Bienvenido al servidor!!!')
});

app.listen(process.env.PORT, () => {
    console.log(`Server on port ${ process.env.PORT }`)
});