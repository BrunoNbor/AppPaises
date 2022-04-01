const {DataTypes}=require('sequelize');

module.exports=(sequelize)=>{
    sequelize.define('countries',{
        Nombre:{
            type: DataTypes.STRING,
        },
        Imagen:{
            type: DataTypes.STRING,
        },
        Continente:{
            type: DataTypes.STRING,
        },
        Capital:{
            type: DataTypes.STRING,
        },
        Subregion:{
            type: DataTypes.STRING,
        },
        Area:{
            type: DataTypes.STRING,
        },
        Poblacion:{
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: false
    })
}