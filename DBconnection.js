const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_CONNECTION);