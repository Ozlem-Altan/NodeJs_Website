
const express = require("express");
const router = express.Router();

const db = require("../data/db");


// routes : Detay sayfası hazırlayacağımız zaman kullanacağımız yapı
router.use("/products/:id", async function(req,res){
      try{
        const [product, ] = await  db.execute("select * from tbl_products where ID=?",[req.params.id]);
        res.render("product_detail",{
            product: product[0]
        });
    }
    catch{
        console.log(err)
    }

});

router.use("/products", async function(req,res){
      try{
        const [products, ] = await  db.execute("select * from tbl_products where ISACTIVE=1");
        res.render("products",{
            products: products
        });
    }
    catch{
        console.log(err)
    }
    
});
router.use("/", async function(req,res){

    // async await
    try{
        const [products, ] = await  db.execute("select * from tbl_products where ISHOME=1 AND ISACTIVE=1");
        res.render("index",{
            products: products
        });
    }
    catch{
        console.log(err)
    }
   
});

module.exports=router;