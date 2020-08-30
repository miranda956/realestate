module.exports=(sequelize,DataTypes)=>{
const Image=sequelize.define("Image",{
imageLink:{
    type:DataTypes.STRING,
    allowNull:false,
    required:true
},
comment:{
    type:DataTypes.TEXT,
    allowNull:true

}

},
{
    freezeTableName:true
}
);
Image.associate=(models)=>{
    Image.belongsTo(models.Property,{
        foreignkey:{
            allowNull:false
        }
    })
}
return Image;
}