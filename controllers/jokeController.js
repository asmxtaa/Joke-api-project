const axios = require('axios');

exports.getJoke = async (req, res) => {
    const name = req.body.name;
    try {
        const response = await axios.get('https://v2.jokeapi.dev/joke/Any');
        const joke = response.data.joke || `${response.data.setup} - ${response.data.delivery}`;
        res.render('joke', { name, joke });
    } catch (error) {
        console.error(error);
        res.render('error', { message: 'Could not fetch joke' });
    }
};
