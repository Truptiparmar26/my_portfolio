import Project from '../models/Project.js';
import crudFactory from '../utils/crudFactory.js';

export const projectController = crudFactory(Project);
