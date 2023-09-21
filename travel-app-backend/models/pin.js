const mongoose = require('mongoose')

const PinSchema = new mongoose.Schema(
    { 
    username: {
        type:String, 
        require: true,
    }, 
    title: {
        type:String, 
        require: true,
        min: 3,
    }, 
    description: {
        type:String, 
        require: true,
    }, 
    rating: { 
        type:String,
        require: true, 
        min: 0,
        max: 5,
    }
}, 

{ timestamps: true }

);

module.exports = mongoose.model('Pin', PinSchema)