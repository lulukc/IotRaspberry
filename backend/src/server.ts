import express from 'express';
import router from './router';

const port = 3333;

const app = express();
app.use(router);

app.use(express.json);

app.listen(port, () => {
  console.log(`O servidor esta rodando na porta ${port}`);
});
