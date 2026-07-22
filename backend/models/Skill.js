import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a skill name'],
      trim: true,
    },
    icon: {
      type: String, // Can be a react-icon name or image URL
      required: [true, 'Please add a skill icon'],
    },
    category: {
      type: String,
      required: [true, 'Please select a category'],
      enum: ['Frontend', 'Backend', 'Tools', 'Design', 'Other'],
    },
    proficiency: {
      type: Number,
      required: true,
      min: 1,
      max: 100,
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

const Skill = mongoose.model('Skill', skillSchema);

export default Skill;
