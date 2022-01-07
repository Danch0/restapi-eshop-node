const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

// setings
app.set('port', process.env.PORT || 3030);
app.set('json spaces', 2);

// middlewar
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

// routes
app.use('/api/test', require('./routes/index'));
app.use('/api/desserts', require('./routes/desserts'));

// stating server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});