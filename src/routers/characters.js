const Router = require('express');
const router = Router();

const charasters = [
    {
        imagen: 'https://static.wikia.nocookie.net/disney/images/8/82/PeterPan.png/revision/latest?cb=20121006101543&path-prefix=es',
        nombre: 'Peter Pan',
        edad: '13',
        peso: '65 kg',
        historia: 'Peter Pan es un personaje ficticio creado por el escritor escocés James Matthew Barrie para una obra de teatro estrenada en Londres el 27 de diciembre de 1904 llamada Peter Pan y Wendy. Peter Pan es un niño que nunca crece, tiene diez años y odia el mundo de los adultos. Siempre va acompañado de su hada, Campanilla',
        peliculas_series: [
            'Peter Pan (Clyde Geronimi, Hamilton Luske, Wilfred Jackson, Jack Kinney, 1953)',
            'Hook (El Capitán Garfio) (Steven Spielberg, 1991)',
            'Peter Pan en Regreso al País de Nunca Jamás (Robin Budd, Donovan Cook, 2002)',
            'Peter Pan, la gran aventura (P.J. Hogan, 2003)',
            'Descubriendo Nunca Jamás (Marc Forster, 2004)',
            'Pan (Viaje a Nunca Jamás) (Joe Wright, 2015)',
            'Peter Pan: The Quest for the Never Book (Chandrasekaran, 2018)',
            'Érase una vez… (Brenda Chapman, 2020)'
        ]

    },
    {
        imagen: 'https://static.wikia.nocookie.net/videojuego/images/0/0a/Ariel.png/revision/latest?cb=20190630200503',
        nombre: 'Ariel',
        edad: '16',
        peso: '58 kg',
        historia: 'La sirena Ariel está fascinada por el mundo de los humanos, pero su padre le prohíbe relacionarse con ellos. En un viaje secreto, se enamora de un humano y recurre a una perversa hechicera para que, mediante un conjuro, su amor triunfe.',
        peliculas_series: [
            'La sirenita 1989',
            'La sirenita 2: Regreso al mar 2000',
            'La sirenita: Los comienzos de Ariel 2008'
        ]

    },

]


router.get('/', (req, res) => {

    const c = charasters.map( charaster => {
        return { 
            imagen: charaster.imagen, 
            nombre:charaster.nombre 
        }
    })

    return res.json({
        data: c
    })
})





module.exports = router;