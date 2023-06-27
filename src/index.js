const express = require ('express');
const app = express();

const morgan = require ('morgan');

//settings
app.set('port', process.env.port || 3000); 

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded ({extended: false}));  //para entender formatos q llegan a traves de input de los formularios
app.use (express.json()); //para poder recibir formato json y entenderlo

//starting server
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')} `)
});
app.set('json spaces', 2);

//routes
app.use( require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));
app.use('/api/users', require('./routes/users'));