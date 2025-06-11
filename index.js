
const express = require("express");
const app = express();
const useRoutes = require("./routes/users");

app.set("view engine","ejs"); // ejs kullandığımız iin ejs olarak tanımladık
app.use(express.static('public'));
app.use(express.static('node_modules'));

app.use(useRoutes); // kullandığımız routes sayflaama işlemlerini başka bir yerde tanımlayarak sonra projeye export edebiliriz

app.listen(3000, () =>{
    console.log("listening on port 3000");
});






// var http = require("http"); 
// var fs = require("fs"); // dosya ile işlem yapıldığında okuma - silme - işlem yapma bu modülü kullanıyoruz

// var server = http.createServer((req,res) =>{ // dışarıdan request ve response değerleri alır
// //    console.log(req.url); // requestin herhangi bir parametresini döndürmek gerekir

//     if(req.url == "/")
//     {
//         fs.readFile("index.html",(err,html)=>{
//             res.write(html);
//             res.end(); // mutlaka bir response döndürmek gerekir.
//         });
//     } 
//     else if (req.url == "/producs") 
//     {
//         fs.readFile("urunler.html",(err,html)=>{
//             res.write(html);
//             res.end(); // mutlaka bir response döndürmek gerekir.
//         });
//     }
//     else
//     {    
//         fs.readFile("404.html",(err,html)=>{
//             res.write(html);
//             res.end(); // mutlaka bir response döndürmek gerekir.
//         });        
//     }   

// });

// server.listen(3000,()=>{ // serverı 3000 portu altında açılmasını sağlıyoruz ve bir mesaj dönüyoruz
//     console.log("node.js server at port 3000")
// });