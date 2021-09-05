const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    username: {
        type: 'string',
        required: true
    },
    password : {
        type: 'string',
        required: true
    },
});

const Admin = mongoose.model('admin', adminSchema);

module.exports = Admin;