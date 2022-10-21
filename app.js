if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}
const express = require('express');
const app = express();
const ejsMate = require('ejs-mate');
const path = require('path')
const axios = require('axios');
const news2 = process.env.NEWS_API
const news = process.env.NEWS_API2
const AppError = require('./AppError');

// Setting up EJS
app.engine('ejs', ejsMate);
app.set('views',path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
// app.use(express.static(__dirname + '/public'));
app.use('/public/', express.static('./public'));

// Go to home page
app.use(express.urlencoded({extended: true}))


//App Routes
app.get('/', async (req,res,next)=>{
    try{
        const url = 'https://newsapi.org/v2/everything?q=Everything&apiKey='+news2;
        const url2 = 'https://newsapi.org/v2/everything?q=Featured&apiKey='+news2;
        const response = await axios.get(url);
        const response2 = await axios.get(url2);
        var numPost = 10;
        var value = false;
        res.render('home',{response,response2,numPost,value})
    } catch(error){
        next(error)   
    }
    
})

app.post('/search', async (req,res,next)=>{
    try{
        const url = 'https://newsapi.org/v2/everything?q='+req.body.title+'&apiKey='+news2;
        const url2 = 'https://newsapi.org/v2/everything?q=Featured&apiKey='+news2;
        const response = await axios.get(url);
        const response2 = await axios.get(url2);
        var numPost = 10;
        var value = false;
        res.render('search',{response,response2,numPost,value})
    } catch(error){
        next(error)
    }
})

app.get('/technology', async (req,res,next)=>{
    try{
        const url = 'https://newsapi.org/v2/everything?q=technology&apiKey='+news2;
        const url2 = 'https://newsapi.org/v2/everything?q=Featured&apiKey='+news2;
        const response = await axios.get(url);
        const response2 = await axios.get(url2);
        var numPost = 10;
        var value = false;
        res.render('home',{response,response2,numPost,value})
    } catch(error){
        next(error)
    }

})

app.get('/politics', async (req,res,next)=>{
    try{
        const url = 'https://newsapi.org/v2/everything?q=politics&apiKey='+news2;
        const url2 = 'https://newsapi.org/v2/everything?q=Featured&apiKey='+news2;
        const response = await axios.get(url);
        const response2 = await axios.get(url2);
        var numPost = 10;
        var value = false;
        res.render('home',{response,response2,numPost,value})
    }catch(error){
        next(error)
    }
})

app.get('/Education', async (req,res,next)=>{
    try{
        const url = 'https://newsapi.org/v2/everything?q=education&apiKey='+news2;
        const url2 = 'https://newsapi.org/v2/everything?q=Featured&apiKey='+news2;
        const response = await axios.get(url);
        const response2 = await axios.get(url2);
        var numPost = 10;
        var value = false;
        res.render('home',{response,response2,numPost,value})
    }catch(error){
        next(error)
    }
})

app.get('/engineering', async (req,res,next)=>{
    try{
        const url = 'https://newsapi.org/v2/everything?q=engineering&apiKey='+news2;
        const url2 = 'https://newsapi.org/v2/everything?q=Featured&apiKey='+news2;
        const response = await axios.get(url);
        const response2 = await axios.get(url2);
        var numPost = 10;
        var value = false;
        res.render('home',{response,response2,numPost,value})
    }catch(error){
        next(error)
    }
})

app.get('/humanities', async (req,res,next)=>{
    try{
        const url = 'https://newsapi.org/v2/everything?q=humanities&apiKey='+news2;
        const url2 = 'https://newsapi.org/v2/everything?q=Featured&apiKey='+news2;
        const response = await axios.get(url);
        const response2 = await axios.get(url2);
        var numPost = 10;
        var value = false;
        res.render('home',{response,response2,numPost,value})
    } catch(error){
        next(error)
    }
})

app.get('/environment', async (req,res,next)=>{
    try{
        const url = 'https://newsapi.org/v2/everything?q=environment&apiKey='+news2;
        const url2 = 'https://newsapi.org/v2/everything?q=Featured&apiKey='+news2;
        const response = await axios.get(url);
        const response2 = await axios.get(url2);
        var numPost = 10;
        var value = false;
        res.render('home',{response,response2,numPost,value})
    } catch(error){
        next(error)
    }
})

app.get('/wildlife', async (req,res,next)=>{
    try{
        const url = 'https://newsapi.org/v2/everything?q=wildlife&apiKey='+news2;
        const url2 = 'https://newsapi.org/v2/everything?q=Featured&apiKey='+news2;
        const response = await axios.get(url);
        const response2 = await axios.get(url2);
        var numPost = 10;
        var value = false;
        res.render('home',{response,response2,numPost,value})
    } catch(error){
        next(error)
    }
})

app.get('/astronomy', async (req,res,next)=>{
    try{
        const url = 'https://images-api.nasa.gov/search?q=Galaxy';
        const url2 = 'https://newsapi.org/v2/everything?q=Featured&apiKey='+news2;
        const response = await axios.get(url);
        const response2 = await axios.get(url2);
        res.render('index',{response,response2})
    } catch(error){
        next(error)
    }
})

app.get('/gaming', async (req,res,next)=>{
    try{
        const url = 'https://newsapi.org/v2/everything?q=gaming&apiKey='+news2;
        const url2 = 'https://newsapi.org/v2/everything?q=Featured&apiKey='+news2;
        const response = await axios.get(url);
        const response2 = await axios.get(url2);
        res.render('gaming',{response,response2})
    } catch(error){
        next(error)
    }
})

app.get('/sports', async (req,res,next)=>{
    try{
        const url = 'https://newsapi.org/v2/everything?q=NBA&apiKey='+news2;
        const url2 = 'https://newsapi.org/v2/everything?q=Featured&apiKey='+news2;
        const response = await axios.get(url);
        const response2 = await axios.get(url2);
        res.render('sports',{response,response2})
    } catch(error){
        next(error)
    }
})

app.get('/food', async (req,res,next)=>{
    try{
        const url = 'https://newsapi.org/v2/everything?q=Food&apiKey='+news2;
        const url2 = 'https://newsapi.org/v2/everything?q=Featured&apiKey='+news2;
        const response = await axios.get(url);
        const response2 = await axios.get(url2);
        res.render('food',{response,response2})
    } catch(error){
        next(error)
    }
})

app.get('/travel', async (req,res,next)=>{
    try{
        const url = 'https://newsapi.org/v2/everything?q=Travel&apiKey='+news2;
        const url2 = 'https://newsapi.org/v2/everything?q=Featured&apiKey='+news2;
        const response = await axios.get(url);
        const response2 = await axios.get(url2);
        res.render('travel',{response,response2})
    }
    catch(error){
        next(error)
    }
})

app.get('/music', async (req,res,next)=>{
    try{
        const url = 'https://newsapi.org/v2/everything?q=Music&apiKey='+news2;
        const url2 = 'https://newsapi.org/v2/everything?q=Featured&apiKey='+news2;
        const response = await axios.get(url);
        const response2 = await axios.get(url2);
        res.render('music',{response,response2})
    } catch(error){
        next(error)
    }
})

app.get('/arts', async (req,res,next)=>{
    try{
        const url = 'https://newsapi.org/v2/everything?q=Paintings&apiKey='+news2;
        const url2 = 'https://newsapi.org/v2/everything?q=Featured&apiKey='+news2;
        const response = await axios.get(url);
        const response2 = await axios.get(url2);
        res.render('arts',{response,response2})
    } catch(error){
        next(error)
    }
})

// Middleware
app.all('*', (req,res,next) => {
    next(new AppError('Page Not Found',404))
 })

 // Error Handling
app.use((err, req, res, next) => {
    res.render('error');
})


// Port
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`Listening at Port ${port}`)
})

