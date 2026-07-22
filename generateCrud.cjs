const fs = require('fs');
const path = require('path');

const models = [
  'Project',
  'Skill',
  'Experience',
  'Certificate',
  'Service',
  'Testimonial',
  'Message',
  'SocialLink',
  'AIProject'
];

models.forEach((model) => {
  const modelName = model.toLowerCase();
  const controllerPath = path.join(__dirname, 'backend', 'controllers', `${modelName}Controller.js`);
  const routePath = path.join(__dirname, 'backend', 'routes', `${modelName}Routes.js`);

  const controllerContent = `import ${model} from '../models/${model}.js';
import crudFactory from '../utils/crudFactory.js';

export const ${modelName}Controller = crudFactory(${model});
`;

  const routeContent = `import express from 'express';
import { ${modelName}Controller } from '../controllers/${modelName}Controller.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.route('/')
  .get(${modelName}Controller.getAll)
  .post(protect, admin, ${modelName}Controller.createOne);

router.route('/:id')
  .get(${modelName}Controller.getOne)
  .put(protect, admin, ${modelName}Controller.updateOne)
  .delete(protect, admin, ${modelName}Controller.deleteOne);

export default router;
`;

  fs.writeFileSync(controllerPath, controllerContent);
  fs.writeFileSync(routePath, routeContent);
  console.log(`Created CRUD for ${model}`);
});
