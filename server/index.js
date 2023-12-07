const express = require("express");
const https = require('https');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.get("/api/shots", (req, res) => {
    var accessToken = process.env.DRIBBBLE_KEY;
    var url = "https://api.dribbble.com/v2/user/shots"

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Authorization', 'Bearer ' + accessToken);
    https.get(url, (r) => {
        console.log('statusCode:', r.statusCode);

        r.on('data', (d) => {
            process.stdout.write(d);
            res.send(d);
        });

    }).on('error', (e) => {
        console.error(e);
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});