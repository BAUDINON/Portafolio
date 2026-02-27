import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

export const Project = sequelize.define('Project', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    mainImage: {
        type: DataTypes.STRING,
        validate: { isUrl: true }
    },
    images: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: []
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    repoUrl: {
        type: DataTypes.STRING,
        validate: { isUrl: true }
    },
    category: {
        type: DataTypes.ENUM('Web', 'Mobile', 'Desktop'),
        defaultValue: 'Web'
    }
});

