import express from 'express';
const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);
const handleHome = (req, res) => res.send('Hello World!!');
const handleTest = (req, res) => res.send('Test');

app.get('/', handleHome);
app.get('/profile', handleTest);

app.listen(PORT, handleListening); 