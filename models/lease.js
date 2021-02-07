module.exports=(sequelize,DataTypes)=>{    
const Lease=sequelize.define("Lease",{
    start_date:{
        type:DataTypes.STRING,
        allowNull:false,
        required:true

    },
    price:{
        type:DataTypes.DECIMAL(8,2),
        allowNull:false,
        required:true
    },
    payment_type:{
        type:DataTypes.STRING,
        allowNull:false,
        required:false
    },

},
{
    freezeTableName:true,
    timestamps:false

});

return Lease;

}