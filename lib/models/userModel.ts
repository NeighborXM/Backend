import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  username: {
    type: String,
    required: 'Enter a username'
  },
  firstName: {
    type: String,
    required: 'Enter your first name'
  },
  lastName: {
    type: String,
    required: 'Enter your last name'
  },
  email: {
    type: String,
    required: 'Enter your e-mail address'
  },
  church: {
    type: String
  },
  company: {
    type: String
  },
  phone: {
    type: Number
  },
  created_date: {
    type: Date,
    default: Date.now
  }
})
