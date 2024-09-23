const express = require('express');
const router = express.Router();
const db = require('./db');

router.post('/mensagens', (req, res) => {
    const { nome, email, conteudo } = req.body;

    const queryUsuario = 'INSERT INTO usuarios (nome, email) VALUES (?, ?) ON DUPLICATE KEY UPDATE id=LAST_INSERT_ID(id)';
    db.query(queryUsuario, [nome, email], (err, result) => {
        if (err) throw err;

        const id_usuario = result.insertId;
        const queryMensagem = 'INSERT INTO mensagenss (conteudo, data_envio, id_usuario) VALUES (?, NOW(), ?)';
        db.query(queryMensagem, [conteudo, id_usuario], (err, result) => {
            if (err) throw err;
            res.send('Mensagem enviada com sucesso!');
        });
    });
});

module.exports = router;
