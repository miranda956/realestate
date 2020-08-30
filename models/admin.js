

module.exports=(sequelize,DataTypes)=>{
    const Admin=sequelize.define("Admin",{
        f_name:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        l_name:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        date:{
            type:DataTypes.DATE,
            allowNull:false,
            required:true
        },
        pwd:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        }

    },
    {
        instanceMethods:{
            genereteHash(pwd){
                return bcrypt.hashSync(pwd,bcrpt.genSaltSync(8));
            },
            validpassword(pwd){
                return bcrypt.compare(pwd,this.pwd)
            }
        }    
        },


    {
        freezeTableName:true
    });
    return Admin;


}