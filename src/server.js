const express=require('express')

const {db}=require('./db/models')
const {usersRoute}=require('./routes/users')
const {postsRoute}=require('./routes/posts')

const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/users', usersRoute)
app.use('/api/posts', postsRoute)
app.use('/',express.static(__dirname+'/public'))

db.sync()
   .then(()=>{
    app.listen(3599,()=>{
        console.log('server started on http://localhost:3599');
    })
    })
    .catch((err)=>{
        console.error(new Error('Could not start db'));
        console.error(err);
    })
