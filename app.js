const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {

    if (req.url === '/health') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        return res.end('OK');
    }

    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        return res.end(`Hello from ${os.hostname()}\n`);
    }

    // Handle unknown routes
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not Found');
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
