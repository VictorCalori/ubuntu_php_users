const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'seu_host',
  user: 'phpmyadmin',
  password: 'aluno',
  database: 'mydb'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ' + err.message);
    return;
  }

  // Selecionar e exibir 10 registros da tabela 'customers'
  connection.query('SELECT name, address FROM customers LIMIT 10', (err, rows) => {
    if (err) {
      console.error('Erro ao buscar registros: ' + err.message);
    } else {
      console.log('Registros encontrados:');
      rows.forEach((row) => {
        console.log(`Nome: ${row.name}, Endereço: ${row.address}`);
      });
    }
  });

  connection.end();
});
