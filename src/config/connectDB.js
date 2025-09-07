
const mongoose = require('mongoose');

function configDB() {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log(`connected to MongoDB...`)
        })
        .catch((err) => {
            console.error(err)
            process.exit(1)
        })
}

module.exports = configDB