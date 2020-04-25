import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const NeedSchema = new Schema({
  firstName: {
    type: String,
    required: 'Enter your first name'
  },
  lastName: {
    type: String,
    required: 'Enter your last name'
  },
  phoneNumber: {
    type: String,
    required: 'Enter your phone number'
  },
  email: {
    type: String,
    required: 'Enter your email address (primary)'
  },
  location: {
    type: {
     type: String, // Don't do `{ location: { type: String } }`
     enum: ['Point'], // 'location.type' must be 'Point'
     required: true
   },
   coordinates: {
     type: [Number],
     required: true
   }
  },
  timeDate: {
    type: Date,
    default: Date.now
  },
  requestType: {
    type: String,
    enum: ['Food Assistance', 'Emergency Assistance', 'Mental Health', 'Pastoral Care', 'Prayer'],
    default: 'Emergency Assistance'
  },
  description: {
    type: String,
    maxLength: 100
  }
})
