const express = require('express');
const app = express();
const sequelize = require('./database/db');

// Setting
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/post', require('./routes/post.routes'));


app.listen(PORT, function () {
    console.log(`Run on http://localhost:${PORT}`);

    sequelize.sync({ force: false }).then(() => {
        console.log("DB connected");
    }).catch(error => {
        console.log('ERROR\n', error);
    })

});