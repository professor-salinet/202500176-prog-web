import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 80;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('.'));

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});