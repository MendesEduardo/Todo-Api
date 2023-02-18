import express from 'express';
import cors from 'cors';
import db from './config/dbConnect.js';
import routes from './routes/index.js';

db.on('erro', console.log.bind(console, 'Connection error'));
db.once('open', () => {
  console.log('Successful bank connection');
});

const app = express();

app.use(express.json());
app.use(cors());

routes(app);

export default app;
