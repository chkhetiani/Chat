import express from 'express'
import cors from 'cors'

const messages = [];

const server = express();
server.use(cors());
server.use(express.json());

server.post('/send', (request, response) => {
    messages.push(request.body);
    return response.send('sent');
});

server.get('/messages', (request, response) => {
    return response.send(messages);
})

server.listen("3000", () => {
    console.log('server started at 3000');
});