var dbconfig = {
    development: {
        //connectionLimit : 10,
        host: 'localhost',
        port: '3306',
        user: 'user',
        password: '@user12345678',
        database: 'term_project_db'
    },
    production: {
        //connectionLimit : 10,
        host: 'localhost',
        port: '3306',
        user: 'dbuser',
        password: 'P@ssw0rd@2023',
        database: 'moviedb'
    }
};
module.exports = dbconfig;