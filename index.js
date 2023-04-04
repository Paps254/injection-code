const Sequelize =require('sequelize');

const sequelize = new Sequelize('sequelize_video','root', '',{
    dialect: 'mysql',
    define:{
        freezeTableName:true
    }
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

User.sync({force:true}).then((data) => {
    console.log("Table and model synced successfully!");
}).catch((err) => {
    console.log("Error syncing the table and model!");
});