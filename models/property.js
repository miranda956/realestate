module.exports=(sequelize,DataTypes)=>{
    const Property=sequelize.define("Property",{

        address:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true,


        },
        of_type:{ 
            type:DataTypes.STRING,
            allowNull:false,
            required:true

        },
        lot_size:{
            type:DataTypes.INTEGER,
            allowNull:false,
            required:true
        },
        property_name:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true

        },
        build_year:{  
            type:DataTypes.INTEGER,
            allowNull:false,
            required:true

        },  
        postalcode:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        Rooms:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        date:{
            type:DataTypes.DATE,
            allowNull:false,
            required:true
        },
        price:{
            type:DataTypes.DECIMAL,
            allowNull:false,
            
        },
        location:{
            type:DataTypes.STRING,
            required:true,
            allowNull:false

        },
        description:{
            type:DataTypes.TEXT,
            allowNull:true,
            
        },
        image:{
           type:DataTypes.STRING,
           required:true,
           allowNull:false 
        },
        
        
    
    },

    {
        freezeTableName:true,
        timestamps:false
    });
    Property.associate=(models)=>{
        Property.belongsTo(models.Owner,{
            foreignkey:{
                allowNull:false
            }
        }),
        Property.belongsToMany(models.Client,{
            through:'Lease'
        })
    }

    return Property;
}  