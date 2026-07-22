import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    title: {
      type: String,
      required: [true, 'Please add a title'], // e.g., "Full Stack MERN Developer"
    },
    bio: {
      type: String,
      required: [true, 'Please add a short bio'],
    },
    about: {
      type: String,
      required: [true, 'Please add a detailed about section'],
    },
    resumeUrl: {
      type: String,
    },
    heroImage: {
      url: { type: String },
      public_id: { type: String }
    },
    aboutImage: {
      url: { type: String },
      public_id: { type: String }
    },
    contactEmail: {
      type: String,
      required: [true, 'Please add a contact email'],
    },
    phone: {
      type: String,
    },
    location: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Profile = mongoose.model('Profile', profileSchema);

export default Profile;
