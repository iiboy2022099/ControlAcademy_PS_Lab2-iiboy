const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos, } = require('../middlewares/validar-campos');

const { cursosPost, } = require('../controllers/curso.controllers');

const { existeCursoById } = require('../helpers/db-validator-cursos');


const router = Router();


router.post(
    '/',
    [

    check("nombre", "El nombre del curso no puede estar vacío").not().isEmpty(),
    check("tiempo", "El tiempo no puede estar vacío").not().isEmpty(),
    check("descripcion", "La descripción del curso no puede estar vacío").not().isEmpty(),
    
    validarCampos,

    ], cursosPost);