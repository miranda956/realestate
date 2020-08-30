module.exports=(sequelize,DataTypes)=>{
    const Owner=sequelize.define("Owner",{
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
        contact:{
            type:DataTypes.INTEGER,
            required:true,
            allowNull:false,
            validate:{
                len:[10]
            }
        },
        gender:{
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
        },
        
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
    Owner.associate=(models)=>{
        Owner.hasMany(models.Property,{
            foreignkey:{
                allowNull:false
            }
        }),
        Owner.belongsToMany(models.Client,{
            through:"lease"
        })

    }
    return Owner;
}