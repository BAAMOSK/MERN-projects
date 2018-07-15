const express = require('express');
const fs = require('fs');
const request = require('request');
const cheerio = require('cheerio');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    res.json({name: 'Tee'});
});

app.get('/scrape', (req, res) => {
    let url = "http://www.imdb.com/title/tt1229340/";

    request(url, (error, response, html) => {

        //console.log('HTML => ', html);

        if(!error) {
            let $ = cheerio.load(html);
            let title, release, rating;
            let json = { title: '', release: '', rating: ''};

            //const movieTitle = $.querySelector("property='og:title'");
            const data = $('.header');
            //const parsedData = JSON.stringify(data);

            console.log(data[0].parent.children[0]);

            /*$('.header')
                .filter(() => {
                    let data = $(this);
                    title = data.children().first().text();
                    json.title = title;
                });*/

            /*let data = $(html);

            fs.writeFile('output.json', JSON.stringify(data, null, 4), err => {
                console.log('File written');
            });

            res.send('Check console');*/

        }

    });

});

app.listen(PORT, () => console.log(`SERVER IS RUNNING ON PORT: ${PORT}`));

exports = module.exports = app;
