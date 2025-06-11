const mysql= require("mysql2");
const config= require("../config");
let connection=mysql.createConnection(config.db); // config dosyasının içerisinde bağlantımızı tamamladık ve connection bilgilerini oradan alarak işlemi tamamladık.

connection.connect(function(err){
    if(err){
        console.log(err);
    }
    console.log("MysSql Bağlantısı yapıldı");
});

module.exports = connection.promise();