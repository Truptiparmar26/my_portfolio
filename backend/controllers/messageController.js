import Message from '../models/Message.js';
import crudFactory from '../utils/crudFactory.js';

export const messageController = crudFactory(Message);
