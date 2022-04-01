const axios= require('axios');
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Countries, Actividades }=require('../db.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/countries', async (req,res)=>{
    // Guardo la respuesta de la api
    let lista= await Countries.findAll({
        attributes:['Nombre','Imagen','Continente']
    });   
    
    if(lista.length<1){
        let respuesta= await axios.get('https://restcountries.com/v3/all')
        const paises=respuesta.data.map(pais=>{
           return{
            Nombre: pais.name.common,
            Imagen: pais.flags[1],
            Continente: pais.continents[0],
            Subregion: pais.subregion,
            Area: pais.area,
            Poblacion: pais.population,
           }
        })
        await Countries.bulkCreate(paises)
    }
     lista= await Countries.findAll({
        attributes:['Nombre','Imagen','Continente','Subregion','Area','Poblacion']
    });   
   
        res.json(lista)
        res.status(200)
})

router.get('/countries/:idPais', async (req,res)=>{
    const id=req.params.idPais
    const instance = await Countries.findOne({
        where: { id: id }
        });
    res.json(instance.toJSON())
    res.status(200)
   
})

router.get('/countries?name',async(req,res)=>{
    const {name}=req.query
    
   
    if(name===null){
        res.send("El país no existe")
        res.status(404)
    }else{
        
    }
 })

router.post('/activity',async (req,res)=>{
    const {Nombre,Dificultad,Duracion,Temporada}=req.body;
try{
    const actividad= Actividades.build({
        Nombre: Nombre,
        Dificultad:Dificultad,
        Duracion:Duracion,
        Temporada:Temporada,
    })
    await actividad.save()
    res.status(200)
    res.json(actividad.toJSON())
}catch(e){
    console.log(e)
}   
    
})



module.exports = router;
