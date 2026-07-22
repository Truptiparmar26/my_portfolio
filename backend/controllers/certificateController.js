import Certificate from '../models/Certificate.js';
import crudFactory from '../utils/crudFactory.js';

export const certificateController = crudFactory(Certificate);
