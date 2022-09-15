const mongoose = require('mongoose');

const mongoConnect = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:admin123@cluster0.0i51ttw.mongodb.net/users?retryWrites=true');
        console.log('Connection success');
      } catch (error) {
        console.log(error);
    }
}

mongoConnect()

module.exports = {
    mongoConnect
}
