const express = require('express');
const router = express.Router();
const Hour = require('../models/hourModel');
const Project = require('../models/projectModel');

// Registrar inicio de trabajo
router.post('/start', async (req, res) => {
  try {
    const { userId, projectId, date, startTime, endTime, duration} = req.body;
    const hour = new Hour({
      user: userId,
      project: projectId,
      date: date,
      startTime: startTime,
      endTime: endTime,
      duration: duration
    });
    await hour.save();
    res.status(201).json(hour);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// Ver horas propias
router.get('/hours/:userId', async (req, res) => {
  const hours = await Hour.find({ user: req.params.userId }).populate('project');
  res.json(hours);
});

// Modificar horas propias
router.put('/hours/:id', async (req, res) => {
  try {
    const hour = await Hour.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(hour);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
