import Experience from '../models/Experience.js';
import crudFactory from '../utils/crudFactory.js';

export const experienceController = crudFactory(Experience);
