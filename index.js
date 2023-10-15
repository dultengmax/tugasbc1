const express = require ('express')
const path = require ('path')
const app = express()
const port= 5000

app.set('view engine', 'hbs')
app.set( 'views', path.join(__dirname,'src/views'))

// parshing
app.use(express.urlencoded({extended: true})); 


app.get('/',home)
app.get('/home',home)
app.get('/addproject',addproject)
app.get('/contact',contact)
app.get('/testimony',testimony)
app.post('/addproject',addblog)

// static file servers
app.use(express.static('src/assets'))


function home(req,res){
    res.render('index')
}
function addproject(req,res){
    res.render('MyProject.hbs')
}
function contact(req,res){
    res.render('contact')
}
function testimony(req,res){
    res.render('testimony')
}
function addblog(req,res){
    const { title, content } = req.body
    // const title = req.body.title
    // const content = req.body.content
    console.log(title);
    console.log(content);}


app.listen(port,()=>{
    console.log("app listening on port 5000");
})


