const mongoose = require("mongoose")


const PetSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, "Name is required!"],
        minLength: [3, "Name must be at least 3 chars"],
        maxLength: [100000000, "Name can't be that long"]
    },

    type: {
        type: String,
        required:[true, "Type is required!"],
        minLength: [3, "Type must be at least 3 chars"],
        maxLength: [100000000, "Type can't be that long"]
    },

    description: {
        type: String,
        required:[true, "Description is required!"],
        minLength: [3, "Description must be at least 3 chars"],
        maxLength: [100000000, "Description can't be that long"]
    },

    skill1: {
        type: String,
        maxLength: [20, "Skill can't be that long"]
    },

    skill2: {
        type: String,
        maxLength: [20, "Skill can't be that long"]
    },

    skill3: {
        type: String,
        maxLength: [20, "Skill can't be that long"]
        
    },
    likes: {
        type: Number,
        default: 0
    },

}, {timestamps:true})


const Pet = mongoose.model("Pet", PetSchema );

module.exports = Pet;