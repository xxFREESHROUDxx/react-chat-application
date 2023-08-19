const express = require('express');
const cors = require('cors');
const axios = require('axios');
const PORT = 5000;

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post('/authenticate', async (req, res) => {
  const { username } = req.body;
  try {
    const response = await axios.put(
      'https:/api.chatengine.io/users/',
      { username: username, secret: username, first_name: username },
      { Headers: { 'Private-Key': 'f0355949-25b0-49d4-8b41-7d174f2c670c' } }
    );
    return res.status(response.status).json(response.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(PORT, function (err) {
  if (err) console.log('Error in Server setup');
  console.log('Server listening on Port', PORT);
});
