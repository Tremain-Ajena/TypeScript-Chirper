import * as express from 'express';
import * as path from 'path';
import apiRouter from './routes';

const app = express();

app.use(express.static('public'));
app.use(express.json());
// "app.use(express.json())" is the middleware we had to add in order to use the "request.body" line of code in the POST section
app.use('/api', apiRouter);
app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../public/index.html'));
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
