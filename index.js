const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

const user = {
    user_id: "john_doe_17091999",  // Replace with your full_name_ddmmyyyy
    email: "john@xyz.com",         // Replace with your email
    roll_number: "ABCD123"         // Replace with your roll number
};

// POST Method: /bfhl
app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    const numbers = [];
    const alphabets = [];
    let highestLowercaseAlphabet = "";

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (/[a-zA-Z]/.test(item)) {
            alphabets.push(item);
            if (/[a-z]/.test(item) && item > highestLowercaseAlphabet) {
                highestLowercaseAlphabet = item;
            }
        }
    });

    res.json({
        is_success: true,
        ...user,
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
    });
});

// GET Method: /bfhl
app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
