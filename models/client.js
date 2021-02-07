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
        
        pwd:{
            type:DataTypes.STRING,
            allowNull:false,
            required:true

        },
        
    },
    {
        freezeTableName:true,
        timestamps:false
    },
    {
        instanceMethods:{
            genereteHash(pwd){
                // @ts-ignore
                return bcrypt.hashSync(pwd,bcrpt.genSaltSync(8));
            },
            validpassword(pwd){
                // @ts-ignore
                return bcrypt.compare(pwd,this.pwd)
            }
        }    
        },
    
    );
    Client.associate=(models)=>{
        Client.belongsToMany(models.Property,{
            through:"Lease"

        });
    }

    return Client;
}