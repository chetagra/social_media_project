const {Posts,Users}=require('../db/models')

async function createNewPosts(userId,title,body) {
 const post= await Posts.create({
     title,
     body,
     userId
 })
 return post
}

async function findAllPosts(query) {

    const posts=await Posts.findAll({
        include:[Users]
    })
    return posts
}

module.exports={
    createNewPosts,
    findAllPosts
}

//testing code
/*
async function task() {
    // console.log(await createNewPosts(1,'post 1','some body'));
    // console.log(await createNewPosts(2,'post 2','some body'));

    const posts=await showAllPosts()
     
    for (let p of posts) {
       console.log(`${p.title}\n${p.body}\n${p.user.username}\n======\n`);
    }

}

task()
*/