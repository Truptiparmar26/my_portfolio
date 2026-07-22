import mongoose from 'mongoose';

const aiProjectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a project title'],
      trim: true,
      maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
    },
    image: {
      url: { type: String, required: true },
      public_id: { type: String, required: true }
    },
    videoPreviewUrl: {
      type: String,
    },
    technologies: {
      type: [String],
      required: true, // e.g., Python, TensorFlow, OpenAI, PyTorch
    },
    modelType: {
      type: String,
      required: true, // e.g., LLM, CNN, GAN, Transformer
    },
    datasetUsed: {
      type: String, // e.g., Custom, ImageNet, HuggingFace Dataset
    },
    performanceMetrics: {
      type: Map,
      of: String, // e.g., { "Accuracy": "98%", "F1-Score": "0.95" }
    },
    features: {
      type: [String],
    },
    githubUrl: {
      type: String,
    },
    liveUrl: {
      type: String,
    },
    featured: {
      type: Boolean,
      default: false,
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

const AIProject = mongoose.model('AIProject', aiProjectSchema);

export default AIProject;
