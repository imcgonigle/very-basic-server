const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');

const pages = {
    '/': 'index.html',
    '/about': 'about.html',
    '/hello': 'hello.html'
};

var port = process.argv[2];

http.createServer(function(req, res) {
    function presentPage(page) {
        fs.readFile(page, function(err, data) {
            if (err) {
                return console.error(err);
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        })
    }
    if (pages[req.url] !== undefined) {
        presentPage(pages[req.url]);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('404 - Page not found');
    }
}).listen(port)

console.log('Server started on', port)

// console.log(path.join(os.homedir(), 'Desktop'))

// fs.writeFile(path.join(os.homedir(), 'Desktop', 'happyfile.txt'), 'Hiya there!', function(err) {
//     if (err) {
//         console.log(err)
//     }
// })