
const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const Project = require('../models/projectModel');
const Hour = require('../models/hourModel');

// Crear usuario
router.post('/create-user', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Crear proyecto
router.post('/create-project', async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Listar usuarios
router.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Listar proyectos
router.get('/projects', async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// Ver todas las horas
router.get('/hours', async (req, res) => {
  const hours = await Hour.find().populate('user project');
  res.json(hours);
});

// Ver horas de un usuario
router.get('/hours/:id', async (req, res) => {
  const hours = await Hour.find({ user: req.params.id }).populate('project');
  res.json(hours);
});

// Modificar horas de un usuario
router.put('/hours/:id', async (req, res) => {
  try {
    const hour = await Hour.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(hour);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Eliminar usuario
router.delete('/user/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'Usuario eliminado' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;