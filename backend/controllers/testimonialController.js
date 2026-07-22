import Testimonial from '../models/Testimonial.js';
import crudFactory from '../utils/crudFactory.js';

export const testimonialController = crudFactory(Testimonial);
