const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Replace with your own API key and endpoint
const API_KEY = 'AIzaSyBDpRF35sTlIPWJGUZ1Zm2LeyjWNDaStD4';
const SEARCH_ENGINE_ID = 'amiable-nova-433715-v3';

app.use(express.static('public'));

app.get('/search', async (req, res) => {
    const query = req.query.q;
    try {
        const response = await axios.get(`https://www.googleapis.com/customsearch/v1`, {
            params: {
                key: API_KEY,
                cx: SEARCH_ENGINE_ID,
                q: query
            }
        });

        const results = response.data.items.map(item => ({
            title: item.title,
            url: item.link
        }));

        res.json({ results });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while searching.');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
