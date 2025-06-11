
const express = require("express");
const app = express();

app.set("view engine","ejs"); // ejs kullandığımız iin ejs olarak tanımladık
app.use(express.static('public'));
app.use(express.static('node_modules'));


const data =[
    {id:1, name:"iphone 13",price:30000, isActive:true, imageUrl:"1.jpg"},
    {id:2, name:"iphone 14",price:40000, isActive:false, imageUrl:"2.jpg"},
    {id:3, name:"iphone 15",price:50000, isActive:true, imageUrl:"3.jpg"},
];

// routes : Detay sayfası hazırlayacağımız zaman kullanacağımız yapı
app.use("/products/:id", function(req,res){
    const choosenproduct = data.find(u => u.id== req.params.id);
    res.render("product_detail",choosenproduct);
});

app.use("/products", function(req,res){
    res.render("products",{
        products: data
    });
});
app.use("/", function(req,res){
     res.render("index");
});

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