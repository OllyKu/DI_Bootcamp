const express = reqiure ('express')
const dotenv = reqiure ('dotenv')
const cors = reqiure('cors');

dotenv.config();

const app = express();
//set the wiew engine to nodejs

app.set('view engine', 'ejs');

app.use('/', express.static(__dirname+'/public'));

app.listen(process.env.PORT||5000, ()=>{
    console.log(`on port ${process.env.PORT||5000}`)
});

app.get('/home', (req, res)=>{
    res.render('index')
});
app.get('/about', (req, res)=>{
    res.render('about')
});

app.get('/shop', (req, res)=>{
    const products = [
        {id:1,name:'iphone',price:800},
        {id:2,name:'iphone',price:800},
        {id:3,name:'iphone',price:800}
    ]
    res.render('shop',{
        title:'Shop with fun',
        data:products
    })
});
