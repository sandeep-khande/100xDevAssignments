const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://sandeepkhande:<password>@itachi.pzcvxbq.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema(
    {
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    }
    }
);

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        }
    }
);

const CourseSchema = new mongoose.Schema(
    {
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        require: true
    },
    coverImage: {
        type: String
    }
    }
);

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}