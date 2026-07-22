import Profile from '../models/Profile.js';
import crudFactory from '../utils/crudFactory.js';

export const profileController = crudFactory(Profile);

// Additional specific methods for Profile could be added here if needed
