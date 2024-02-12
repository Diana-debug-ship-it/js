const http = require('http'); // встроенный модуль http
const server = http.createServer().listen(3000); // создание сервера, порт 3000

server.on('request', (req, res) => {
    if (req.url === '/') {
        return res.end('server is running');
    }
    let fName = req.url.slice(1);
    let url = `https://api.genderize.io?name=${fName}`;
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            return `${data.name} is ${data.gender}`
        })
        .then(str => res.end(str));
});