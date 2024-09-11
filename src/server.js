const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const app = express();
const port = 3000;

const jwt = require("jsonwebtoken");
const JWT_SECRET = "abcdefghijklmnopqrstuvwxyz1234567890aashish";

app.use(cors());
app.use(express.json());
require('dotenv').config();


mongoose.connect('mongodb://localhost:27017/User', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));


const userSchema = new mongoose.Schema({
    name: String,
    number:String,
    email: String,
    password: String,
    // name: { type: String, required: true },
    // number: { type: String, required: true },
    // email: { type: String, required: true },
    // password: { type: String, required: true },
});

const userSchema1 = new mongoose.Schema({
    title: String,
    story:String,
    amount: String,
    image: String,
    option: String,
    location: String,
});

const User = mongoose.model('Signup', userSchema);

const User1 = mongoose.model('CampaignDetails', userSchema1);

//for createcampaign
app.post('/CreateCampaign', async (req, res) => {
    const { title, story, amount, image, option, location } = req.body;
    const newUser = new User1({ title, story, amount, image, option, location });
    try {
        await newUser.save();
        res.status(201).json({ message: 'Campaign Created successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to Create Campaign' });
    }
});

//for getting image
app.get('/get-image', async (req, res) => {
    const { image } = req.query; 
    try {
        const user = await User1.find({ image });
        if (user) {
            res.send({ status: "ok", data: user.image }); 
        } else {
            res.status(404).send({ status: "error", message: "Image not found" });
        }
    } catch (error) {
        res.status(500).send('Error fetching image');
    }
});



//for registration
app.post('/Register', async (req, res) => {
    const { name, number, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, number, email, password: hashedPassword });
    
    try {
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to register user' });
    }
});

//for login
app.post('/Login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ error: "User Not Found" });
            alert("invalid username1");
        }

        // Compare provided password with stored password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
            alert("invalid username2");
            return res.status(200).json({ status: "ok" });
        } else {
            alert("invalid username3");
            return res.json({ status: "error", error: "Invalid Password" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: "error", error: "Internal Server Error" });
    }
});

//for protected mode
app.get('/protected', authenticateToken, (req, res) => {
    res.send({ message: 'Welcome to the protected route!' });
    });

  // Middleware to authenticate JWT token
    function authenticateToken(req, res, next) {
        const token = req.header('x-access-token');
        if (!token) {
            return res.status(401).send({ message: 'No token provided' });
        }
        jwt.verify(token, 'secretkey', (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: 'Invalid token' });
        }
        req.userId = decoded.userId;
        next();
        });
    }

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
