import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({

    name : {
        type : String,
        required : [true, "Username is required"],
        trim : true,
        minlength : 4,
        maxlength : 30
    },

    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true,
        lowercase:true,
        trim:true,
        match:[
            /^\S+@\S+\.\S+$/,
            "Please enter a valid email"
        ]
    },

    password : {
        type : String,
        required : true,
        minlength : 8
    },

    role : {
        type : String,
        enum : ["user", "admin"],
        default : "user"
    },

    avatar : {
        type : String,
        default : ""
    },

    refreshToken : {
        type : String,
        default : ""
    },

}, {timestamps : true});

// password hashing
userSchema.pre("save", async function () {

    if (!this.isModified("password")) {
        return;
    }

    const salt = await bcrypt.genSalt(10);

    this.password = await bcrypt.hash(this.password, salt);

});

// compare password
userSchema.methods.comparePassword = async function (enteredPassword) {

    return await bcrypt.compare(
        enteredPassword,
        this.password
    );

};

// userSchema.index({ email:1 });

export const User = mongoose.model("User", userSchema);