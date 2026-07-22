import mongoose from 'mongoose';

const certificateSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a certificate title'],
      trim: true,
    },
    organization: {
      type: String,
      required: [true, 'Please add the issuing organization'],
      trim: true,
    },
    issueDate: {
      type: Date,
      required: [true, 'Please add the issue date'],
    },
    credentialUrl: {
      type: String,
      match: [
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
        'Please use a valid URL with HTTP or HTTPS',
      ],
    },
    image: {
      url: { type: String, required: true },
      public_id: { type: String, required: true }
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

const Certificate = mongoose.model('Certificate', certificateSchema);

export default Certificate;
