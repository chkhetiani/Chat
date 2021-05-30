import express from 'express'
import cors from 'cors'

const messages = [];

const server = express();
server.use(cors());

server.post('/send', (request, response) => {
    console.log('hello');
    return response.send('sent');
});

server.get('/messages', (request, response) => {
    console.log('messages');
    return response.send(messages);
})

server.listen("3000", () => {
    console.log('server started at 3000');
});