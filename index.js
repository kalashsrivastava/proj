const express = require('express');
const cors = require('cors');

const port = process.env.port || 3001;
const app = express();
app.use(cors());
app.use(express.json());

app.post('/bfhl', (req, res) => {
  const { data } = req.body;

  if (!data || !Array.isArray(data)) {
    return res.status(400).json({
      is_success: false,
      user_id: "Sagar", 
      email: "sagariscool002@gmail.com", 
      roll_number: "21BCI0065", 
      message: "Invalid data format",
    });
  }

  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => isNaN(item));
  const highest_lowercase_alphabet = alphabets
    .filter(item => /^[a-z]$/.test(item))
    .sort()
    .slice(-1);

  res.json({
    is_success: true,
    user_id: "Sagar", 
    email: "sagariscool002@gmail.com", 
    roll_number: "21BCI0065", 
    numbers,
    alphabets,
    highest_lowercase_alphabet,
  });
});

app.get('/bfhl', (req, res) => {
  res.status(200).json({ operation_code: 1 });
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
