import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, 'Please add a company name'],
      trim: true,
    },
    role: {
      type: String,
      required: [true, 'Please add a role/title'],
      trim: true,
    },
    startDate: {
      type: Date,
      required: [true, 'Please add a start date'],
    },
    endDate: {
      type: Date,
    },
    current: {
      type: Boolean,
      default: false,
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
    },
    responsibilities: {
      type: [String],
    },
    technologies: {
      type: [String],
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

const Experience = mongoose.model('Experience', experienceSchema);

export default Experience;
