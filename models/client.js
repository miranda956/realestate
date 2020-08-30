module.exports=(sequelize,DataTypes)=>{
    const Client=sequelize.define("Client",{
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
            required:true,
            validate:{
                isEmail:true
            }
        },
        gender:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true
        },
        contact:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true,
            validate:{
                len:[10]
            }
        },
        city:{
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
        
    },{
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
    Client.associate=(models)=>{
        Client.belongsToMany(models.Property,{
            through:"Lease"

        });
    }

    return Client;
}