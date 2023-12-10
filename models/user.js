import { Schema, model, models } from "mongoose";

const userSchema = newSchema({
    email:{
        type: String,
        unique:[true, "Email already exists!!"],
        required:[true, "Email is required!!"]
    }
    username: {
        type: String,
        required: [true, "Username is required!!"],
        match: []
    }
})