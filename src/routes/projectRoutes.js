import express from 'express';
import { getProjects, CreateProject, getProjectById, deleteProject } from '../controllers/projectController.js';

const router = express.Router();

router.get('/projects', getProjects);
router.post('/projects', CreateProject);
router.get('/projects/:id', getProjectById);
router.delete('/projects/:id', deleteProject);

export default router;