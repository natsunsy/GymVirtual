const Routine = require('../models/Routine');
const {errorHandler} = require('../helpers/dberrorHandler');

exports.create = (req,res) => {
    const publicacion = new Routine(req.body)
    publicacion.save((err,data) => {
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json(data);
    })
}

exports.list = (req,res) => {
    Routine.find().exec((err,data)=>{
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({data});
    })
}

exports.item = (req,res, next) => {
    if (req.publicacion) {
        return res.send(req.publicacion)
    }
    next();
}

exports.remove = (req, res) => {
    let publicacion = req.publicacion
    publicacion.remove((err,data)=>{
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({
            message: "Routine eliminada"
        });
    })

}

exports.publicacionById = (req, res, next, id) => {
    Routine.findById(id).exec((err, publicacion)=>{
        if(err || !publicacion){
            return res.status(400).json({
                error: "Routine no encontrada o no existe"
            })
        }
        req.publicacion = publicacion;
        next();
    })
}

exports.publicacionbyuser = (req,res) => {
    let user = req.params.user;
    console.log(user);
    Routine.find({user: user}).exec((err,data)=>{
        
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }

        res.json({data});
    })
}

