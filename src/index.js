const express = require('express');
const app = express();
const morgan = require('morgan');

// setings
app.set('port', process.env.PORT || 3030);
app.set('json spaces', 2);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use('/api/test', require('./routes/index'));
app.use('/api/desserts', require('./routes/desserts'));

// stating server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${3030}`);
});