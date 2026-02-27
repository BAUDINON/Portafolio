import { Project } from '../models/Project.js';

export const getProjects = async (req, res) => {
    try {
        const projects = await Project.findAll();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los proyectos', error: error.message });
    }
};

export const getProjectById = async (req, res) => {
    try {
        const { id } = req.params;
        const project = await Project.findByPk(id);
        if (!project) {
            return res.status(404).json({ message: 'Proyecto no encontrado' });
        }
        res.status(200).json(project);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el proyecto', error: error.message });
    }
};

export const CreateProject = async (req, res) => {
    try {
        const {title, description, mainImage, images, repoUrl, category} = req.body;
        
        const newProject = await Project.create({
            title,
            description,
            mainImage,
            images,
            repoUrl,
            category
        });

        res.status(201).json({
            message: 'Proyecto creado exitosamente',
            data: newProject
        });
    } catch (error) {
        console.log('Error al crear el proyecto:', error);
        res.status(500).json({
            message: 'Error al crear el proyecto',
            error: error.message
        });
    }
};

export const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, mainImage, images, repoUrl, category } = req.body;
        const updated = await Project.update({
            title,
            description,
            mainImage,
            images,
            repoUrl,
            category
        }, {
            where: { id: id }
        });

        if (updated[0] === 0) {
            return res.status(404).json({ message: 'Proyecto no encontrado o no actualizado' });
        }
        res.status(200).json({ message: 'Proyecto actualizado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el proyecto', error: error.message });
    }
};



export const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Project.destroy({
             where: { id: id }
        });

        if (deleted === 0) {
            return res.status(404).json({ message: 'Proyecto no encontrado o ya eliminado' });
        }
        res.status(200).json({ message: 'Proyecto eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el proyecto', error: error.message });
    }
};