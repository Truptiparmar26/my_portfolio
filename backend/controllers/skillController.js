import Skill from '../models/Skill.js';
import crudFactory from '../utils/crudFactory.js';

export const skillController = crudFactory(Skill);
