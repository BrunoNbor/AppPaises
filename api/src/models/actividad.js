const {DataTypes}=require('sequelize');

module.exports=(sequelize)=>{
    sequelize.define('actividades',{
        Nombre: {
            type: DataTypes.STRING,
        },
        Dificultad:{
            type: DataTypes.INTEGER,
        },
        Duracion:{
            type: DataTypes.INTEGER,
        },
        Temporada:{
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: false
    })
}