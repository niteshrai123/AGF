const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
console.log("MongoDB URI:", process.env.MONGO_URI);

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb+srv://nr11707516:Sakshi1430%40@agf.ykmai.mongodb.net/realestate?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err.message));


// Property Schema & Model
const PropertySchema = new mongoose.Schema({
    title: String,
    location: String,
    price: Number,
    size: Number,
    amenities: [String],
    image: String,
    contact: String
});
const Property = mongoose.model('Property', PropertySchema);

// Inquiry Schema & Model
const InquirySchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message: String
});
const Inquiry = mongoose.model('Inquiry', InquirySchema);

// User Schema & Model
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});
const User = mongoose.model('User', UserSchema);

// Routes
app.get('/properties', async (req, res) => {
    const properties = await Property.find();
    res.json(properties);
});

app.post('/properties', async (req, res) => {
    const newProperty = new Property(req.body);
    await newProperty.save();
    res.json({ message: 'Property added successfully' });
});

app.post('/inquiries', async (req, res) => {
    const newInquiry = new Inquiry(req.body);
    await newInquiry.save();
    res.json({ message: 'Inquiry submitted successfully' });
});

app.post('/register', async (req, res) => {
    const newUser = new User(req.body);
    await newUser.save();
    res.json({ message: 'User registered successfully' });
});

app.post('/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.email, password: req.body.password });
    if (user) {
        res.json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.get("/", (req, res) => {
    res.send("Backend is running...");
  });
  

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
