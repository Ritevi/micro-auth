const Sequelize = require("sequelize");
const sequelize = require("../../libs/sequelize");

class User extends Sequelize.Model {}

User.init(
    {
        userId:{
            primaryKey: true,
            type: Sequelize.INTEGER,
            autoIncrement:true
        },
        username:{
            allowNull: false,
            type: Sequelize.STRING(64),
            unique:true
        },
        hashPassword:{
            allowNull:false,
            type:Sequelize.STRING
        },
        email:{
            allowNull:false,
            type:Sequelize.STRING,
            unique:true
        }
    },
    {
        sequelize,
        modelName: "user",
        timestamps: false,
    }
);

User.prototype.getJSON = async function (){
        let returnData = this.toJSON();
    return returnData;
}

sequelize.sync({alter:true});
module.exports = User;