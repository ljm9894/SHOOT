const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            shoot_id:{
                type : Sequelize.STRING(30),
                allowNull : false,
                unique: true,
            },
            password:{
                type : Sequelize.STRING(10),
                allowNull: false,
            },
            name :{
                type : Sequelize.STRING(10),
                allowNull : false,
            },
            nick : {
                type : Sequelize.STRING(15),
                allowNull : false,
            },
            birth :{
                type : Date,
                allowNull: true,
            },
            email:{
                type: Sequelize.STRING(40),
                allowNull: false,
            },
            mobile_number:{
                type : Sequelize.STRING(15),
                allowNull : false,
                unique : true,
            },
            user_type : {
                type : Sequelize.STRING(10),
                allowNull: false,
            },
            provider : {
                type : Sequelize.STRING(10),
                allowNull: false,
                defaultValue : 'local',
            }
        },{
            sequelize,
            timestamps : true,
            underscored : false,
            modelName : 'User',
            tableName: 'users',
            paranoid : true,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db){}
};