module.exports=(sequelize,DataTypes)=>{
const Rent=sequelize.define("Rent",{
    
    rentedat_Date:{
        type:DataTypes.DATE,
        allowNull:false
        // iam figuring out 
    },
    property_name:{
        type:DataTypes.STRING,
    
    },
    Room:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price:{

        type:DataTypes.DECIMAL,
        allowNull:false
    },
    f_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    l_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    contact:{
        type:DataTypes.STRING,
        allowNull:false

    },
    ispaid:{
        type:DataTypes.BOOLEAN,
        default:false

    }

})

return Rent;

}