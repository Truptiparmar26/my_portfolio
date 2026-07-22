import Service from '../models/Service.js';
import crudFactory from '../utils/crudFactory.js';

export const serviceController = crudFactory(Service);
