import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
      trim: true,
    },
    role: {
      type: String,
      required: [true, 'Please add a role/title'],
      trim: true,
    },
    company: {
      type: String,
      trim: true,
    },
    text: {
      type: String,
      required: [true, 'Please add testimonial text'],
    },
    image: {
      url: { type: String },
      public_id: { type: String }
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    },
    order: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true,
  }
);

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

export default Testimonial;
