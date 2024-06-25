const mongoose = require('mongoose');

const mongoConnect = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:admin123@cluster0.b7p1wji.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0');
        console.log('Connection success');
      } catch (error) {
        console.log(error);
    }
}

mongoConnect()

module.exports = {
    mongoConnect
}
