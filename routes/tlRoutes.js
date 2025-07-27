const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const Project = require('../models/projectModel');
const Hour = require('../models/hourModel');

// Crear proyecto (TL)
router.post('/create-project', async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Ver horas de usuarios bajo su responsabilidad
router.get('/hours', async (req, res) => {
  // TL id por req.userId o por parámetro
  const tlId = req.query.tlId;
  const tl = await User.findById(tlId).populate('assignedUsers');
  const userIds = tl.assignedUsers.map(u => u._id);
  const hours = await Hour.find({ user: { $in: userIds } }).populate('user project');
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

module.exports = router;
