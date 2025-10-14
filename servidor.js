import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';

const app = express();
const PORT = 80;

var strSql = "";
var pool;

// Aqui estou definindo as variáveis padrão para uso na conexão com o servidor mysql local
var srvHost = '127.0.0.1';
var srvPort = '3306';
var srvUser = 'root';
var srvPassword = 'senac@02';
var srvDatabase = 'senac';

pool = mysql.createPool({
    host: srvHost,
    port: srvPort,
    user: srvUser,
    password: srvPassword,
    database: srvDatabase
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('.'));

app.post('/login', async (req, res) => {

    const { login, senha } = req.body;

    try {
        strSql = "select * from `" + srvDatabase + "`.`tbl_login` where `login` = '" + login + "' and `senha` = md5('" + senha + "');";
        var [rows, fields] = await pool.query(strSql);
        if (rows.length == 1) {
            res.json({ 
                message: 'Usuário logado com sucesso! Redirecionando...',
                id: rows[0].id
            });
        } else {
            throw ("Não foi possível logar o usuário! Cadastro inválido ou duplicado.");
        }
    } catch (err) {
        // console.error(err); // aqui não vai aparecer o erro no console, pois este arquivo não é processado pelo frontend, mas sim pelo backend (node server.js)
        res.status(500).json({ 
            message: `Erro de login: ${err}`,
            error: `Erro de login: ${err}`
        });
    }
});

app.post('/cadastrar', async (req, res) => {

    const { nome, login, senha } = req.body;

    try {
        strSql = "select * from `" + srvDatabase + "`.`tbl_login` where `login` = '" + login + "';";
        var [rows, fields] = await pool.query(strSql);
        if (rows.length == 1) {
            res.json({ 
                message: 'Login já cadastrado!',
                error: 'Favor digitar outro login!'
            });
            // version 1.0.1: correção de bug que permite cadastrar dois usuários com mesmo login
            // depois esta correção se transformará em uma feature (melhoria) que vai ser versionada na próxima versão da feature, ou seja: 
            // version: 1.1.0
        } else {
            var [rows, fields] = await pool.query(
                "insert into `" + srvDatabase + "`.`tbl_login` (`nome`, `login`, `senha`) values ('" + nome + "', '" + login + "', md5('" + senha + "'));"
            );
            if (rows.affectedRows > 0) {
                res.json({ message: 'Usuário cadastrado com sucesso!' });
            } else {
                throw ('Não foi possível cadastrar o usuário!');
            }
        }
    } catch (err) {
        // console.error(err); // aqui não vai aparecer o erro no console, pois este arquivo não é processado pelo frontend, mas sim pelo backend (node server.js)
        res.status(500).json({ 
            message: `Erro de cadastro: ${err} ${domain}`,
            error: `Erro de cadastro: ${err} ${domain}`
        });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});