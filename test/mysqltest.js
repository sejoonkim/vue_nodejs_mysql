const mysql = require('mysql');

const connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: '1234',
    database: 'testdb'
})

connection.connect();

connection.query('select * from User', function (error, results, fields){
    if (error) throw error;
    console.log('The First User is: ', results[0]);
});

connection.query('update User set lastlogin=now() where uid=?', function (error, results, fields){
    if (error) throw error;
    console.log('The First User is: ', results[0]);

    // 콜백 안으로 옮기면, 순서대로 실행된다.
    connection.query('select * from User', function (error, results, fields){
        if (error) throw error;
        console.log('The First User is: ', results[0]);
    });
});



connection.end();