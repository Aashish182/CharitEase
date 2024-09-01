// const express = require("express")
// const mongoose = require("mongoose")
// const cors = require("cors")
// const UserModel = require("./models/User")

// const app = express()
// app.use(express.json())
// app.use(cors())

// mongoose.connect("mongodb://127.0.0.1:27017/user");

// app.post('/Register', (req, res) => {
//     UserModel.create(req.body)
//     .then(users => res.json(users))
//     .catch(err => res.json(err))
// })

// app.listen(3000, () => {
//     console.log("Server is running")
// })



//???


// server.js

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const { Register } = require('./Register');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// User Schema
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    number: { type: String, required: true },
    gmail: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = mongoose.model('Register', UserSchema);

// Signup Route
app.post('/Register', async (req, res) => {
    const { name, number, gmail, password } = req.body;

    try {
        let user = await Register.findOne({ gmail });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = new Register({
            name,
            password: hashedPassword,
            gmail,
            number
        });

        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Login Route
app.post('/Login', async (req, res) => {
    const { name, password } = req.body;

    try {
        let user = await Register.findOne({ gmail });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, Register.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user._id }, 'secretkey', { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Protected Route Example
app.get('/App', authenticateToken, (req, res) => {
    res.send('Welcome to your dashboard!');
});

// Middleware for Token Verification
function authenticateToken(req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

    try {
        const decoded = jwt.verify(token, 'secretkey');
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Token is not valid' });
    }
}

// Start the Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

