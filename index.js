const Sequelize =require('sequelize');
const {DataTypes,Op} =Sequelize;


const sequelize = new Sequelize('sequelize_video','root', '',{
    dialect: 'mysql',
    // define:{
    //     freezeTableName:true
    // }
})

// sequelize.sync({force:true});

// sequelize.authenticate().then(()=>{
//     console.log('connection successful');
//     }).catch(err=>{
//         console.log('connection error',err);
// })

// async function myFunction(){
//     await sequelize.authenticate();
//     console.log("connection successful");
// }

// myFunction();

// console.log("Another task");


const User = sequelize.define('user',{
    user_id:{
        type:Sequelize.DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    fname:{
        type:Sequelize.DataTypes.STRING,
        allowNull: false
    },
    username:{
        type:Sequelize.DataTypes.STRING,
        allowNull: false
    },
    password:{
        type:Sequelize.DataTypes.STRING,
    },
    age:{
        type:Sequelize.DataTypes.INTEGER,
        defaultValue:18 
    },

    // true or false,
    // wittCodeRocks:{
    //     type:Sequelize.DataTypes.BOOLEAN,
    //     defaultValue:true
    // }
    
},
{
    freezeTableName:true,
    timestamps:false
});

// to access our tables
// sequelize.models.user 

// 1.User.sync({alter:true}).then((data) => {
// // console.log("Table and model synced successfully!");

// //working with our updated table.
// return User.create({
//     username:"john",
//     password:"123add",
//     age:18
// })
// //return User.bulkCreate([{},{}])


// }).then((data) => {
//     console.log("User added to database");
//     //return data.save({fields:['age']});
//     //data.decrement({age:1});
//     //data.increment({age:1});


//     // to get the lastest feed
//     console.log(data.toJSON()); 


User.sync({alter:true}).then(() => {
    //working with our updated table
    return User.findAll({attribute:['username','password']});
    //attribute:{exclude['password]}--displays everything except give string
    //attribute:[[sequelize.fn('SUM',sequelize.col('age')),'howOld']]--adds all ages
    //where:{age:22,username:'kuni'} or attribute:['username'],where:{age:45}--only gives out the exact thing wanted
    //limit:2 --give the first two
    //order:[['age','DESC']]
    //attribute:['username',[sequelize.fn('SUM',sequelize.col('age')),'sum_age']], group :'username'
    //where:{[Op.or]:{username:'soccer',age:45}}
    //where:{age:{[Op.gt]:25}}--select where age is greater than 25
    //where:{age:{[Op.or]:{[Op.lt]:45,[Op.eq]:null}}}--select where age is less or equal to
    //return User.update({username: 'john'},{where:{age:18}})
    //return User.destroy({where:{unsername:'Yes!'}})
    //return User.destroy({truncate:true})--deletes very record in the table 


}).then((data) => {
    data.forEach((element)=>{
        console.log(element.toJSON());
    })

}).catch((err) => {
    console.log("Error syncing the table and model!",err);
});