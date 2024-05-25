const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/repos', async (req, res) => { //Consumo del endpoint que trae la informacion de los repositorios de github asociados con google
  try {
    const response = await axios.get('https://api.github.com/users/google/repos', {
      params: {
        sort: 'stars', //Valida si tiene estrellas el repositorio
        per_page: 10 // Limita la informacion a los primeros 10
      }
    });
    const repos = response.data.map(repo => ({ //Recorre la informacion que trae la respuesta del consumo del endpoint
      name: repo.name,
      stars: repo.stargazers_count,
      url: repo.html_url
    }));
    res.json(repos); //Devuelve la respuesta en formato JSON
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching data from GitHub');
  }
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
