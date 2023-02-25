import express from 'express';
import cors from 'cors';
import db from './config/dbConnect.js';
import routes from './routes/index.js';

db.on('error', console.log.bind(console, 'Connection error'));
db.once('open', () => {
  console.log('Successful bank connection');
});

const app = express();

app.use(express.json());
app.use(cors());

routes(app);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

export default app;
