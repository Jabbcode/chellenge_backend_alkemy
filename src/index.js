const express = require('express');
require('dotenv').config();

const app = express();

app.use('/', (req, res) => {
    res.send('Bienvenido al servidor!!!')
});

app.listen(process.env.PORT, () => {
    console.log(`Server on port ${ process.env.PORT }`)
})