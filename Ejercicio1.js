const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/repos', async (req, res) => {
  try {
    const response = await axios.get('https://api.github.com/users/google/repos', {
      params: {
        sort: 'stars',
        per_page: 10
      }
    });
    const repos = response.data.map(repo => ({
      name: repo.name,
      stars: repo.stargazers_count,
      url: repo.html_url
    }));
    res.json(repos);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching data from GitHub');
  }
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
