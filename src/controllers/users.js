const {Users}=require('../db/models')
const{randomusername}=require('../utils/username')

async function createAnonUser() {
    const user=await Users.create({
        username:randomusername()
    })
    return user
}

async function getUserById(id) {
    if (isNaN(id)) {
        throw new Error('User id should be integer')
    }
    return await Users.findOne({where:{id}})
}

async function getUserByUsername(username) {
    return await Users.findOne({where:{username}})
}
module.exports={
  createAnonUser,
  getUserById,
  getUserByUsername
}
// code for testing
// async function task() {
//     console.log(await createAnonUser());
//     console.log('-------------------');
//     console.log(await createAnonUser());
//     console.log('-------------------');
//     console.log(await createAnonUser());
//     console.log('-------------------');
// }

// task()