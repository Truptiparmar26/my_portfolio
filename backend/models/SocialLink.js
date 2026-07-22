import mongoose from 'mongoose';

const socialLinkSchema = new mongoose.Schema(
  {
    platform: {
      type: String,
      required: [true, 'Please add a platform name'],
      trim: true,
    },
    url: {
      type: String,
      required: [true, 'Please add a URL'],
      match: [
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
        'Please use a valid URL with HTTP or HTTPS',
      ],
    },
    icon: {
      type: String, // Can be react-icon name
      required: [true, 'Please add an icon'],
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

const SocialLink = mongoose.model('SocialLink', socialLinkSchema);

export default SocialLink;
