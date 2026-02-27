import express from 'express';
import { verifyToken } from '../middlewares/authMiddleware.js';
import { getProjects, CreateProject, getProjectById, deleteProject, updateProject } from '../controllers/projectController.js';

const router = express.Router();

router.get('/projects', getProjects);
router.post('/projects', verifyToken, CreateProject);
router.put('/projects/:id', verifyToken, updateProject);
router.get('/projects/:id', verifyToken, getProjectById);
router.delete('/projects/:id', verifyToken, deleteProject);


export default router;