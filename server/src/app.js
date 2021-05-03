const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
// const {sequelize} = require('./models')
const app = express();
// const config = require('./config/config');
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/status', (req, res) => {
    res.send({
        message: 'Hello worlds!'
    })
})

app.listen(8081)
