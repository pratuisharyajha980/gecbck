const mongoose = require('mongoose');

mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log('db is connected'))
.catch(err=> console.log("db connection failed:", err.message || err));