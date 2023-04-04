const Sequelize =require('sequelize');

const sequelize = new Sequelize('sequelize_video','root', '',{
    dialect: 'mysql',
})

sequelize.authenticate().then(()=>{
    console.log('connection successful');
    }).catch(err=>{
        console.log('connection error',err);
})

// async function myFunction(){
//     await sequelize.authenticate();
//     console.log("connection successful");
// }

// myFunction();

console.log("Another task");