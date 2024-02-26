const bcryptjs = require('bcryptjs');
const Curso = require('../models/curso');
const { existeCursoById } = require('../helpers/db-validator-cursos')

const { response, request } = require('express');

const cursosPost = async (req, res) => {
    const { nombre, tiempo, descripcion } = req.body;
    const curso = new Curso({ nombre, tiempo, descripcion });

    await curso.save();
    res.status(200).json({
        curso
    });
};

module.exports ={
    cursosPost
}