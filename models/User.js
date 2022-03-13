const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true
        }
        
    }
)

// Object DataType. 
const myObject = {
    key01: "value01",
    key02: "value02"
}

const userInfo = {
    "firstName": "John",
    "lastName": "Johnson"
}

const userInfo02 = {
    "name": {
        "firsName": "John",
        "lastName": "Johnson"
    },
    "skillSet": ["js", "html", "mongoDB", "express"]
}